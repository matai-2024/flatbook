// @vitest-environment jsdom
import { describe, expect, it, vi } from 'vitest'
import { renderComponent, renderWithQuery } from '../../test-utils'

import Calendar from './Calendar'
import dayjs from 'dayjs'
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

  // it('Should render an event', async () => {
  //   // Arrange
  //   const { user, ...render } = renderWithQuery(<Calendar />)
  //
  //   //Act
  //   const dayWithEvent = render.getAllByTestId('dayWithEvent')
  //   await user.click(dayWithEvent[0])
  //
  //   const events = render.getByTestId('event')
  //
  //   //Assert
  //   expect(events).toBeDefined()
  // })

  it('Should display message when day has no events', async () => {
    // Arrange
    const { user, ...render } = renderWithQuery(<Calendar />)

    //Act
    const dayWithNoEvent = render.getAllByTestId('dayWithoutEvent')
    await user.click(dayWithNoEvent[0])

    const message = render.getByTestId('noEvent')

    //Assert
    expect(message.innerHTML).toStrictEqual('No Events Today!')
  })

  it('Should render the correct month and all premonth and postmonth days', async () => {
    // Arrange
    const months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ]
    const currentMonth = `${months[dayjs().month()]}, ${dayjs().year()}`
    const nextYear = `${months[dayjs().month()]}, ${dayjs().year() + 1}`

    const { user, ...render } = renderWithQuery(<Calendar />)

    // Act
    const renderedMonth = render.getByTestId('visibleMonth')
    expect(renderedMonth.innerHTML).toStrictEqual(currentMonth) //Render correct current month

    const renderedDays = render.getAllByTestId('dayWithoutEvent')
    expect(renderedDays).toHaveLength(42) //Render all days

    const nextMonthButton = render.getByTestId('next-month-button')
    for (let i = 0; i < 12; i++) {
      await user.click(nextMonthButton)
    }

    const renderedFutureMonth = render.getByTestId('visibleMonth')
    expect(renderedFutureMonth.innerHTML).toStrictEqual(nextYear) //Render correct future month

    const renderedFutureDays = render.getAllByTestId('dayWithoutEvent')
    expect(renderedFutureDays).toHaveLength(42) //Render all future days
  })

  it('Should render the correct month and all premonth and postmonth days for a date NOT today', async () => {
    // Arrange
    const months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ]
    const nextYear = `${months[dayjs().month()]}, ${dayjs().year() + 1}`

    const { user, ...render } = renderWithQuery(<Calendar />)

    const nextMonthButton = render.getByTestId('next-month-button')
    for (let i = 0; i < 12; i++) {
      await user.click(nextMonthButton)
    }

    const renderedFutureMonth = render.getByTestId('visibleMonth')
    expect(renderedFutureMonth.innerHTML).toStrictEqual(nextYear) //Render correct future month

    const renderedFutureDays = render.getAllByTestId('dayWithoutEvent')
    expect(renderedFutureDays).toHaveLength(42) //Render all future days
  })
})
