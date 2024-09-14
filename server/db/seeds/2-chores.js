/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('chores').del()
  await knex('chores').insert([
    {
      flat_id: '1',
      title: 'chore1',
      description: 'Clean the damn dishes',
      priority: 4,
      deadline: '2024-10-14T22:08:47:000Z',
      created_at: '2024-09-14T22:06:47:000Z',
      is_completed: false,
    },
    {
      flat_id: '2',
      title: 'chore2',
      description: 'Fold the damn laundry',
      priority: 6,
      deadline: '2024-10-14T22:08:47:000Z',
      created_at: '2024-09-15T22:06:47:000Z',
      is_completed: false,
    },
    {
      flat_id: '3',
      title: 'chore3',
      description: 'Water the damn plants',
      priority: 7,
      deadline: '2024-09-17T22:08:47:000Z',
      created_at: '2024-09-16T22:06:47:000Z',
      is_completed: false,
    },
  ])
}
