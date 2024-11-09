const { body, validationResult } = require("express-validator");
const userLoginValidation = [
  body("email")
    .notEmpty()
    .withMessage("Debes completar el campo email")
    .bail()
    .isEmail()
    .withMessage("Debes ingresar un email válido"),
  body("password").notEmpty().withMessage("Debes completar el campo password"),

  (req, res, next) => {
    const errors = validationResult(req);
  
    if (!errors.isEmpty()) {
      return res.render("register", {
        errors: errors.array(),
      });
    }
    next();
  },
];

module.exports = { userLoginValidation };
