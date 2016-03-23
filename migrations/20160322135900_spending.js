
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable("spending", function(table) {
      table.increments();
      table.string("name");
      table.integer("users_id").references("id").inTable("users");
    }),

    knex.schema.table("users", function(table) {
      table.integer("spending_id").references("id").inTable("spending");
    })
  ]);
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("spending");
};