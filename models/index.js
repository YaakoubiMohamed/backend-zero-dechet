// Import Sequelize instance and all models
const { sequelize } = require('../config/db');
const Admin = require('./admin');
const Client = require('./client');
const Produit = require('./produit');
const Categorie = require('./categorie');
const Message = require('./message');
const Commande = require('./commande');

// Define relationships
// Produit and Categorie
Produit.belongsTo(Categorie, { foreignKey: 'categorieId', as: 'categorie' });
Categorie.hasMany(Produit, { foreignKey: 'categorieId', as: 'produits' });

// Produit and Client
Produit.belongsTo(Client, { foreignKey: 'idclient', as: 'client' });
Client.hasMany(Produit, { foreignKey: 'idclient', as: 'produits' });

// Message relationships
Message.belongsTo(Client, { foreignKey: 'expediteur', as: 'sender' });
Message.belongsTo(Client, { foreignKey: 'destinataire', as: 'receiver' });
Client.hasMany(Message, { foreignKey: 'expediteur', as: 'sentMessages' });
Client.hasMany(Message, { foreignKey: 'destinataire', as: 'receivedMessages' });

// Commande relationships
Commande.belongsTo(Produit, { foreignKey: 'produit', as: 'product' });
Commande.belongsTo(Client, { foreignKey: 'client', as: 'clientDetails' });
Produit.hasMany(Commande, { foreignKey: 'produit', as: 'commandes' });
Client.hasMany(Commande, { foreignKey: 'client', as: 'orders' });

// Sync database (optional: remove or adjust force setting in production)
sequelize.sync({ force: false })
    .then(() => console.log('Database synchronized'))
    .catch((error) => console.error('Error synchronizing database:', error));

// Export models and sequelize instance
module.exports = {
    sequelize,
    Admin,
    Client,
    Produit,
    Categorie,
    Message,
    Commande
};
