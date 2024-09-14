// @vitest-environment jsdom
import { describe, expect, it, vi } from 'vitest'
import { renderComponent } from '../../test-utils'

import Calendar from './Calendar'
vi.mock('@auth0/auth0-react')

describe('Calendar', () => {
  it('Should render all 7 days of the week', () => {
    // Arrange
    const { ...render } = renderComponent(<Calendar />)

    //Act
    const daysOfWeek = render.getAllByTestId('calendar-days')

    //Assert
    expect(daysOfWeek).toHaveLength(7)
  })
})
