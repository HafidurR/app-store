/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('users', function(t) {
    t.increments('id');
    t.string('name');
    t.string('email');
    t.string('password');
    t.string('username');
    t.string('phone_number');
    t.enum('role');
    t.dateTime('createdAt').defaultTo(knex.fn.now());
    t.dateTime('updatedAt').defaultTo(knex.fn.now());
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable('users')
};
