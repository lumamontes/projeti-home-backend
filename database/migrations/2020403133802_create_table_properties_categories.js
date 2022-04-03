
exports.up = function (knex) {
    knex.raw('create extension if not exists "uuid-ossp"')
    return knex.schema
      .createTable('properties_categories', function (table) {
        table.uuid('id').primary().defaultTo(knex.raw('uuid_generate_v4()'));
        table.string('name', 200).notNullable().unique();
        table.timestamp('created_at').defaultTo(knex.fn.now());
        table.timestamp('updated_at').defaultTo(knex.fn.now());
      })
  };
  
  exports.down = function (knex) {
    return knex.schema
      .dropTable('properties_categories');
  };
  