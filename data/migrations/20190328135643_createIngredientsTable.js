
exports.up = function(knex, Promise) {
  return knex.schema.createTable('ingredients', table => {
    table.increments('ingredients_id');

    table
      .string('ingredients_name', 512)
      .notNull()
    
    table
      .string('unit', 128)
      .notNull()
    
    table
      .float('price', 2)
      .notNull()

  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('ingredients');
};
