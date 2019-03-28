const knex = require('knex');
const knexConfig = require('../knexfile');

const db = knex(knexConfig.development);

module.exports = {
  getDishes,
  addDish,
  getDish,
  getRecipes,
  addRecipe,
};

// `getDishes()`: should return a list of all dishes in the database.
function getDishes() {
  return db('dishes');
}

// `addDish(dish)`: should add the **dish** to the database and return the `id` of the new **dish**.
function addDish(dish) {
  return db('dishes').insert(dish);
}

// `getDish(id)`: should return the **dish** with the provided `id` and include a list of the related recipes.
function getDish(id) {
  return db.select('dishes.id', 'dishes.dish_name', 'recipes.recipe_name').from('dishes').where('id', id).join('recipes', 'dishes.id', '=', 'recipes.dish_id');
}

// `getRecipes()`: should return a list of all recipes in the database including the **dish** they belong to.
function getRecipes() {
  return db.select('recipes.recipe_id', 'recipes.recipe_name', 'recipes.instructions', 'dishes.dish_name').from('recipes').join('dishes', 'dishes.id', '=', 'recipes.dish_id');
}

// `addRecipe(recipe)`: should add a **recipe** to the database and return the `id` of the new **recipe**.
function addRecipe(recipe) {
  return db('recipes').insert(recipe);
}


