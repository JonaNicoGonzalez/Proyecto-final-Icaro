const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const sequelize = require("./config/database");
const app = express();

const PORT = 3000;

// Middleware
app.use(express.json()); // Para poder leer los datos en formato JSON
app.use(morgan("dev"));
app.use(cors());

// Rutas principales
app.use("/api/productos", require("./routes/productRoutes.js"));
app.use("/api/usuarios", require("./routes/userRoutes.js"));
app.use("/api/orders", require("./routes/orderRoutes.js"));
app.use("/api/orderDetails", require("./routes/orderDetailsRoutes.js"));
app.use("/api/login", require("./routes/loginRoutes.js"));

// Conexión a la base de datos con async/await
async function connectToDatabase() {
  try {
    await sequelize.authenticate();
    console.log('Conexión a la base de datos establecida con éxito.');
  } catch (err) {
    console.error('No se pudo conectar a la base de datos:', err);
  }
}

// Llamar a la función para conectar a la base de datos
connectToDatabase();

// Ejecutar el archivo SQL al iniciar la aplicación
require('./initializeDatabase');

// Ejemplo de función asincrónica con async/await
function delay(ms) {
  return new Promise((resolve) =>
    setTimeout(() => {
      console.log("Operación asincrónica completada.");
      resolve();
    }, ms)
  );
}

app.use("/test", async (req, res) => {
  try {
    const result = await delay(5000);
    res.send({ msg: "Mensaje post promise", result });
  } catch (error) {
    console.log(error);
    res.status(500).send("Ocurrió un error");
  }
});

// Manejo de errores global
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ message: "Error interno del servidor" });
});

// Configuración del servidor
app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});
