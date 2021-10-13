import React, { useState } from 'react'
import ReactDatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { registerLocale } from 'react-datepicker'
import { enGB } from 'date-fns/locale'

// Load imported locale object from date-fns
registerLocale('enGB', enGB)

const DatePicker = () => {
  const [startDate, setStartDate] = useState(new Date())
  console.log(startDate)

  return (
    <ReactDatePicker
      selected={startDate}
      allowSameDay
      onChange={date => setStartDate(date)}
      locale="enGB"
      showTimeSelect
      timeFormat="p"
      timeIntervals={30}
      dateFormat="Pp"
    />
  )
}

export default DatePicker
