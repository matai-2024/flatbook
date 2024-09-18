export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('users').del()

  // Inserts seed entries
  await knex('users').insert([
    {
      auth0Id: '123456789',
      flatId: 1,
      firstName: 'Alicia',
      lastName: 'Tavita',
      nickName: null,
      about: null,
      email: 'aliciatavita@example.com',
      mobile: null,
      profilePhoto: null,
      createdAt: '13-02-2000',
    },
    {
      auth0Id: '2345678968',
      flatId: 1,
      firstName: 'Ryan',
      lastName: 'Zhao',
      nickName: null,
      about: null,
      email: 'ryan@example.com',
      mobile: null,
      profilePhoto: null,
      createdAt: '14-02-2000',
    },
    {
      auth0Id: '23456789621',
      flatId: 1,
      firstName: 'Logan',
      lastName: 'Bennett',
      nickName: null,
      about: null,
      email: 'logan@example.com',
      mobile: null,
      profilePhoto: null,
      createdAt: '15-02-2000',
    },
    {
      auth0Id: '2345678964',
      flatId: 1,
      firstName: 'Elias',
      lastName: 'Kaleta',
      nickName: null,
      about: null,
      email: 'elias@example.com',
      mobile: null,
      profilePhoto: null,
      createdAt: '16-02-2000',
    },
  ])
}
