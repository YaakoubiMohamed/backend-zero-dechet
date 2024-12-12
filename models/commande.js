const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/db');

const Commande = sequelize.define('Commande', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    produit: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    quantite: DataTypes.INTEGER,
    date: DataTypes.DATE,
    prix: DataTypes.FLOAT,
    client: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    etat: DataTypes.STRING
});

module.exports = Commande;