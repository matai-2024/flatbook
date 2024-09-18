/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('shopping_items').del()

  // Inserts seed entries
  await knex('shopping_items').insert([
    {
      id: 1,
      shopping_list_id: 1,
      product_name: 'Milk',
      quantity: 5,
    },
    {
      id: 2,
      shopping_list_id: 1,
      product_name: 'Eggs',
      quantity: 4,
    },
    {
      id: 3,
      shopping_list_id: 1,
      product_name: 'Cheese',
      quantity: 2,
    },
    {
      id: 4,
      shopping_list_id: 2,
      product_name: 'Doughnuts',
      quantity: 2,
    },
  ])
}
