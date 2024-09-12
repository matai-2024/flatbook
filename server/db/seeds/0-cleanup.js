export async function seed(knex) {
  await knex('flat').del()
  // Add other tables here...
}
