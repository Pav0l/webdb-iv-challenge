
exports.up = function(knex, Promise) {
  return knex.schema.createTable('recipes_details', table => {
    table.increments('recipes_details_id')

    table
      .integer('recipe_id')
      .notNull()
      .unsigned()
      .references('recipe_id')
      .inTable('recipes')
      .onDelete('CASCADE')
      .onUpdate('CASCADE');

    table
      .integer('ingredients_id')
      .notNull()
      .unsigned()
      .references('ingredients_id')
      .inTable('ingredients')
      .onDelete('CASCADE')
      .onUpdate('CASCADE');
    
    table
      .float('ingredient_quantity')
      .notNull();

  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('recipes_details');
};
