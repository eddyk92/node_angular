
exports.up = function(knex, Promise) {
	return knex.schema.createTable('users', function(table){
  		table.increments(),
  		table.string('username').unique(),
        table.string('email'),
  		table.string('password')
  		table.integer("users_id").references("id").inTable("users");
	});
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users')
};
