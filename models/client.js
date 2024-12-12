const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/db');

const Client = sequelize.define('Client', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    telephone: DataTypes.STRING,
    nom: DataTypes.STRING,
    prenom: DataTypes.STRING,
    adresse: DataTypes.STRING,
    photo: DataTypes.STRING
});

module.exports = Client;