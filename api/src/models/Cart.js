const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Cart', {
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  }); 
};
