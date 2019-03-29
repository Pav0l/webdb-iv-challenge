
exports.up = function(knex, Promise) {
  return knex.schema.createTable('recipes', table => {
    table.increments('recipe_id');

    table
      .string('recipe_name', 512)
      .notNull()
    
    table
      .text('instructions')

    table
      .integer('dish_id')
      .unsigned()
      .references('id')
      .inTable('dishes')
      .onDelete('CASCADE')
      .onUpdate('CASCADE')


  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('recipes');
};
