const { body, validationResult } = require("express-validator");

const validateAddedOrderDetails = [
  body("order_id")
    .notEmpty()
    .withMessage("Debes ingresar el ID de la orden")
    .isInt()
    .withMessage("El ID de la orden debe ser un número entero"),
  body("product_id")
    .notEmpty()
    .withMessage("Debes ingresar el ID del producto")
    .isInt()
    .withMessage("El ID del producto debe ser un número entero"),
  body("quantity")
    .notEmpty()
    .withMessage("Debes ingresar la cantidad")
    .isInt({ min: 1 })
    .withMessage("La cantidad debe ser un número entero positivo"),
  body("price")
    .notEmpty()
    .withMessage("Debes ingresar el precio")
    .isDecimal()
    .withMessage("El precio debe ser un número decimal"),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ ERRORES: errors.array() });
    }
    next();
  },
];

const validateUpdatedOrderDetails = [
  body("order_id")
    .optional()
    .isInt()
    .withMessage("El ID de la orden debe ser un número entero"),
  body("product_id")
    .optional()
    .isInt()
    .withMessage("El ID del producto debe ser un número entero"),
  body("quantity")
    .optional()
    .isInt({ min: 1 })
    .withMessage("La cantidad debe ser un número entero positivo"),
  body("price")
    .optional()
    .isDecimal()
    .withMessage("El precio debe ser un número decimal"),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ ERRORES: errors.array() });
    }
    next();
  },
];

module.exports = { validateAddedOrderDetails, validateUpdatedOrderDetails };
