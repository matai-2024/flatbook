export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('users').del()

  // Inserts seed entries
  await knex('users').insert([
    {
      id: 1,
      auth0Id: '123456789',
      flatId: 1,
      firstName: 'Alicia',
      lastName: 'Tavita',
      nickName: 'monkey123',
      about:
        'Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      email: 'aliciatavita@example.com',
      mobile: '1233425562434',
      profilePhoto: null,
      createdAt: '13-02-2000',
    },
  ])
}
