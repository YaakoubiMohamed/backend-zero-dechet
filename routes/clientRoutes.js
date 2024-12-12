const express = require("express");
const router = express.Router();
const {
  creerClient,
  AfficherTousLesClients,
  getClientById,
  ModifierClient,
  supprimerClient,
} = require("../controllers/ClientController");

router.post("/clients", creerClient);
router.get("/clients", AfficherTousLesClients);
router.get("/clients/:id", getClientById);
router.put("/clients/:id", ModifierClient);
router.delete("/clients/:id", supprimerClient);

module.exports = router;
