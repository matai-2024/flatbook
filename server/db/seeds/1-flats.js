export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('flats').del()

  // Inserts seed entries
  await knex('flats').insert([
    {
      id: 1,
      flatAdmin: 'elias',
      title: 'bananaflat',
      image: '/C',
      description: 'Cool house',
      streetAddress: '101 Main St, Banana Island',
      createdAt: '09-213456',
    },
  ])
}
