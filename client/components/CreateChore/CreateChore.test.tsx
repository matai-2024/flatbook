// @vitest-environment jsdom
import nock from 'nock'
import { describe, expect, it } from 'vitest'
import { renderWithQuery } from '../../test-utils'
import CreateChore from './CreateChore'
import { waitFor } from '@testing-library/react'

describe('CRUD operations', () => {
  it('creates a chore', async () => {
    const createNewChore = nock('http://localhost')
      .post('/api/v1/chores/1')
      .reply(200, [4])

    const screen = renderWithQuery(<CreateChore flatId={'1'} />)
    const { user } = screen

    const getChoreHeader = await screen.getByText(/Add a New Chore/i)
    const getNewChoreTitle = await screen.getByPlaceholderText(/title\*/i)
    const getNewDescription = await screen.getByPlaceholderText(/Description/i)
    const getNewPriority = await screen.getByRole('slider')
    const getNewDeadline = await screen.getByTestId('deadline-selector')
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
