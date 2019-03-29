const express = require('express');
const DB = require('../data/dbQueries');

const routes = express.Router();

// Express middleware
routes.use(express.json());

// API ENDPOITNS

// getDishes
routes.get('/', async (req, res) => {
  try {
    const allDishes = await DB.getDishes();
    res.status(200).json(allDishes);
  } catch (error) {
    res.status(500).json({ error });
  }
});

// addDish(dish)
routes.post('/', async (req, res) => {
  const newDish = req.body.dish_name;
  if (newDish) {
    try {
      const addNewDish = await DB.addDish({ dish_name: newDish });
      res.status(200).json(addNewDish);
    } catch (error) {
      res.status(500).json({ error });
    }
  } else {
    res.status(400).json({ message: `Please provide dish_name.`})
  }
});

// getDish(id)
routes.get('/:id', async (req, res) => {
  const dishId = req.params.id;
  try {
    const singleDish = await DB.getDish(dishId);

    if (singleDish) {
      res.status(200).json(singleDish);
    } else {
      res.status(404).json({ message: `Dish with ID ${dishId} does not exist.`});
    }

  } catch (error) {
    res.status(500).json({ error });
  }
});



module.exports = routes;
