// @vitest-environment jsdom
import nock from 'nock'
import { beforeAll, describe, expect, it, vi } from 'vitest'
import { renderWithQuery } from '../../test-utils'
import CreateChore from './CreateChore'
import { waitFor, waitForElementToBeRemoved } from '@testing-library/react'

beforeAll(() => {
  nock.disableNetConnect()
})

vi.mock('@auth0/auth0-react', () => ({
  useAuth0: () => ({
    user: {
      sub: 'auth0|123',
      email: '',
    },
    isAuthenticated: true,
    getAccessTokenSilently: vi.fn(() => 'token'),
  }),
}))

describe('CRUD operations', () => {
  it('creates a chore', async () => {
    const createNewChore = nock('http://localhost')
      .get('/api/v1/chores/1')
      .reply(200, [
        {
          flatId: 1,
          title: 'chore1',
          description: 'Clean the abc',
          priority: 4,
          deadline: '2024-10-14',
          createdAt: '2024-09-14',
          isCompleted: '0',
          id: 1,
        },
      ])
      .post('/api/v1/chores/1')
      .reply(201, [{ id: 2 }])

    const screen = renderWithQuery(<CreateChore flatId={'1'} />)
    const { user } = screen

    await waitForElementToBeRemoved(() =>
      screen.getByTestId('create-chore-pending'),
    )

    const getChoreHeader = await screen.findByText(/Add a New Chore/i)
    const getNewChoreTitle = await screen.findByPlaceholderText(/title\*/i)
    const getNewDescription = await screen.findByPlaceholderText(/Description/i)
    const getNewPriority = await screen.findByRole('slider')
    const getNewDeadline = await screen.findByTestId('deadline-selector')
    const addChoreButton = await waitFor(() =>
      screen.getByRole('button', { name: 'Add Chore' }),
    )

    // testing default values are rendering and correct
    expect(getChoreHeader).toBeVisible()

    expect(getNewChoreTitle).toBeVisible()
    expect(getNewChoreTitle).toHaveValue('')

    expect(getNewDescription).toBeVisible()
    expect(getNewDescription).toHaveValue('')

    expect(getNewPriority).toBeVisible()
    expect(getNewPriority).toHaveValue('1')

    expect(getNewDeadline).toBeVisible()
    expect(getNewDeadline).toHaveValue('')

    expect(addChoreButton).toBeVisible()

    // user inputs new chore values
    await user.type(getNewChoreTitle, 'Dishes')
    await user.type(getNewDescription, 'Clean the dishes using the new soap')
    await user.type(getNewPriority, '5')
    await user.type(getNewDeadline, '2024-10-10')
    // user submits new chore to be created
    await user.click(addChoreButton)

    expect(createNewChore.isDone()).toBe(true)
  })
})
