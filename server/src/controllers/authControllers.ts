import { Request, Response } from "express";
import { PrismaClient, TipoUsuario } from "@prisma/client";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import crypto from "crypto";
import EmailService from "../services/emailService";

const prisma = new PrismaClient();
const emailService = new EmailService();

const JWT_SECRET = process.env.JWT_SECRET || "your-secret-key";

export const register = async (req: Request, res: Response): Promise<void> => {
  try {
    const { nombre, email, password, tipo } = req.body;

    if (!nombre || !email || !password || !tipo) {
      res.status(400).json({ message: "Todos los campos son obligatorios" });
      return;
    }

    if (!Object.values(TipoUsuario).includes(tipo)) {
      res.status(400).json({ message: "Tipo de usuario inválido" });
      return;
    }

    const existingUser = await prisma.usuario.findUnique({
      where: { email }
    });

    if (existingUser) {
      res.status(400).json({ message: "El usuario ya existe" });
      return;
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    // Generar token de verificación de email
    const emailVerificationToken = crypto.randomBytes(32).toString('hex');
    const emailVerificationExpiry = new Date(Date.now() + 24 * 60 * 60 * 1000); // 24 horas

    const newUser = await prisma.usuario.create({
      data: {
        nombre,
        email,
        password: hashedPassword,
        tipo: tipo as TipoUsuario,
        emailVerificationToken,
        emailVerificationExpiry,
        isEmailVerified: false
      },
      select: {
        id: true,
        nombre: true,
        email: true,
        tipo: true,
        isEmailVerified: true,
        createdAt: true
      }
    });

    // Enviar email de verificación
    const emailSent = await emailService.sendEmailVerification(email, emailVerificationToken);

    res.status(201).json({
      message: emailSent 
        ? "Usuario creado exitosamente. Revisa tu email para confirmar tu cuenta." 
        : "Usuario creado. Confirma tu cuenta usando el token proporcionado.",
      user: newUser,
      needsEmailVerification: true,
      ...((!emailSent && process.env.NODE_ENV !== 'production') && { 
        verificationToken: emailVerificationToken 
      })
    });

  } catch (error) {
    console.error("Error en registro:", error);
    res.status(500).json({ message: "Error interno del servidor" });
  }
};

export const login = async (req: Request, res: Response): Promise<void> => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      res.status(400).json({ message: "Email y contraseña son obligatorios" });
      return;
    }

    const user = await prisma.usuario.findUnique({
      where: { email }
    });

    if (!user) {
      res.status(401).json({ message: "Credenciales inválidas" });
      return;
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      res.status(401).json({ message: "Credenciales inválidas" });
      return;
    }

    // Verificar si el email está confirmado
    if (!user.isEmailVerified) {
      res.status(401).json({ 
        message: "Debes confirmar tu email antes de poder iniciar sesión. Revisa tu bandeja de entrada.",
        needsEmailVerification: true 
      });
      return;
    }

    const token = jwt.sign(
      { 
        userId: user.id, 
        email: user.email, 
        tipo: user.tipo 
      },
      JWT_SECRET,
      { expiresIn: "24h" }
    );

    const { password: _, ...userWithoutPassword } = user;

    res.json({
      message: "Inicio de sesión exitoso",
      user: userWithoutPassword,
      token
    });

  } catch (error) {
    console.error("Error en login:", error);
    res.status(500).json({ message: "Error interno del servidor" });
  }
};

export const forgotPassword = async (req: Request, res: Response): Promise<void> => {
  try {
    const { email } = req.body;

    if (!email) {
      res.status(400).json({ message: "El email es obligatorio" });
      return;
    }

    const user = await prisma.usuario.findUnique({
      where: { email }
    });

    if (!user) {
      res.status(404).json({ message: "Usuario no encontrado" });
      return;
    }

    const resetToken = crypto.randomBytes(32).toString('hex');
    const resetTokenExpiry = new Date(Date.now() + 3600000); // 1 hour

    await prisma.usuario.update({
      where: { email },
      data: {
        resetToken,
        resetTokenExpiry
      }
    });

    // Intentar enviar el email
    const emailSent = await emailService.sendPasswordResetEmail(email, resetToken);

    if (emailSent) {
      res.json({
        message: "Se ha enviado un enlace de recuperación a tu email"
      });
    } else {
      // Si falla el envío del email, devolver el token para testing (solo en desarrollo)
      const isDevelopment = process.env.NODE_ENV !== 'production';
      res.json({
        message: isDevelopment 
          ? "Error al enviar el email. Token de recuperación (solo desarrollo)" 
          : "Error al enviar el email de recuperación",
        ...(isDevelopment && { resetToken })
      });
    }

  } catch (error) {
    console.error("Error en forgot password:", error);
    res.status(500).json({ message: "Error interno del servidor" });
  }
};

