const fs = require('fs');
const path = require('path');
const sequelize = require('./config/database'); // Importa la instancia de Sequelize

// Ruta del archivo SQL
const sqlFilePath = path.join(__dirname, 'db', 'Ecommerce.sql');

// Función para inicializar la base de datos
async function initializeDatabase() {
    try {
        const sql = await fs.promises.readFile(sqlFilePath, 'utf8');
        
        // Divide las consultas por punto y coma y filtra las vacías
        const queries = sql.split(';').map(query => query.trim()).filter(query => query);

        // Ejecuta cada consulta
        for (const query of queries) {
            await sequelize.query(query);
        }

        console.log('Base de datos inicializada correctamente.');
    } catch (error) {
        console.error('Error al inicializar la base de datos:', error);
    }
}

// Llama a la función para inicializar la base de datos
initializeDatabase();
