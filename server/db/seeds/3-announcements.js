/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('announcements').del()
  await knex('announcements').insert([
    {
      author_id: 'auth0-placeholder',
      flat_id: 1,
      title: 'Flat Announcement Test 1',
      content: 'test content for the flat announcement of flat 1',
      created_at: '12:32 PM',
    },
    {
      author_id: 'auth0-placeholder-2',
      flat_id: 1,
      title: 'Flat Announcement Test 2',
      content: 'test content for the flat announcement of flat 1',
      created_at: '15:32:15',
    },
    {
      author_id: 'auth0-placeholder-2',
      flat_id: 1,
      title: 'Flat Announcement Test 3',
      content: 'test content for the flat announcement of flat 1',
      created_at: '2024-09-15',
    },
    {
      author_id: 'auth0-placeholder-3',
      flat_id: 1,
      title: 'Flat Announcement Test 4',
      content: 'test content for the flat announcement of flat 1',
      created_at: '2024-09-15',
    },
    {
      author_id: 'auth0-placeholder',
      flat_id: 2,
      title: 'Flat Announcement Test 5',
      content: 'test content for the flat announcement of flat 2',
      created_at: '2024-09-15',
    },
    {
      author_id: 'auth0-placeholder',
      flat_id: 3,
      title: 'Flat Announcement Test 6',
      content: 'test content for the flat announcement of flat 3',
      created_at: '2024-09-15',
    },
  ])
}
