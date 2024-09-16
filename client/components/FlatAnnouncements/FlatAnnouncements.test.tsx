// @vitest-environment jsdom
import { renderWithQuery } from '../../test-utils'
import { beforeAll, describe, it, expect } from 'vitest'
import nock from 'nock'
import FlatAnnouncements from './FlatAnnouncements'
import { waitForElementToBeRemoved } from '@testing-library/react'

beforeAll(() => {
  nock.disableNetConnect()
})

describe('FlatAnnouncements', () => {
  it('shows a list of announcements from flat1', async () => {
    const scope = nock('http://localhost')
      .get('/api/v1/announcements/1')
      .reply(200, [
        {
          id: 1,
          auth0Id: 'auth0-placeholder',
          flatId: 1,
          title: 'Flat Announcement Test 1',
          content: 'test content for the flat announcement of flat 1',
          createdAt: '12:32 PM',
        },
        {
          id: 2,
          auth0Id: 'auth0-placeholder-2',
          flatId: 1,
          title: 'Flat Announcement Test 2',
          content: 'test content for the flat announcement of flat 1',
          createdAt: '15:32:15',
        },
        {
          id: 3,
          auth0Id: 'auth0-placeholder-2',
          flatId: 1,
          title: 'Flat Announcement Test 3',
          content: 'test content for the flat announcement of flat 1',
          createdAt: '2024-09-15',
        },
        {
          id: 4,
          auth0Id: 'auth0-placeholder-3',
          flatId: 1,
          title: 'Flat Announcement Test 4',
          content: 'test content for the flat announcement of flat 1',
          createdAt: '2024-09-15',
        },
      ])

    const screen = renderWithQuery(<FlatAnnouncements flatId={'1'} />)

    await waitForElementToBeRemoved(() =>
      screen.getByTestId(/announcement-skeleton/i),
    )

    const chore1 = await screen.findByText('Flat Announcement Test 1')
    const chore2 = await screen.findByText('Flat Announcement Test 2')
    const chore3 = await screen.findByText('Flat Announcement Test 3')
    const chore4 = await screen.findByText('Flat Announcement Test 4')
    const chores = await screen.queryAllByText(/Flat Announcement Test/i)

    expect(chore1).toBeVisible()
    expect(chore2).toBeVisible()
    expect(chore3).toBeVisible()
    expect(chore4).toBeVisible()
    expect(chores.length).toBe(4)

    expect(scope.isDone()).toBe(true)
  })
})
