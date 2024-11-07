// "use strict";
// /** @type {import('sequelize-cli').Migration} */
// module.exports = {
//   async up(queryInterface, Sequelize) {
//     await queryInterface.createTable("productos", {
//       id: {
//         allowNull: false,
//         autoIncrement: true,
//         primaryKey: true,
//         type: Sequelize.INTEGER,
//       },
//       nombre: {
//         type: Sequelize.STRING,
//       },
//       descripcion: {
//         type: Sequelize.STRING,
//       },
//       precio: {
//         type: Sequelize.DECIMAL,
//       },
//       categoria: {
//         type: Sequelize.STRING,
//       },
//       url: {
//         type: Sequelize.STRING,
//       },
//     });
//   },
//   async down(queryInterface, Sequelize) {
//     await queryInterface.dropTable("productos");
//   },
// };
