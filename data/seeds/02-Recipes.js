
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipes').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        {dish_id: 1, recipe_name: 'Hawai', instructions: 'lorem ipsum'},
        {dish_id: 1, recipe_name: 'Fungi', instructions: 'lorem ipsum'},
        {dish_id: 1, recipe_name: 'Bacon and eggs', instructions: 'lorem ipsum'},
        {dish_id: 1, recipe_name: 'Vegan', instructions: ''},
        {dish_id: 2, recipe_name: 'Tomato soup', instructions: 'lorem ipsum'},
        {dish_id: 2, recipe_name: 'Chicken soup', instructions: ''},
        {dish_id: 2, recipe_name: 'Cabage soup', instructions: 'lorem ipsum'},
        {dish_id: 3, recipe_name: 'Green', instructions: ''},
        {dish_id: 3, recipe_name: 'Camomile', instructions: ''},
        {dish_id: 3, recipe_name: 'Black', instructions: ''}
      ]);
    });
};
