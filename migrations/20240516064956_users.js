/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable('users', t => {
    t.increments('id');
    t.string('name', 50).notNullable();
    t.string('email').notNullable();
    t.string('phone_number', 15).notNullable();
    t.string('username', 50).notNullable();
    t.string('password', 100).notNullable();
    t.string('role').notNullable();
    t.dateTime('createdAt').defaultTo(knex.fn.now());
    t.dateTime('updatedAt').defaultTo(knex.fn.now());
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable('users')
};
