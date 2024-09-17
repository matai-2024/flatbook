export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('users').del()

  // Inserts seed entries
  await knex('users').insert([
    {
      id: 1,
      auth0Id: '1',
      flatId: 1,
      firstName: 'Alicia',
      lastName: 'Tavita',
      nickName: 'LitFlyingMonkey',
      about:
        'Currently getting my certificate in Applied Software Development at Dev Academy Aotearoa. My wealth of experience has allowed me to foster and grow both my technical and people skills. I have a well-packed tool-kit from working in different industries, and my unique background allows me to bring a fresh perspective to every role. Much like my life and work experience, I have a diverse and wide-ranging set of interests. Im always up for trying new things and looking into the next course or hobby to jump into and explore. Im always looking to grow, being challenged and stepping outside of my comfort zone drives me.',
      email: 'aliciatavita@example.com',
      mobile: '+6421-111-111',
      profilePhoto:
        'https://scontent.fakl1-3.fna.fbcdn.net/v/t39.30808-6/456070090_3319694958337952_5014730032637568018_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=75gzyaweA70Q7kNvgErW166&_nc_ht=scontent.fakl1-3.fna&_nc_gid=ACjLtAxGoYCFyKgB1iGLKh2&oh=00_AYCUiWJbhe9xn_n9d3igZuBNYs2gMcbhF2DI8Diy9xxkig&oe=66EDB786',
      createdAt: '13-02-2000',
    },
    {
      id: 2,
      auth0Id: '2',
      flatId: 1,
      firstName: 'Elias',
      lastName: 'Kaleta',
      nickName: 'LonelyBanana',
      about:
        'Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      email: 'eliaskaleta@example.com',
      mobile: '+6421-222-222',
      profilePhoto:
        'https://scontent.fakl1-3.fna.fbcdn.net/v/t39.30808-6/410602207_10161040388484181_5426114017262028169_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=a5f93a&_nc_ohc=CFNUEbrrwiUQ7kNvgG-xyVp&_nc_ht=scontent.fakl1-3.fna&_nc_gid=Al8YmmE9YMFWexLLK_eJ6wg&oh=00_AYB9WjhY_JrQSBfr2FAAlEggOHuCQvDNv_vk0uemlPJ8SQ&oe=66ED9B5E',
      createdAt: '13-02-2000',
    },
    {
      id: 3,
      auth0Id: '3',
      flatId: 1,
      firstName: 'Ryan',
      lastName: 'Zhao',
      nickName: null,
      about:
        'Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      email: 'ryanzhao@example.com',
      mobile: '+6421-333-333',
      profilePhoto: null,
      createdAt: '13-02-2000',
    },
    {
      id: 4,
      auth0Id: '4',
      flatId: 1,
      firstName: 'Logan',
      lastName: 'Bennett',
      nickName: null,
      about:
        'Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      email: 'loganbennett@example.com',
      mobile: '+6421-444-444',
      profilePhoto: null,
      createdAt: '13-02-2000',
    },
  ])
}
