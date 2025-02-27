const Recipe = require("../models/recipes");

exports.createRecipes = (req, res, next) => {
  delete req.body._id;
  const recipe = new Recipe({ ...req.body });
  recipe
    .save()
    .then(() => {
      res.status(201).json({ message: "recipes saved !" });
    })
    .catch((error) => {
      res.status(400).json(error);
    });
};

exports.listRecipes = (req, res, next) => {
  Recipe.find()
    .then((recipe) => res.status(200).json({ recipe: recipe }))
    .catch((error) => res.status(404).json(error));
};
