const express = require('express');
const bodyParser = require('body-parser');
const { connectDb } = require('./config/db');
const categorieRoutes = require('./routes/categorieRoutes');
const adminRoutes = require('./routes/adminRoutes');
const clientRoutes = require('./routes/clientRoutes');
const produitRoutes = require('./routes/produitRoutes');
const messageRoutes = require('./routes/messageRoutes');
const commandeRoutes = require('./routes/commandeRoutes');
const cors = require('cors');
const { syncModels } = require('./models');
const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());
app.use(bodyParser.json());

const initializeApp = async () => {
    try {
        await connectDb(); // Ensure the database is created and connected
        console.log('Application initialized successfully!');
    } catch (error) {
        console.error('Error initializing the application:', error);
        process.exit(1);
    }
};

initializeApp();

// Use routes
app.use('/api', categorieRoutes);
app.use('/api', adminRoutes);
app.use('/api', clientRoutes);
app.use('/api', produitRoutes);
app.use('/api', messageRoutes);
app.use('/api', commandeRoutes);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, async () => {
    await connectDb(); // Ensure DB connection before starting server
    console.log(`Server is running on port ${PORT}`);
});