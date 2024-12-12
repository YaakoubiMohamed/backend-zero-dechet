const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/db');

const Message = sequelize.define('Message', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    contenu: DataTypes.TEXT,
    date: DataTypes.DATE,
    expediteur: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    destinataire: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
});


module.exports = Message;