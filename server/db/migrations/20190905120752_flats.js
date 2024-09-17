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
    table.string('streetAddress')
    table.string('createdAt')
  })
}

export async function down(knex) {
  return knex.schema.dropTable('flats')
}
