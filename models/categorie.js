const { DataTypes } = require("sequelize");
const {sequelize} = require('../config/db')

    const Categorie = sequelize.define('Categorie',{
        id:{
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        nom:{
            type: DataTypes.STRING,
            allowNull: false, // champ obligatoire
        },
        description:{
            type: DataTypes.TEXT,
            allowNull: false, // champ obligatoire
        },
       
    },
    {
        timestamps:false
    }
)

module.exports = Categorie