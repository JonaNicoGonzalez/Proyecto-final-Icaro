const bcrypt = require("bcrypt");
const Usuario = require("../models/index").usuarios;

const userLogin = async (req, res) => {
  const { email, password } = req.body;
  const usuario = await Usuario.findOne({ where: { email } });

  if (!usuario) {
    return res.status(400).json({ message: "Usuario no encontrado" });
  }

  bcrypt.compare(password, usuario.password, (error, result) => {
    if (error) {
      return res.status(400).json({ message: "Error al comparar la contraseña" });
    }
    if (!result) {
      return res.status(400).json({ message: "Credenciales inválidas" });
    }
    delete usuario.password;
    res.status(200).json({
      message: "Inicio de sesión exitoso",

      data: { 
        nombre: usuario.firstName, 
        apellido: usuario.lastname, 
        correo: usuario.email, 
        calle: usuario.address, 
        telefono: usuario.telephone 
      }
      
    });
  });
};

module.exports = { userLogin };
