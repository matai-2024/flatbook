// @vitest-environment jsdom
import nock from 'nock'
import { describe, expect, it } from 'vitest'
import { renderWithQuery } from '../../test-utils'
import CreateAnnouncement from './CreateAnnouncement'
import { waitFor } from '@testing-library/react'

describe('CRUD operations', () => {
  it('creates an Announcement', async () => {
    const createNewAnnouncement = nock('http://localhost')
      .post('/api/v1/announcements/1')
      .reply(200, [4])

    const screen = renderWithQuery(<CreateAnnouncement flatId={'1'} />)
    const { user } = screen

    const getNewAnnouncementTitle =
      await screen.getByPlaceholderText(/title\*/i)
    const getNewAnnouncement = await screen.getByPlaceholderText(
      /What is your announcement.../i,
    )
    const makeAnnouncementButton = await waitFor(() =>
      screen.getByRole('button', { name: 'Make Announcement' }),
    )

    // testing default values are rendering and correct
    expect(getNewAnnouncementTitle).toBeVisible()
    expect(getNewAnnouncementTitle).toHaveValue('')

    expect(getNewAnnouncement).toBeVisible()
    expect(getNewAnnouncement).toHaveValue('')

    expect(makeAnnouncementButton).toBeVisible()

    // user inputs new Announcement values
    await user.type(getNewAnnouncementTitle, 'Home from work')
    await user.type(getNewAnnouncement, 'What are we doing tonight')
    // user submits new Announcement to be created
    await user.click(makeAnnouncementButton)

    expect(createNewAnnouncement.isDone()).toBe(true)
  })
})
