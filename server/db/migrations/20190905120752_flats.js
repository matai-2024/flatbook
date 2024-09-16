/**
 * @param {import('knex').Knex} knex
 */
export async function up(knex) {
  return knex.schema.createTable('flats', (table) => {
    table.increments('id')
    table.string('flatAdmin')
    table.string('title')
    table.string('image').defaultTo(null)
    table.string('description').defaultTo(null)
    table.string('streetAddress').defaultTo(null)
    table.string('createdAt').defaultTo(null)
  })
}

export async function down(knex) {
  return knex.schema.dropTable('flats')
}
