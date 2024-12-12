const Commande = require('../models/commande');

const creerCommande = async (req, res) => {
    try {
        const { idclient, produits, total, statut } = req.body;
        const nouvelleCommande = await Commande.create({ idclient, produits, total, statut });
        res.status(201).json(nouvelleCommande);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

const gererCommande = async (req, res) => {
    try {
        const { id } = req.params;
        const { statut } = req.body;
        const commande = await Commande.findByPk(id);
        if (!commande) return res.status(404).json({ error: 'Commande non trouvée' });

        commande.statut = statut;
        await commande.save();

        res.status(200).json(commande);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

module.exports = {
    gererCommande,
    creerCommande
}