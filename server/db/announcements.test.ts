import { beforeAll, beforeEach, expect, describe, it } from 'vitest'
import { getAnnouncements, addAnnouncement } from './announcements.ts'
import db from './connection.ts'

// - beforeAll and beforeEach to reset the migrations and seeds
beforeAll(async () => {
  await db.migrate.latest()
})
beforeEach(async () => {
  await db.seed.run()
})

describe('getAnnouncements', () => {
  it('returns an array of announcements for the specificed flat(1)', async () => {
    //ARRANGE
    const firstAnnouncement = {
      id: 1,
      auth0Id: 'auth0-placeholder',
      flatId: 1,
      title: 'Flat Announcement Test 1',
      content: 'test content for the flat announcement of flat 1',
      createdAt: '12:32 PM',
    }
    //ACT
    const flatOneAnnouncements = await getAnnouncements(1)
    //ASSERT
    expect(flatOneAnnouncements).toHaveLength(4)
    expect(flatOneAnnouncements[0]).toStrictEqual(firstAnnouncement)
  })
})

describe('addAnnouncement', () => {
  it('adds a new Announcement to the database', async () => {
    //ARRANGE
    const newAnnouncement = {
      auth0Id: 'auth0-placeholder',
      flatId: 1,
      title: 'Flat Announcement Test 5',
      content: 'test adding content for the flat announcement of flat 1',
      createdAt: '12:34 PM',
    }

    //ACT
    await addAnnouncement(newAnnouncement)
    const flatOneAnnouncements = await getAnnouncements(1)
    //ASSERT
    expect(flatOneAnnouncements).toHaveLength(5)
    expect(flatOneAnnouncements[4].title).toBe('Flat Announcement Test 5')
  })

  it('throws an error if no announcement data is passed in', async () => {
    //ARRANGE

    let error = ''
    //ACT
    try {
      // @ts-expect-error: Intentionally not including expected argument
      await addAnnouncement()
    } catch (e) {
      if (e instanceof Error) {
        error = e.message
      } else {
        error = 'Unknown Error'
      }
    }
    //ASSERT
    expect(error).toBe(
      `Cannot destructure property 'flatId' of 'data' as it is undefined.`,
    )
  })
})
