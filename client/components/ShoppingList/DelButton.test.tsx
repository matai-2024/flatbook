// @vitest-environment jsdom
import nock from 'nock'
import { beforeAll, describe, expect, it, vi } from 'vitest'
import { renderWithQuery } from '../../test-utils'
import DelButton from './DelButton'

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
  it('deletes a chore', async () => {
    const createNewChore = nock('http://localhost')
      .delete('/api/v1/shop/1')
      .reply(204)

    const screen = renderWithQuery(<DelButton flatId={'1'} itemId={1} />)
    const { user } = screen

    const getDelItemButton = screen.getByTestId('delete-item-button')

    expect(getDelItemButton).toBeVisible()

    await user.click(getDelItemButton)

    expect(createNewChore.isDone()).toBe(true)
  })
})
