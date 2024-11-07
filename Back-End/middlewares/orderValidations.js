const { body, validationResult } = require("express-validator");
const validateAddedOrders = [
  body("total_price")
    .notEmpty()
    .withMessage("Debes ingresar el precio")
    .isNumeric()
    .withMessage("Debes ingresar solo números"),
  body("shipping_type")
    .notEmpty()
    .withMessage("Debes especificar el tipo de envío"),
  body("shipping_address")
    .notEmpty()
    .withMessage("Debes ingresar la dirección de envío"),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ ERRORES: errors.array() });
    }
    next();
  },
];
const validateUpdatedOrders = [
  body("total_price")
    .notEmpty()
    .withMessage("Debes ingresar el precio")
    .isNumeric()
    .withMessage("Debes ingresar solo números"),
  body("shipping_type")
    .notEmpty()
    .withMessage("Debes especificar el tipo de envío"),
  body("shipping_address")
    .notEmpty()
    .withMessage("Debes ingresar la dirección de envío"),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ ERRORES: errors.array() });
    }
    next();
  },
];
module.exports = { validateAddedOrders, validateUpdatedOrders };
