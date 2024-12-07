const Categorie = require("../models/categorie");

const AjouterCategorie = (req, res) => {
  // req : request: data envoyer par le client(l'admin)
  // res :  response : retourner reponse de la requette envoyer par le client
  try {
    const categorie = Categorie.create(req.body);
    res.status(201).json({ message: "Catégorie créé" });
  } catch (error) {
    // console.error(error);
    res.status(500).json({ error: error.message });
  }
};

const AfficherCategories = (req, res) => {
  try {
    const catgeories = Categorie.findAll();
    res.status(200).json(catgeories);
  } catch (error) {
    // console.error(error);
    res.status(500).json({ error: error.message });
  }
};
const ModifierCategorie = (req, res) => {
    try {
      const categorie = Categorie.findByPk(req.params.id);
      if (!categorie) {
        return res.status(404).json({ message: "Categorie non trouve" });
      }
  
      categorie.update(req.body);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };
  
const SupprimerCategorie = (req, res) => {
  try {
    const categorie = Categorie.findByPk(req.params.id);
    if (!categorie) {
      return res.status(404).json({ message: "Categorie non trouve" });
    }

    categorie.destroy();
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
