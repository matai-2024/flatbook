import { beforeAll, beforeEach, expect, describe, it } from 'vitest'
import { getChores, addChore } from './chores.ts'
import db from './connection.ts'

// - beforeAll and beforeEach to reset the migrations and seeds
beforeAll(async () => {
  await db.migrate.latest()
})
beforeEach(async () => {
  await db.seed.run()
})

describe('getChores', () => {
  it('returns an array of chores for the specificed flat(1)', async () => {
    //ARRANGE
    const firstChore = {
      flatId: 1,
      title: 'chore1',
      description: 'Clean the abc',
      priority: 4,
      deadline: '2024-10-14',
      createdAt: '2024-09-14',
      isCompleted: '0',
      id: 1,
    }
    //ACT
    const flatOneChores = await getChores(1)
    //ASSERT
    expect(flatOneChores).toHaveLength(3)
    expect(flatOneChores[0]).toStrictEqual(firstChore)
  })
})

describe('addAlbum', () => {
  it('adds a new album to the database', async () => {
    //ARRANGE
    const newChore = {
      flatId: 1,
      title: 'Test1',
      description: '',
      priority: '5',
      deadline: '2024-09-21',
      createdAt: '2024-09-21',
      isCompleted: false,
    }

    //ACT
    await addChore(newChore)
    const flatOneChores = await getChores(1)
    //ASSERT
    expect(flatOneChores).toHaveLength(4)
    expect(flatOneChores[3].title).toBe('Test1')
  })

  it('throws an error if no album data is passed in', async () => {
    //ARRANGE

    let error = ''
    //ACT
    try {
      // @ts-expect-error: Intentionally not including expected argument
      await addChore()
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
