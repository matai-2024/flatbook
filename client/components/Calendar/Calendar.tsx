import { generateDate } from './calendar-utils'
import cn from './cn'

export default function Calendar() {
  const days = ['S', 'M', 'T', 'W', 'T', 'F', 'S']

  return (
    <div className="h-96 w-96">
      <div className="grid w-full grid-cols-7">
        {days.map((day, index) => {
          return (
            <h1 key={index} className="grid h-14 place-content-center text-sm">
              {day}
            </h1>
          )
        })}
      </div>
      <div className="grid w-full grid-cols-7">
        {generateDate().map(({ date, currentMonth, today }, index) => {
          return (
            <div
              key={date.toDate().toDateString()}
              className="grid h-14 place-content-center border-t-2 border-secondary text-sm"
            >
              <h1
                className={cn(
                  currentMonth ? '' : 'text-gray-600',
                  today ? 'bg-red-400 text-white' : '',
                  'grid h-10 w-10 cursor-pointer place-content-center rounded-full transition-all hover:bg-primary hover:text-white',
                )}
              >
                {date.date()}
              </h1>
            </div>
          )
        })}
      </div>
    </div>
  )
}
