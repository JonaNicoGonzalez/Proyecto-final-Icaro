const bcrypt = require("bcrypt");
const Usuario = require("../models/index").usuarios;
const { createUserAccountValidation } = require("../middlewares/userValidations");
const express = require("express");
const router = express.Router();


const createUserAccount = async (req, res) => {
  const { isAdmin, firstName, lastname, email, address, password, telephone } = req.body;

  try {
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    const usuario = await Usuario.create({
      isAdmin,
      firstName,
      lastname,
      email,
      address,
      password: hashedPassword,
      telephone,
    });

    res.status(201).json({
      message: "Usuario creado exitosamente",
      data: usuario,
    });
  } catch (error) {
    res.status(400).json({
      message: "Error al crear el usuario",
      error: error.message,
    });
  }
};

const readUsersAccount = async (req, res) => {
  try {
    const usuarios = await Usuario.findAll();
    res.status(200).json({ data: usuarios });
  } catch (error) {
    res.status(500).json({ message: "Error al obtener los usuarios", error: error.message });
  }
};

const readUserAccount = async (req, res) => {
  try {
    const usuario = await Usuario.findByPk(req.params.id, {
      attributes: { exclude: ['password', 'isAdmin'] } // Excluir el campo password
    });

    if (!usuario) {
      return res.status(404).json({ message: "Usuario no encontrado" });
    }

    res.status(200).json({ data: usuario });
  } catch (error) {
    res.status(500).json({ message: "Error al obtener el usuario", error: error.message });
  }
};


const deleteUserAccount = async (req, res) => {
  try {
    const usuario = await Usuario.findByPk(req.params.id);
    if (!usuario) {
      return res.status(404).json({ message: "Usuario no encontrado" });
    }
    await usuario.destroy();
    res.status(200).json({ message: "Usuario eliminado con éxito", data: usuario });
  } catch (error) {
    res.status(500).json({ message: "Error al eliminar el usuario", error: error.message });
  }
};

const updateUserAccount = async (req, res) => {
  const usuario = await Usuario.findByPk(req.params.id);
  const { password, ...newUsuario } = req.body; // Extraer la contraseña

  if (!usuario) {
    return res.status(404).json({ message: "Usuario no encontrado" });
  }

  const saltRounds = 10;

  try {
    // Solo hashear la nueva contraseña si se proporciona
    if (password) {
      const hashedPassword = await bcrypt.hash(password, saltRounds);
      newUsuario.password = hashedPassword;
    }

    // Actualizar el usuario
    await Usuario.update(newUsuario, { where: { id: req.params.id } });
    res.status(200).json({ message: "Usuario actualizado con éxito", data: { ...usuario.dataValues, ...newUsuario } });
  } catch (error) {
    res.status(500).json({ message: "Error al actualizar el usuario", error: error.message });
  }
};

// Exportar la función junto con las demás
module.exports = {
  createUserAccount,
  createUserAccountValidation,
  readUsersAccount,
  readUserAccount,
  deleteUserAccount,
  updateUserAccount,
};
