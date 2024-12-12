
const Client = require('../models/client');


const creerClient = async (req, res) => {
    try {
        const { email, password, telephone, nom, prenom, adresse, photo } = req.body;
        const newClient = await Client.create({ email, password, telephone, nom, prenom, adresse, photo });
        res.status(201).json(newClient);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

const AfficherTousLesClients = async (req, res) => {
    try {
        const clients = await Client.findAll();
        res.status(200).json(clients);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

const getClientById = async (req, res) => {
    try {
        const { id } = req.params;
        const client = await Client.findByPk(id);
        if (!client) return res.status(404).json({ error: 'Client not found' });
        res.status(200).json(client);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

const ModifierClient = async (req, res) => {
    try {
        const { id } = req.params;
        const { email, password, telephone, nom, prenom, adresse, photo } = req.body;
        const client = await Client.findByPk(id);
        if (!client) return res.status(404).json({ error: 'Client not found' });

        client.email = email;
        client.password = password;
        client.telephone = telephone;
        client.nom = nom;
        client.prenom = prenom;
        client.adresse = adresse;
        client.photo = photo;
        await client.save();

        res.status(200).json(client);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

const supprimerClient = async (req, res) => {
    try {
        const { id } = req.params;
        const client = await Client.findByPk(id);
        if (!client) return res.status(404).json({ error: 'Client not found' });

        await client.destroy();
        res.status(200).json({ message: 'Client deleted successfully' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};


module.exports = {
    
    creerClient,
    AfficherTousLesClients,
    getClientById,
    ModifierClient,
    supprimerClient,
};
