/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('products', function(t) {
    t.increments('id');
    t.integer('category_id').notNullable().references('id').inTable('categories');
    t.string('name');
    t.integer('stock');
    t.integer('price');
    t.text('description');
    t.enum('status');
    t.integer('sold');
    t.dateTime('createdAt').defaultTo(knex.fn.now());
    t.dateTime('updatedAt').defaultTo(knex.fn.now());
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable('products')
};
