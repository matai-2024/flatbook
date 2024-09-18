// @vitest-environment jsdom
// import { describe, it, expect, vi, beforeAll } from 'vitest'
// import nock from 'nock'
// import { renderWithQueryAndRouter } from '../../test-utils'

// beforeAll(() => {
//   nock.disableNetConnect()
// })

// vi.mock('@auth0/auth0-react', () => ({
//   useAuth0: () => ({
//     user: {
//       sub: 'auth0|123',
//       email: '',
//     },
//     isAuthenticated: true,
//     getAccessTokenSilently: vi.fn(() => 'token'),
//   }),
//   withAuthenticationRequired: vi.fn((Component) => Component),
// }))

// describe('Dashboard', () => {
//   it('should render widgets successfully on loading', async () => {
//     // Arrange
//     const scopeChores = nock('http://localhost')
//       .get('/api/v1/chores/1')
//       .reply(200, [
//         {
//           flatId: 1,
//           title: 'chore1',
//           description: 'Clean the abc',
//           priority: 4,
//           deadline: '2024-10-14',
//           createdAt: '2024-09-14',
//           isCompleted: '0',
//           id: 1,
//         },
//       ])

//     const scopeAnnouncements = nock('http://localhost')
//       .get('/api/v1/announcements/1')
//       .reply(200, [
//         {
//           id: 1,
//           auth0Id: 'auth0-placeholder',
//           flatId: 1,
//           title: 'Flat Announcement Test 1',
//           content: 'test content for the flat announcement of flat 1',
//           createdAt: '12:32 PM',
//         },
//       ])

//     // Action
//     const screen = renderWithQueryAndRouter('/dashboard/1')

//     // Assert
//     const choresWidgetHeader = await screen.findByRole('heading', {
//       name: 'Chores',
//     })
//     const AnnouncementWidgetHeader = screen.getByRole('heading', {
//       name: 'Announcements',
//     })
//     const shoppingListWidgetHeader = screen.getByRole('heading', {
//       name: 'Shopping List',
//     })
//     const eventsWidgetHeader = screen.getByRole('heading', {
//       name: 'Events',
//     })

//     expect(choresWidgetHeader).toBeVisible()
//     expect(AnnouncementWidgetHeader).toBeVisible()
//     expect(shoppingListWidgetHeader).toBeVisible()
//     expect(eventsWidgetHeader).toBeVisible()

//     expect(scopeChores.isDone()).toBe(true)
//     expect(scopeAnnouncements.isDone()).toBe(true)
//   })
// })
