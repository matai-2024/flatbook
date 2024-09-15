export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('users').del()

  // Inserts seed entries
  await knex('users').insert([
    {
      id: 1,
      auth0Id: '123456789',
      flatId: 1,
      firstName: 'alicia',
      lastName: 'tavita',
      nickName: null,
      about: null,
      email: 'aliciatavita@example.com',
      mobile: null,
      profilePhoto: null,
      createdAt: '13-02-2000',
    },
  ])
}
