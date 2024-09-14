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
      description: 'Clean the abc',
      priority: 4,
      deadline: '2024-10-14',
      assignee_id: 'auth0-placeholder',
      created_at: '2024-09-14',
      is_completed: false,
    },
    {
      flat_id: '1',
      title: 'chore2',
      description: 'Clean the def',
      assignee_id: 'auth0-placeholder',
      priority: 4,
      deadline: '2024-10-14',
      created_at: '2024-09-14',
      is_completed: false,
    },
    {
      flat_id: '1',
      title: 'chore3',
      description: 'Clean the xyz',
      assignee_id: 'auth0-placeholder',
      priority: 4,
      deadline: '2024-10-14',
      created_at: '2024-09-14',
      is_completed: false,
    },
    {
      flat_id: '2',
      title: 'chore1',
      description: 'Fold the damn laundry',
      assignee_id: 'auth0-placeholder',
      priority: 6,
      deadline: '2024-10-14',
      created_at: '2024-09-15',
      is_completed: false,
    },
    {
      flat_id: '3',
      title: 'chore1',
      description: 'Water the damn plants',
      assignee_id: 'auth0-placeholder',
      priority: 7,
      deadline: '2024-09-17',
      created_at: '2024-09-16',
      is_completed: false,
    },
  ])
}
