const express = require("express");
const router = express.Router();
const {
  creerAdmin,
  afficherTousLesAdministrateurs,
  getAdminById,
  modifierAdmin,
  supprimerAdmin,
} = require("../controllers/AdminController");

// Admin Routes
router.post("/admins", creerAdmin);
router.get("/admins", afficherTousLesAdministrateurs);
router.get("/admins/:id", getAdminById);
router.put("/admins/:id", modifierAdmin);
router.delete("/admins/:id", supprimerAdmin);

module.exports = router;
