const Admin = require('../models/admin');


const creerAdmin = async (req, res) => {
    try {
        const { email, password, nom, prenom } = req.body;
        const newAdmin = await Admin.create({ email, password, nom, prenom });
        res.status(201).json(newAdmin);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

const afficherTousLesAdministrateurs = async (req, res) => {
    try {
        const admins = await Admin.findAll();
        res.status(200).json(admins);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

const getAdminById = async (req, res) => {
    try {
        const { id } = req.params;
        const admin = await Admin.findByPk(id);
        if (!admin) return res.status(404).json({ error: 'Admin not found' });
        res.status(200).json(admin);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

const modifierAdmin = async (req, res) => {
    try {
        const { id } = req.params;
        const { email, password, nom, prenom } = req.body;
        const admin = await Admin.findByPk(id);
        if (!admin) return res.status(404).json({ error: 'Admin not found' });

        admin.email = email;
        admin.password = password;
        admin.nom = nom;
        admin.prenom = prenom;
        await admin.save();

        res.status(200).json(admin);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

const supprimerAdmin = async (req, res) => {
    try {
        const { id } = req.params;
        const admin = await Admin.findByPk(id);
        if (!admin) return res.status(404).json({ error: 'Admin not found' });

        await admin.destroy();
        res.status(200).json({ message: 'Admin deleted successfully' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};


module.exports = {
    creerAdmin,
    afficherTousLesAdministrateurs,
    getAdminById,
    modifierAdmin,
    supprimerAdmin,
};
