const Recipe = require("../models/recipes");

exports.listRecipes = (req, res, next) => {
  Recipe.find()
    .then((recipe) => res.status(200).json({ recipe: recipe }))
    .catch((error) => res.status(404).json(error));
};

exports.getRecipesDetails = (req, res, next) => {
  Recipe.findOne({ _id: req.params.id })
    .then((recipe) => res.status(200).json(recipe))
    .catch((error) => res.status(400).json({ error }));
};

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

exports.modifyOneRecipes = (req, res, next) => {
  delete req.body._id;
  Recipe.findOne({ id: req.params.id }).then((recipe) => {
    recipe
      .updateOne(...recipe)
      .then(() => res.status(200).json({ message: "recipe created!" }))
      .catch((error) => res.status(400).json({ error }));
  });
};

exports.deleteOneRecipe = (res, req, next) => {
  Recipe.findOne({ _id: req.params.id }).then((recipe) => {
    recipe
      .deleteOne({ id: req.params.id })
      .then(() => res.status(200).json({ message: "recipes deleted !" }))
      .catch((error) => res.status(400).json(error));
  });
};
