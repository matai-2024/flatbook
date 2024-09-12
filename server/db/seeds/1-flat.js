export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('flat').del()

  // Inserts seed entries
  await knex('flat').insert([
    {
      id: 1,
      name: 'banana flat',
      address: '101 Main St, Banana Island',
      phone: '09-213456',
    },
    {
      id: 2,
      name: 'apple flat',
      address: '99 Queen St, Apple Town',
      phone: '09-2654738',
    },
    {
      id: 3,
      name: 'feijoa flat',
      address: '5 Eden Tce, Feijoadale',
      phone: '09-9954738',
    },
  ])
}
