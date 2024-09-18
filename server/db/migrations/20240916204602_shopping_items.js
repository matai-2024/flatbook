/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function up(knex) {
  return knex.schema.createTable('shopping_items', (table) => {
    table.increments('id')
    table.integer('shopping_list_id').notNullable()
    table.string('product_name').notNullable()
    table.string('quantity')
  })
}

export async function down(knex) {
  return knex.schema.dropTable('shopping_items')
}
