const express = require('express');
const DB = require('../data/dbQueries');

const routes = express.Router();

// Express middleware
routes.use(express.json());

// API ENDPOITNS

// getRecipes
routes.get('/', async (req, res) => {
  try {
    const allRecipes = await DB.getRecipes();
    res.status(200).json(allRecipes);
  } catch (error) {
    res.status(500).json({ error });
  }
});

// addRecipe
routes.post('/', async (req, res) => {
  const { recipe_name, dish_id } = req.body;
  if (recipe_name && dish_id) {
    try {
      const addNewRecipe = await DB.addRecipe(req.body);
      res.status(200).json(addNewRecipe);
    } catch (error) {
      res.status(500).json({ error });
    }
  } else {
    res.status(400).json({ message: `Please provide recipe_name and dish_id. Recipe instructions are optional.`})
  }
});

// getRecipe(id)
routes.get('/:id', async (req, res) => {
  const recipeId = req.params.id;
  try {
    const getSingleRecipe = await DB.getRecipe(recipeId);

    res.status(200).json(getSingleRecipe);
  } catch (error) {
    res.status(500).json({ error });
  }

});

module.exports = routes;