import React, { useState } from 'react'
import style from './style.module.scss'

import { LocalizationProvider, DateCalendar } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';
import ru from 'dayjs/locale/ru'

export const DatePicker = (props) => {
  const [value, setValue] = useState(dayjs())

  const handleChange = (newValue) => {
    setValue(dayjs(newValue))
    props.onChange(newValue)
  }

  return (
    <LocalizationProvider 
      dateAdapter={AdapterDayjs}
      adapterLocale={ru}
    >
      <DateCalendar
        value={value}
        onChange={(newValue) => {handleChange(newValue)}}
      />
    </LocalizationProvider>
  )
}
