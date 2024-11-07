
const { body, validationResult } = require("express-validator");
const validateAddedProducts = [
  body("nombre").notEmpty().withMessage("Debes ingresar el nombre"),
  body("descripcion").notEmpty().withMessage("Debes ingresar la descripción"),
  body("precio")
    .notEmpty()
    .withMessage("Debes ingresar el precio")
    .isNumeric()
    .withMessage("Debes ingresar solo números"),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ ERRORES: errors.array() });
    }
    next();
  },
];

const validateUpdatedProducts = [
  body("nombre").notEmpty().withMessage("Debes ingresar el nombre"),
  body("descripcion").notEmpty().withMessage("Debes ingresar la descripción"),
  body("precio")
    .notEmpty()
    .withMessage("Debes ingresar el precio")
    .isNumeric()
    .withMessage("Debes ingresar solo números"),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ ERRORES: errors.array() });
    }
    next();
  },
];
module.exports = { validateAddedProducts, validateUpdatedProducts };