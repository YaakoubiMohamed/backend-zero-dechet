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
        unique: true,
        validate: {
            isEmail: true,
            notEmpty: true
        }
    },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true,
                len: [6, 255]            
            }
    },
    telephone: {
        type: DataTypes.STRING,
        validate: {
            is: /^0[1-9][0-9]{8}$/        
        }
    },
    nom: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
            len: [3, 100]            
        },
    },
    prenom: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
            len: [3, 100]            
        },
    },
    adresse: {
        type: DataTypes.STRING,
        validate: {
            len: [0, 255]            
        },
    },
    photo: {
        type: DataTypes.STRING,
        validate: {
            len: [0, 255]            
        },
    }
});

module.exports = Client;