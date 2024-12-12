const { Sequelize } = require('sequelize');
const mysql = require('mysql2/promise');

// Database credentials
const dbName = 'zero_dechet';
const dbUser = 'root';
const dbPassword = '';
const dbHost = 'localhost';

// Function to create the database if it doesn't exist
const createDatabaseIfNotExist = async () => {
    try {
        const connection = await mysql.createConnection({
            host: dbHost,
            user: dbUser,
            password: dbPassword,
        });

        await connection.query(`CREATE DATABASE IF NOT EXISTS \`${dbName}\`;`);
        console.log(`Database "${dbName}" ensured to exist.`);
        await connection.end();
    } catch (error) {
        console.error('Error creating database:', error);
        process.exit(1);
    }
};

// Set up Sequelize instance
const sequelize = new Sequelize(dbName, dbUser, dbPassword, {
    host: dbHost,
    dialect: 'mysql',
    logging: false, // Set to true if you want to see SQL queries
});

const connectDb = async () => {
    try {
        await createDatabaseIfNotExist();
        await sequelize.authenticate();
        console.log('Database connected successfully!');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
        process.exit(1);
    }
};

module.exports = { sequelize, connectDb };
