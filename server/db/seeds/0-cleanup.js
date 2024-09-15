export async function seed(knex) {
  await knex('flats').del()
  await knex('users').del()
  // Add other tables here...
}
