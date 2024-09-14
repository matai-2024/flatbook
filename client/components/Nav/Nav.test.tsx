/* eslint-disable @typescript-eslint/no-explicit-any */
// @vitest-environment jsdom
import { beforeAll, describe, expect, it, vi } from 'vitest'
import { renderWithRouter } from '../../test-utils'

import nock from 'nock'
import { useAuth0 } from '@auth0/auth0-react'
vi.mock('@auth0/auth0-react')

beforeAll(() => {
  nock.disableNetConnect()
})

describe('Nav bar', () => {
  it('Should render the login button', () => {
    // Arrange
    vi.mocked(useAuth0).mockReturnValue({
      isAuthenticated: false,
    } as any)
    const { ...render } = renderWithRouter('/')
    // Act
    const loginButton = render.getByTestId('loginButton')
    // Assert
    expect(loginButton).toBeVisible()
  })

  it('Should render the logout button when logged in', () => {
    // Arrange
    vi.mocked(useAuth0).mockReturnValue({
      isAuthenticated: true,
    } as any)

    const { ...render } = renderWithRouter('/')
    // Act
    const logoutButton = render.getByTestId('logoutButton')
    // Assert
    expect(logoutButton).toBeVisible()
  })
})
