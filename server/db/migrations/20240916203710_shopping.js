/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function up(knex) {
  return knex.schema.createTable('shopping_lists', (table) => {
    table.increments('id')
    table.integer('flat_id').notNullable()
    table.string('author_id').notNullable()
    table.string('title').notNullable()
    table.string('description')
    table.boolean('is_completed')
  })
}

export async function down(knex) {
  return knex.schema.dropTable('shopping_lists')
}
