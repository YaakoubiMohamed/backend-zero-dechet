const { DataTypes } = require("sequelize");

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
            type: DataTypes.STRING,
            allowNull: false, // champ obligatoire
        },
       
    })

module.exports = Categorie