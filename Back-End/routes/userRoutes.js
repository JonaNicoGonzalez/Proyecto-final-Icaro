
const express = require("express");
const {
  createUserAccount,
  readUsersAccount,
  readUserAccount,
  deleteUserAccount,
  updateUserAccount,
} = require("../controllers/userControllers"); // Importa correctamente el controlador
const { createUserAccountValidation, validateUpdatedUserAccount } = require("../middlewares/userValidations");

const router = express.Router();

router.post("/", createUserAccountValidation, createUserAccount); // Usa el controlador de crear usuario
router.get("/", readUsersAccount);
router.get("/:id", readUserAccount);
router.put("/:id",createUserAccountValidation, updateUserAccount);
router.delete("/:id", deleteUserAccount);

module.exports = router;
