/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function up(knex) {
  return knex.schema.createTable('announcements', (table) => {
    table.increments('id')
    table.string('author_id').notNullable()
    table.integer('flat_id').notNullable()
    table.string('title').notNullable()
    table.string('content')
    table.string('created_at')
  })
}

export async function down(knex) {
  return knex.schema.dropTable('announcements')
}
