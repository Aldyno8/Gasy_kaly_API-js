const express = require('express');
const recipeController = require('../controller/recipe-controller');
const rooter = express.Router()

rooter.post("/", recipeController.createRecipes);
rooter.post("/modify/:id", recipeController.modifyOneRecipes);
rooter.post("/delete/:id", recipeController.deleteOneRecipe);
rooter.get("/details/:id", recipeController.getRecipesDetails);
rooter.get("/list/", recipeController.listRecipes);


module.exports = rooter;