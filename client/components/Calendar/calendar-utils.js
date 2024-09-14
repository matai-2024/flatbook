import dayjs from 'dayjs'

export const generateDate = (
  month = dayjs().month(),
  year = dayjs().year(),
) => {
  const firstDateOfMonth = dayjs().year(year).month(month).startOf('month')
  const lastDateOfMonth = dayjs().year(year).month(month).endOf('month')

  const arrayOfDate = []

  // Before month days
  for (let i = 0; i < firstDateOfMonth.day(); i++) {
    arrayOfDate.push({ currentMonth: false, date: firstDateOfMonth.day(i) })
  }

  //Current month
  for (let i = firstDateOfMonth.date(); i <= lastDateOfMonth.date(); i++) {
    arrayOfDate.push({
      date: firstDateOfMonth.date(i),
      currentMonth: true,
      today:
        firstDateOfMonth.date(i).toDate().toDateString() ===
        dayjs().toDate().toDateString(),
    })
  }

  // after month days
  const remaining = 42 - arrayOfDate.length
  for (
    let i = lastDateOfMonth.date() + 1;
    i <= lastDateOfMonth.date() + remaining;
    i++
  ) {
    arrayOfDate.push({ date: lastDateOfMonth.date(i), currentMonth: false })
  }

  return arrayOfDate
}

export const months = [
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

export const events = [
  { date: 'Sun Sep 15 2024', eventName: 'Flat Viewing' },
  { date: 'Tue Sep 17 2024', eventName: 'Flat Cleaning' },
  { date: 'Tue Sep 17 2024', eventName: 'Flat Spring Cleaning' },
  { date: 'Thu Sep 19 2024', eventName: 'Flat Game Day' },
]

console.log(dayjs().toDate().toDateString())
