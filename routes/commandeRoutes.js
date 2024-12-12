const express = require("express");
const router = express.Router();
const { creerCommande, gererCommande } = require("../controllers/CommandeController");

// Commande Routes
router.post("/commandes", creerCommande);
router.put("/commandes/:id", gererCommande);

module.exports = router;
