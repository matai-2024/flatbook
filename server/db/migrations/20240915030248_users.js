/**
 * @param {import('knex').Knex} knex
 */
export async function up(knex) {
  return knex.schema.createTable('users', (table) => {
    table.string('auth0Id').primary()
    table.integer('flatId')
    table.string('firstName')
    table.string('lastName')
    table.string('nickName').defaultTo(null)
    table.string('about').defaultTo(null)
    table.string('email')
    table.string('mobile').defaultTo(null)
    table.string('profilePhoto').defaultTo(null)
    table.timestamp('createdAt')
  })
}

export async function down(knex) {
  return knex.schema.dropTable('users')
}
