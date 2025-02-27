const express = require('express');
const recipeController = require('../controller/recipe-controller');
const rooter = express.Router()

rooter.post("/", recipeController.createRecipes);
rooter.get("/list/", recipeController.listRecipes);

module.exports = rooter;