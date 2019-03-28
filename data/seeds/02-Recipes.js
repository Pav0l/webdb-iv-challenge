
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipes').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        {recipe_id: 1, dish_id: 1, recipe_name: 'Hawai', instructions: 'lorem ipsum'},
        {recipe_id: 2, dish_id: 1, recipe_name: 'Vegan', instructions: ''},
        {recipe_id: 3, dish_id: 2, recipe_name: 'Tomato soup', instructions: 'lorem ipsum'},
        {recipe_id: 4, dish_id: 2, recipe_name: 'Cabage soup', instructions: 'lorem ipsum'},
        {recipe_id: 5, dish_id: 3, recipe_name: 'Black', instructions: ''}
      ]);
    });
};
