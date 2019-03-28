
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipes_details').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipes_details').insert([
        {recipes_details_id: 1, recipe_id: 2, ingredients_id: 1, ingredient_quantity: 0.2},
        {recipes_details_id: 2, recipe_id: 2, ingredients_id: 2, ingredient_quantity: 1},
        {recipes_details_id: 3, recipe_id: 3, ingredients_id: 1, ingredient_quantity: 2},
        {recipes_details_id: 4, recipe_id: 3, ingredients_id: 2, ingredient_quantity: 0.5},
        {recipes_details_id: 5, recipe_id: 3, ingredients_id: 5, ingredient_quantity: 0.25}
      ]);
    });
};
