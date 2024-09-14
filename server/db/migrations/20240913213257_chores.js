/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

export async function up(knex) {
  return knex.schema.createTable('chores', (table) => {
    table.increments('id')
    table.integer('flat_id').notNullable()
    table.string('title').notNullable()
    table.string('description')
    table.string('assignee_id')
    table.integer('priority')
    table.string('deadline')
    table.string('created_at')
    table.string('is_completed').defaultTo(false)
  })
}

export async function down(knex) {
  return knex.schema.dropTable('chores')
}
