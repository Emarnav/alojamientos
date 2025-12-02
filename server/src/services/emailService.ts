import nodemailer from 'nodemailer';

interface EmailConfig {
  host: string;
  port: number;
  secure: boolean;
  requireTLS?: boolean;
  auth: {
    user: string;
    pass: string;
  };
  tls?: {
    ciphers: string;
    rejectUnauthorized: boolean;
  };
}

class EmailService {
  private transporter: nodemailer.Transporter;

  constructor() {
    // Verificar si las variables de entorno están configuradas
    const emailUser = process.env.EMAIL_USER;
    const emailPassword = process.env.EMAIL_PASSWORD;
    
    if (!emailUser || !emailPassword) {
      console.warn('Advertencia: EMAIL_USER y/o EMAIL_PASSWORD no configurados. Los emails no se enviarán.');
      // Crear un transporter ficticio para evitar errores
      this.transporter = nodemailer.createTransport({
        host: 'localhost',
        port: 587,
        secure: false,
        auth: {
          user: 'test',
          pass: 'test'
        }
      });
      return;
    }

    // Configuración para Office 365/Outlook
    const config: EmailConfig = {
      host: process.env.EMAIL_HOST || 'smtp.office365.com',
      port: parseInt(process.env.EMAIL_PORT || '587'),
      secure: false, // false para puerto 587 (STARTTLS)
      requireTLS: true, // Forzar TLS
      auth: {
        user: emailUser,
        pass: emailPassword
      },
      tls: {
        ciphers: 'SSLv3',
        rejectUnauthorized: false
      }
    };

    this.transporter = nodemailer.createTransport(config);
  }

  async sendEmailVerification(to: string, verificationToken: string): Promise<boolean> {
    try {
      // Verificar si las credenciales están configuradas
      if (!process.env.EMAIL_USER || !process.env.EMAIL_PASSWORD) {
        console.log('Credenciales de email no configuradas. Simulando envío de verificación...');
        console.log(`Token de verificación para ${to}: ${verificationToken}`);
        return false; // Retornar false para que el controller maneje el fallback
      }

      const verificationUrl = `${process.env.CLIENT_URL || 'http://localhost:3000'}/verificar-email?token=${verificationToken}`;
      
      const mailOptions = {
        from: `"UCH CEU Alojamientos" <${process.env.EMAIL_USER}>`,
        to: to,
        subject: 'Confirma tu cuenta - UCH CEU Alojamientos',
        html: `
          <!DOCTYPE html>
          <html>
          <head>
              <meta charset="utf-8">
              <style>
                  body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
                  .container { max-width: 600px; margin: 0 auto; padding: 20px; }
                  .header { background-color: #1e40af; color: white; padding: 20px; text-align: center; }
                  .content { padding: 20px; background-color: #f9f9f9; }
                  .button { display: inline-block; padding: 12px 24px; background-color: #10b981; color: white; text-decoration: none; border-radius: 5px; margin: 20px 0; }
                  .footer { text-align: center; font-size: 12px; color: #666; padding: 20px; }
              </style>
          </head>
          <body>
              <div class="container">
                  <div class="header">
                      <h1>¡Bienvenido a UCH CEU Alojamientos!</h1>
                  </div>
                  <div class="content">
                      <h2>¡Confirma tu cuenta para empezar!</h2>
                      <p>Gracias por registrarte en nuestra plataforma de alojamientos estudiantiles.</p>
                      <p>Para completar tu registro y poder acceder a todas las funcionalidades, necesitamos que confirmes tu dirección de email.</p>
                      <p style="text-align: center;">
                          <a href="${verificationUrl}" class="button">Confirmar mi cuenta</a>
                      </p>
                      <p><strong>Este enlace expirará en 24 horas.</strong></p>
                      <p>Si no te has registrado en UCH CEU Alojamientos, puedes ignorar este email.</p>
                  </div>
                  <div class="footer">
                      <p>© 2025 UCH CEU - Universidad Cardenal Herrera</p>
                      <p>Este es un email automático, por favor no respondas a este mensaje.</p>
                  </div>
              </div>
          </body>
          </html>
        `
      };

      const info = await this.transporter.sendMail(mailOptions);
      console.log('Email de verificación enviado:', info.messageId);
      return true;
    } catch (error) {
      console.error('Error enviando email de verificación:', error);
      return false;
    }
  }

  async sendPasswordResetEmail(to: string, resetToken: string): Promise<boolean> {
    try {
      // Verificar si las credenciales están configuradas
      if (!process.env.EMAIL_USER || !process.env.EMAIL_PASSWORD) {
        console.log('Credenciales de email no configuradas. Simulando envío...');
        console.log(`Token de recuperación para ${to}: ${resetToken}`);
        return false; // Retornar false para que el controller maneje el fallback
      }

      const resetUrl = `${process.env.CLIENT_URL || 'http://localhost:3000'}/recuperar-contrasena?token=${resetToken}`;
      
      const mailOptions = {
        from: `"UCH CEU Alojamientos" <${process.env.EMAIL_USER}>`,
        to: to,
        subject: 'Recuperación de contraseña - UCH CEU Alojamientos',
        html: `
          <!DOCTYPE html>
          <html>
          <head>
              <meta charset="utf-8">
              <style>
                  body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
                  .container { max-width: 600px; margin: 0 auto; padding: 20px; }
                  .header { background-color: #1e40af; color: white; padding: 20px; text-align: center; }
                  .content { padding: 20px; background-color: #f9f9f9; }
                  .button { display: inline-block; padding: 12px 24px; background-color: #1e40af; color: white; text-decoration: none; border-radius: 5px; margin: 20px 0; }
                  .footer { text-align: center; font-size: 12px; color: #666; padding: 20px; }
              </style>
          </head>
          <body>
              <div class="container">
                  <div class="header">
                      <h1>Recuperación de contraseña</h1>
                  </div>
                  <div class="content">
                      <h2>¡Hola!</h2>
                      <p>Has solicitado restablecer tu contraseña para tu cuenta en UCH CEU Alojamientos.</p>
                      <p>Haz clic en el siguiente enlace para crear una nueva contraseña:</p>
                      <p style="text-align: center;">
                          <a href="${resetUrl}" class="button">Restablecer contraseña</a>
                      </p>
                      <p><strong>Este enlace expirará en 1 hora.</strong></p>
                      <p>Si no has solicitado el restablecimiento de contraseña, puedes ignorar este email.</p>
                  </div>
                  <div class="footer">
                      <p>© 2025 UCH CEU - Universidad Cardenal Herrera</p>
                      <p>Este es un email automático, por favor no respondas a este mensaje.</p>
                  </div>
              </div>
          </body>
          </html>
        `
      };

      const info = await this.transporter.sendMail(mailOptions);
      console.log('Email enviado:', info.messageId);
      return true;
    } catch (error) {
      console.error('Error enviando email:', error);
      return false;
    }
  }

  async verifyConnection(): Promise<boolean> {
    try {
      await this.transporter.verify();
      console.log('Conexión de email verificada correctamente');
      return true;
    } catch (error) {
      console.error('Error verificando conexión de email:', error);
      return false;
    }
  }
}

export default EmailService;