export const resetPassword = async (req: Request, res: Response): Promise<void> => {
  try {
    const { token, newPassword } = req.body;

    if (!token || !newPassword) {
      res.status(400).json({ message: "Token y nueva contraseña son obligatorios" });
      return;
    }

    const user = await prisma.usuario.findFirst({
      where: {
        resetToken: token,
        resetTokenExpiry: {
          gt: new Date()
        }
      }
    });

    if (!user) {
      res.status(400).json({ message: "Token inválido o expirado" });
      return;
    }

    const hashedPassword = await bcrypt.hash(newPassword, 12);

    await prisma.usuario.update({
      where: { id: user.id },
      data: {
        password: hashedPassword,
        resetToken: null,
        resetTokenExpiry: null
      }
    });

    res.json({
      message: "Contraseña actualizada exitosamente"
    });

  } catch (error) {
    console.error("Error en reset password:", error);
    res.status(500).json({ message: "Error interno del servidor" });
  }
};

export const verifyEmail = async (req: Request, res: Response): Promise<void> => {
  try {
    const { token } = req.body;

    if (!token) {
      res.status(400).json({ message: "Token de verificación requerido" });
      return;
    }

    const user = await prisma.usuario.findFirst({
      where: {
        emailVerificationToken: token,
        emailVerificationExpiry: {
          gt: new Date()
        }
      }
    });

    if (!user) {
      res.status(400).json({ message: "Token de verificación inválido o expirado" });
      return;
    }

    if (user.isEmailVerified) {
      res.status(200).json({ message: "Email ya verificado" });
      return;
    }

    await prisma.usuario.update({
      where: { id: user.id },
      data: {
        isEmailVerified: true,
        emailVerificationToken: null,
        emailVerificationExpiry: null
      }
    });

    res.status(200).json({
      message: "Email verificado exitosamente. Ya puedes iniciar sesión."
    });

  } catch (error) {
    console.error("Error en verificación de email:", error);
    res.status(500).json({ message: "Error interno del servidor" });
  }
};

export const resendVerificationEmail = async (req: Request, res: Response): Promise<void> => {
  try {
    const { email } = req.body;

    if (!email) {
      res.status(400).json({ message: "Email requerido" });
      return;
    }

    const user = await prisma.usuario.findUnique({
      where: { email }
    });

    if (!user) {
      res.status(404).json({ message: "Usuario no encontrado" });
      return;
    }

    if (user.isEmailVerified) {
      res.status(400).json({ message: "Email ya verificado" });
      return;
    }

    // Generar nuevo token de verificación
    const emailVerificationToken = crypto.randomBytes(32).toString('hex');
    const emailVerificationExpiry = new Date(Date.now() + 24 * 60 * 60 * 1000); // 24 horas

    await prisma.usuario.update({
      where: { email },
      data: {
        emailVerificationToken,
        emailVerificationExpiry
      }
    });

    // Enviar email de verificación
    const emailSent = await emailService.sendEmailVerification(email, emailVerificationToken);

    res.status(200).json({
      message: emailSent 
        ? "Email de verificación reenviado exitosamente" 
        : "Error al enviar email. Token generado para desarrollo.",
      ...((!emailSent && process.env.NODE_ENV !== 'production') && { 
        verificationToken: emailVerificationToken 
      })
    });

  } catch (error) {
    console.error("Error en reenvío de verificación:", error);
    res.status(500).json({ message: "Error interno del servidor" });
  }
};

export const getCurrentUser = async (req: Request, res: Response): Promise<void> => {
  try {
    if (!req.user) {
      res.status(401).json({ message: "No autorizado" });
      return;
    }

    const user = await prisma.usuario.findUnique({
      where: { id: req.user.userId },
      select: {
        id: true,
        nombre: true,
        email: true,
        telefono: true,
        tipo: true,
        isSuspended: true,
        motivoSuspension: true,
        createdAt: true
      }
    });

    if (!user) {
      res.status(404).json({ message: "Usuario no encontrado" });
      return;
    }

    res.json({ user });

  } catch (error) {
    console.error("Error obteniendo usuario actual:", error);
    res.status(500).json({ message: "Error interno del servidor" });
  }
};