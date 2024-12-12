const express = require("express");
const router = express.Router();
const {
  createProduit,
  getAllProduits,
  getProduitById,
  updateProduit,
  deleteProduit,
  searchProduits,
} = require("../controllers/ProduitController");

// Produit Routes
router.post("/produits", createProduit);
router.get("/produits", getAllProduits);
router.get("/produits/:id", getProduitById);
router.put("/produits/:id", updateProduit);
router.delete("/produits/:id", deleteProduit);
router.get("/produits/search", searchProduits);
module.exports = router;
