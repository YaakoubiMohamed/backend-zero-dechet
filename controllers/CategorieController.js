const Categorie = require('../models/categorie');

const createCategorie = async (req, res) => {
    try {
        const { nom, description } = req.body;
        console.log(req.body);
        const newCategory = await Categorie.create({ nom, description });
        res.status(201).json(newCategory);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

const getAllcategories = async (req, res) => {
    try {
        const categories = await Categorie.findAll();
        res.status(200).json(categories);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

const getcategorieById = async (req, res) =>{
  try{
        const { id } = req.params;
        const category = await Categorie.findByPk(id);
        res.status(200).json(category);
  } catch(err) {
    res.status(500).json({ error: err.message });
}
}

const updateCategorie = async (req, res) => {
    try {
        const { id } = req.params;
        const { nom, description } = req.body;
        const category = await Categorie.findByPk(id);

        if (!category) {
            return res.status(404).json({ error: 'Category not found' });
        }

        category.nom = nom;
        category.description = description;
        await category.save();

        res.status(200).json(category);
    } catch (error) {
        res.status(500).json({ error: 'Failed to update category' });
    }
};

const deleteCategorie = async (req, res) => {
    try {
        const { id } = req.params;
        const category = await Categorie.findByPk(id);      

        await category.destroy();

        if (!category) {
            return res.status(404).json({ error: 'Category not found' });
        }


        res.status(200).json({ message: 'Category deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Failed to delete category' });
    }
};

module.exports = {
    createCategorie,
    getAllcategories,
    updateCategorie,
    deleteCategorie,
    getcategorieById
};
