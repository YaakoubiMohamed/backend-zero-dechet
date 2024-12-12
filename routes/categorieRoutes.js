const express = require('express');
const router = express.Router();
const CategorieController = require('../controllers/CategorieController');

// Define routes
router.post('/categories', CategorieController.createCategorie);
router.get('/categories', CategorieController.getAllcategories);
router.get('/categories/:id', CategorieController.getcategorieById);
router.put('/categories/:id', CategorieController.updateCategorie);
router.delete('/categories/:id', CategorieController.deleteCategorie);

module.exports = router;
