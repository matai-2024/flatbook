// @vitest-environment jsdom
import nock from 'nock'
import { beforeAll, describe, expect, it, vi } from 'vitest'
import { renderWithQuery } from '../../test-utils'
import { waitForElementToBeRemoved } from '@testing-library/react'
import ShopList from './ShopList'

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
  it('shows a list of items', async () => {
    const shoppingList = nock('http://localhost')
      .get('/api/v1/shop/1')
      .reply(200, [
        {
          id: 1,
          shoppingListId: 1,
          productName: 'Milk',
          quantity: '5',
        },
        {
          id: 2,
          shoppingListId: 1,
          productName: 'Eggs',
          quantity: '4',
        },
      ])

    const screen = renderWithQuery(<ShopList flatId={'1'} />)

    await waitForElementToBeRemoved(() => screen.getByText(/Loading.../i))

    const getShoppingHeaderName = await screen.findByText(/Name/i)
    const getShoppingHeaderQuantity = await screen.findByText(/Quantity/i)
    const getShoppingHeaderDelete = await screen.findByText(/Delete/i)
    const milkItem = await screen.findByText(/Milk/i)
    const eggsItem = await screen.findByText(/Eggs/i)

    // testing default values are rendering and correct
    expect(getShoppingHeaderName).toBeVisible()
    expect(getShoppingHeaderQuantity).toBeVisible()
    expect(getShoppingHeaderDelete).toBeVisible()
    expect(milkItem).toBeVisible()
    expect(eggsItem).toBeVisible()

    expect(shoppingList.isDone()).toBe(true)
  })
})
