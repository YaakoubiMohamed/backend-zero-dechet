const { DataTypes } = require('sequelize');
const {sequelize} = require('../config/db')

const Produit = sequelize.define('Produit', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    titre: DataTypes.STRING,
    ref: DataTypes.STRING,
    description: DataTypes.TEXT,
    prix: DataTypes.FLOAT,
    date_limite: DataTypes.DATE,
    statut: DataTypes.STRING,
    idclient: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    quantite: DataTypes.INTEGER,
    date_publication: DataTypes.DATE,
    photo: DataTypes.STRING
});


module.exports = Produit;