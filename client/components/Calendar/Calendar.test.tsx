/* eslint-disable @typescript-eslint/no-explicit-any */
// @vitest-environment jsdom
import { describe, expect, it, vi } from 'vitest'
import { renderWithRouter } from '../../test-utils'

import { useAuth0 } from '@auth0/auth0-react'
vi.mock('@auth0/auth0-react')

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
