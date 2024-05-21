/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('transactions', function(t) {
    t.increments('id');
    t.integer('user_id').notNullable().references('id').inTable('users');
    t.integer('transactionItem_id').notNullable().references('id').inTable('transactionItems');
    t.date('date');
    t.integer('total');
    t.dateTime('createdAt').defaultTo(knex.fn.now());
    t.dateTime('updatedAt').defaultTo(knex.fn.now());
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable('transactions')
};
