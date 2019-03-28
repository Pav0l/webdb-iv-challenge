
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('ingredients').del()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {ingredients_id: 1, ingredients_name: 'tomatoes', unit: 'kg', price: 5.0},
        {ingredients_id: 2, ingredients_name: 'brocoli', unit: 'pcs', price: 2.10},
        {ingredients_id: 3, ingredients_name: 'sugar', unit: 'g', price: 0.2},
        {ingredients_id: 4, ingredients_name: 'pineapple', unit: '0.5kg can', price: 8.62},
        {ingredients_id: 5, ingredients_name: 'milk', unit: '0.1L', price: 1.0},
        {ingredients_id: 6, ingredients_name: 'eggs', unit: 'pcs', price: 0.5}
      ]);
    });
};
