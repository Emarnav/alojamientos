import { Request, Response, NextFunction } from 'express';
import { body, validationResult } from 'express-validator';

// Input sanitization middleware
export const sanitizeHtml = (req: Request, res: Response, next: NextFunction) => {
  const sanitizeValue = (value: any): any => {
    if (typeof value === 'string') {
      return value
        .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '') // Remove script tags
        .replace(/<iframe\b[^<]*(?:(?!<\/iframe>)<[^<]*)*<\/iframe>/gi, '') // Remove iframe tags
        .replace(/javascript:/gi, '') // Remove javascript: protocol
        .replace(/on\w+="[^"]*"/gi, '') // Remove event handlers
        .trim();
    } else if (typeof value === 'object' && value !== null) {
      if (Array.isArray(value)) {
        return value.map(sanitizeValue);
      } else {
        const sanitized: any = {};
        Object.keys(value).forEach(key => {
          sanitized[key] = sanitizeValue(value[key]);
        });
        return sanitized;
      }
    }
    return value;
  };

  if (req.body) {
    req.body = sanitizeValue(req.body);
  }
  if (req.query) {
    req.query = sanitizeValue(req.query);
  }
  if (req.params) {
    req.params = sanitizeValue(req.params);
  }

  next();
};

// Validation rules for property creation
export const validatePropertyCreation = [
  body('nombre')
    .isLength({ min: 1, max: 200 })
    .withMessage('El nombre debe tener entre 1 y 200 caracteres')
    .trim()
    .escape(),
  body('descripcion')
    .isLength({ min: 1, max: 2000 })
    .withMessage('La descripción debe tener entre 1 y 2000 caracteres')
    .trim(),
  body('precio')
    .isFloat({ min: 0 })
    .withMessage('El precio debe ser un número mayor a 0'),
  body('direccion')
    .isLength({ min: 1, max: 300 })
    .withMessage('La dirección debe tener entre 1 y 300 caracteres')
    .trim()
    .escape(),
  body('latitud')
    .isFloat({ min: -90, max: 90 })
    .withMessage('La latitud debe estar entre -90 y 90'),
  body('longitud')
    .isFloat({ min: -180, max: 180 })
    .withMessage('La longitud debe estar entre -180 y 180'),
  body('numeroHabitaciones')
    .isInt({ min: 1, max: 20 })
    .withMessage('El número de habitaciones debe ser entre 1 y 20'),
  body('numeroBanos')
    .isInt({ min: 1, max: 10 })
    .withMessage('El número de baños debe ser entre 1 y 10'),
  body('metrosCuadrados')
    .isFloat({ min: 1 })
    .withMessage('Los metros cuadrados deben ser mayor a 1'),
];

// Validation rules for user registration
export const validateUserRegistration = [
  body('nombre')
    .isLength({ min: 2, max: 100 })
    .withMessage('El nombre debe tener entre 2 y 100 caracteres')
    .trim()
    .escape(),
  body('apellidos')
    .isLength({ min: 2, max: 100 })
    .withMessage('Los apellidos deben tener entre 2 y 100 caracteres')
    .trim()
    .escape(),
  body('email')
    .isEmail()
    .withMessage('Debe proporcionar un email válido')
    .normalizeEmail(),
  body('telefono')
    .optional()
    .isMobilePhone(['es-ES'])
    .withMessage('Debe proporcionar un teléfono válido'),
  body('password')
    .isLength({ min: 8 })
    .withMessage('La contraseña debe tener al menos 8 caracteres')
    .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/)
    .withMessage('La contraseña debe contener al menos una minúscula, una mayúscula y un número'),
];

// Validation rules for login
export const validateLogin = [
  body('email')
    .isEmail()
    .withMessage('Debe proporcionar un email válido')
    .normalizeEmail(),
  body('password')
    .notEmpty()
    .withMessage('La contraseña es requerida'),
];

// Error handler for validation
export const handleValidationErrors = (req: Request, res: Response, next: NextFunction) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      message: 'Errores de validación',
      errors: errors.array()
    });
  }
  next();
};