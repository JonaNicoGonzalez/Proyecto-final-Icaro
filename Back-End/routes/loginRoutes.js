const express = require("express");
const {
  userLogin,
} = require("../controllers/loginControllers");
const {
    userLoginValidation,
} = require("../middlewares/loginValidations");
const router = express();
router.post("/", userLoginValidation, userLogin);
module.exports = router;
