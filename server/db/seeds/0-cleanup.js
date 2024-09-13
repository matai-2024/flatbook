export async function seed(knex) {
  await knex('flats').del()
  // Add other tables here...
}
