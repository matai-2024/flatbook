/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import dayjs from 'dayjs'
import { events, generateDate, months } from './calendar-utils'
import cn from './cn'
import { useState } from 'react'
import { GrFormNext, GrFormPrevious } from 'react-icons/gr'
import Button from '../UI/Button'

export default function Calendar() {
  const days = ['S', 'M', 'T', 'W', 'T', 'F', 'S']

  const currentDate = dayjs()
  const [today, setToday] = useState(currentDate)
  const [selectDate, setSelectDate] = useState(currentDate)

  const eventList = events
  const daysWithEvent: string[] = []
  eventList.forEach((eve) => {
    daysWithEvent.push(eve.date)
  })

  return (
    <div className="mx-auto flex h-screen w-1/2 items-center gap-10 divide-x-2 divide-secondary">
      <div className="h-96 w-96">
        {
          //** Calendar Days of week*/
        }
        <div className="flex justify-between">
          <h1 className="font-semibold">
            {months[today.month()]}, {today.year()}
          </h1>
          <div className="flex items-center gap-5">
            <GrFormPrevious
              className="h-5 w-5 cursor-pointer"
              onClick={() => {
                setToday(today.month(today.month() - 1))
              }}
            />
            <h1
              className="cursor-pointer"
              onClick={() => {
                setToday(currentDate)
              }}
            >
              Today
            </h1>
            <GrFormNext
              className="h-5 w-5 cursor-pointer"
              onClick={() => {
                setToday(today.month(today.month() + 1))
              }}
            />
          </div>
        </div>
        <div className="grid w-full grid-cols-7 text-gray-600">
          {days.map((day, index) => {
            return (
              <h1
                key={index}
                className="grid h-14 place-content-center text-sm"
              >
                {day}
              </h1>
            )
          })}
        </div>
        {
          //** Calendar Days of month*/
        }
        <div className="grid w-full grid-cols-7">
          {generateDate(today.month(), today.year()).map(
            ({ date, currentMonth, today }, index) => {
              return (
                <div
                  key={index}
                  className="grid h-14 place-content-center border-t-2 border-secondary text-sm"
                >
                  <h1
                    className={cn(
                      currentMonth ? '' : 'text-gray-600',
                      today ? 'bg-red-400 text-white' : '',
                      'grid h-10 w-10 cursor-pointer place-content-center rounded-full transition-all hover:bg-primary hover:text-white',
                      selectDate.toDate().toDateString() ===
                        date.toDate().toDateString()
                        ? 'bg-primary text-white'
                        : '',
                      daysWithEvent.includes(date.toDate().toDateString())
                        ? ' font-semibold underline'
                        : '',
                    )}
                    onClick={() => {
                      setSelectDate(date)
                    }}
                  >
                    {date.date()}
                  </h1>
                </div>
              )
            },
          )}
        </div>
      </div>
      {
        //** Schedule Events*/
      }
      <div className="h-96 w-96 flex-row px-5">
        <h1 className="font-semibold">
          Schedule for {selectDate.toDate().toDateString()}
        </h1>
        {daysWithEvent.includes(selectDate.toDate().toDateString()) ? (
          eventList.map((eve) => {
            return eve.date === selectDate.toDate().toDateString() ? (
              <p key={eve.eventName} className="leading-10">
                {eve.eventName}
              </p>
            ) : (
              ''
            )
          })
        ) : (
          <p className="leading-10">No Events Today!</p>
        )}
        <Button className="absolute bottom-60 text-center">Add an event</Button>
      </div>
    </div>
  )
}
