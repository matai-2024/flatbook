/**
 * @param {import('knex').Knex} knex
 */
export async function up(knex) {
  return knex.schema.createTable('flats', (table) => {
    table.increments('id')
    table.string('name')
    table.string('address')
    table.string('phone').defaultTo(null)
  })
}

export async function down(knex) {
  return knex.schema.dropTable('flat')
}
