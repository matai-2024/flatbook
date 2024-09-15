/**
 * @param {import('knex').Knex} knex
 */
export async function up(knex) {
  return knex.schema.createTable('users', (table) => {
    table.increments('id')
    table.string('auth0_id')
    table.string('firstname')
    table.string('lastname')
    table.string('nickname').defaultTo(null)
    table.string('email')
    table.string('mobile').defaultTo(null)
    table.image('profile_photo').defaultTo(null)
    table.timestamp('created_at')
  })
}

export async function down(knex) {
  return knex.schema.dropTable('users')
}
