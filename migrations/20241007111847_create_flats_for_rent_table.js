/**
 * @param { import("knex").Knex } knex
 * @returns {Knex.SchemaBuilder}
 */
exports.up = function(knex) {
    return knex.schema.createTable('flats_for_rent', (table) => {
        table.increments('id').primary();
        table.integer('user_id').unsigned().references('id').inTable('users').onDelete('CASCADE');
        table.string('position');
        table.string('district');
        table.string('city');
        table.string('country');
        table.string('title');
        table.text('short_description');
        table.text('description');
        table.decimal('price', 10, 2);
        table.string('email');
        table.jsonb('pictures');
        table.timestamp('created_at').defaultTo(knex.fn.now());
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns {Knex.SchemaBuilder}
 */
exports.down = function(knex) {
    return knex.schema.dropTable('flats_for_rent');
};
