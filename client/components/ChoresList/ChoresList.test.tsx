// @vitest-environment jsdom
import { renderWithQuery } from '../../test-utils'
import { beforeAll, describe, it, expect } from 'vitest'
import nock from 'nock'
import ChoresList from './ChoresList'
import { waitForElementToBeRemoved } from '@testing-library/react'

beforeAll(() => {
  nock.disableNetConnect()
})

describe('ChoresList', () => {
  it('shows a list of chores from flat1', async () => {
    const scope = nock('http://localhost')
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
        {
          flatId: 1,
          title: 'chore2',
          description: 'Clean the def',
          priority: 4,
          deadline: '2024-10-14',
          createdAt: '2024-09-14',
          isCompleted: '0',
          id: 2,
        },
        {
          flatId: 1,
          title: 'chore3',
          description: 'Clean the xyz',
          priority: 4,
          deadline: '2024-10-14',
          createdAt: '2024-09-14',
          isCompleted: '0',
          id: 3,
        },
      ])

    const screen = renderWithQuery(<ChoresList flatId={'1'} />)
    await waitForElementToBeRemoved(() => screen.getByText(/Loading.../i))

    const chore1 = await screen.findByText('chore1')
    const chore2 = await screen.findByText('chore2')
    const chore3 = await screen.findByText('chore3')
    const chores = await screen.queryAllByText(/chore/i)

    expect(chore1).toBeVisible()
    expect(chore2).toBeVisible()
    expect(chore3).toBeVisible()
    expect(chores.length).toBe(3)

    expect(scope.isDone()).toBe(true)
  })
})
