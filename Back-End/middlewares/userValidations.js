const { body, validationResult } = require("express-validator");

const createUserAccountValidation = [
  // Validar los campos requeridos y sus formatos
  body("isAdmin").isBoolean().withMessage("El campo 'isAdmin' debe ser un valor booleano"),
  body("firstName").notEmpty().withMessage("Debes ingresar el Nombre"),
  body("lastname").notEmpty().withMessage("Debes ingresar el Apellido"),
  body("email")
    .isEmail()
    .withMessage("El correo electrónico no es válido")
    .normalizeEmail(),  // Asegurarse de que el correo esté en un formato normalizado
  body("address").notEmpty().withMessage("Debes ingresar la Dirección"),
  body("password")
    .isLength({ min: 8 })
    .withMessage("La contraseña debe tener al menos 8 caracteres"),
  body("telephone").notEmpty().withMessage("Debes ingresar el Teléfono"),

  // Middleware para verificar si hay errores
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ ERRORES: errors.array() });
    }
    next();
  },
];

module.exports = {
  createUserAccountValidation,
};
