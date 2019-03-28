const knex = require('knex');
const knexConfig = require('../knexfile');

const db = knex(knexConfig.development);

module.exports = {
  getDishes,
  addDish,
  getDish,
  getRecipes,
  addRecipe,
  getRecipe
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

// `getRecipe(id)`
function getRecipe(id) {
  let idNum = Number(id)
  return (
    db
      .select('d.dish_name', 'r.recipe_name', 'i.ingredients_name', 'rd.ingredient_quantity', 'i.price')
      .from('recipes_details as rd')
      .innerJoin('recipes as r', 'r.recipe_id', '=', idNum)
      .innerJoin('ingredients as i ', 'rd.ingredients_id', '=', 'i.ingredients_id')
      .innerJoin('dishes as d ', 'd.id', '=', 'r.dish_id')
      .where('rd.recipe_id', idNum)
  );
}

/*

SELECT d.dish_name, r.recipe_name, i.ingredients_name, rd.ingredient_quantity, i.price
FROM recipes_details AS rd
INNER JOIN recipes AS r ON r.recipe_id = 3
INNER JOIN ingredients AS i ON rd.ingredients_id = i.ingredients_id
INNER JOIN dishes AS d ON d.id = r.dish_id
WHERE rd.recipe_id = 3

*/