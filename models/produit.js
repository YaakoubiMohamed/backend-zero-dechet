const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/db')

const Produit = sequelize.define('Produit', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    titre: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [3, 255]
        }
    },
    ref: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            notEmpty: true
        }
    },
    description: {
        type: DataTypes.TEXT,
        validate: {
            len: [0, 6000]
        }
    },
    prix: {
        type: DataTypes.FLOAT,
        allowNull: false,
        validate: {
            isFloat: true,
            min: 0.01
        }
    },
    date_limite: {
        type: DataTypes.DATE,
        validate: {
            isDate: true,
            isAfter: new Date().toISOString().split('T')[0]
        }
    },
    statut: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            isIn: [['disponible', 'non disponible']]
        }
    },
    quantite: {
        type: DataTypes.INTEGER,
        validate: {
            isInt: true,
            min: 0
        }
    },
    date_publication: {
        type: DataTypes.DATE,
        validate: {
            isDate: true,
            isBefore: new Date().toISOString().split('T')[0]
        }
    },
    photo: DataTypes.STRING
});

module.exports = Produit;