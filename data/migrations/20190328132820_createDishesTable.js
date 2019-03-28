
exports.up = function(knex, Promise) {
  return knex.schema.createTable('dishes', table => {
    table.increments();

    table
      .string('dish_name', 512)
      .notNull()
    
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('dishes');
};
