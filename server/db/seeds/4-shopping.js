/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('shopping_lists').del()

  // Inserts seed entries
  await knex('shopping_lists').insert([
    {
      id: 1,
      flat_id: 1,
      author_id: 'auth0-id-1-placeholder',
      title: 'weekly',
      description: 'weekly shopping list',
      is_completed: false,
    },
    {
      id: 2,
      flat_id: 2,
      author_id: 'auth0-id-2-placeholder',
      title: 'weekly',
      description: 'weekly shopping list',
      is_completed: false,
    },
    {
      id: 3,
      flat_id: 3,
      author_id: 'auth0-id-3-placeholder',
      title: 'weekly',
      description: 'weekly shopping list',
      is_completed: false,
    },
  ])
}
