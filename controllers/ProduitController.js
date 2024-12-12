const Produit = require('../models/produit');

const createProduit = async (req, res) => {
    try {
        const { titre, ref, description, prix, date_limite, statut, idclient, quantite, date_publication, photo } = req.body;
        const newProduit = await Produit.create({
            titre,
            ref,
            description,
            prix,
            date_limite,
            statut,
            idclient,
            quantite,
            date_publication,
            photo
        });
        res.status(201).json(newProduit);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

const getAllProduits = async (req, res) => {
    try {
        const produits = await Produit.findAll();
        res.status(200).json(produits);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

const getProduitById = async (req, res) => {
    try {
        const { id } = req.params;
        const produit = await Produit.findByPk(id);
        if (!produit) return res.status(404).json({ error: 'Produit not found' });
        res.status(200).json(produit);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

const updateProduit = async (req, res) => {
    try {
        const { id } = req.params;
        const { titre, ref, description, prix, date_limite, statut, idclient, quantite, date_publication, photo } = req.body;
        const produit = await Produit.findByPk(id);
        if (!produit) return res.status(404).json({ error: 'Produit not found' });

        produit.titre = titre;
        produit.ref = ref;
        produit.description = description;
        produit.prix = prix;
        produit.date_limite = date_limite;
        produit.statut = statut;
        produit.idclient = idclient;
        produit.quantite = quantite;
        produit.date_publication = date_publication;
        produit.photo = photo;

        await produit.save();

        res.status(200).json(produit);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

const deleteProduit = async (req, res) => {
    try {
        const { id } = req.params;
        const produit = await Produit.findByPk(id);
        if (!produit) return res.status(404).json({ error: 'Produit not found' });

        await produit.destroy();
        res.status(200).json({ message: 'Produit deleted successfully' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

const searchProduits = async (req, res) => {
    try {
        const { titre, minPrix, maxPrix, statut, idclient } = req.query;
        const whereClause = {};

        if (titre) whereClause.titre = { [Op.like]: `%${titre}%` };
        if (minPrix) whereClause.prix = { ...whereClause.prix, [Op.gte]: parseFloat(minPrix) };
        if (maxPrix) whereClause.prix = { ...whereClause.prix, [Op.lte]: parseFloat(maxPrix) };
        if (statut) whereClause.statut = statut;
        if (idclient) whereClause.idclient = idclient;

        const produits = await Produit.findAll({ where: whereClause });
        res.status(200).json(produits);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

module.exports = {    
    createProduit,
    getAllProduits,
    getProduitById,
    updateProduit,
    deleteProduit,
    searchProduits
};
