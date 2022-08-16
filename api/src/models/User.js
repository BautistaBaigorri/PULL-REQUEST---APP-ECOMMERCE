const { DataTypes } = require('sequelize');


module.exports = (sequelize) => {
  
  sequelize.define('User', {
    email:{
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true,
        validate: {
            isEmail: {
            msg: "Debe ser un email válido",}
        }
    },
    admin:{
        type:DataTypes.BOOLEAN,
        defaultValue: true,
    }   
    },{
        timestamps:false
    });
};