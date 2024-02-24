import React, { useState } from 'react'
import style from './style.module.scss'

import { LocalizationProvider, DateCalendar } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';
import ru from 'dayjs/locale/ru'

export const DatePicker = () => {
  const [value, setValue] = useState(dayjs())

  return (
    <LocalizationProvider 
      dateAdapter={AdapterDayjs}
      adapterLocale={ru}
    >
      <DateCalendar
        value={value}
        onChange={(newValue) => {setValue(dayjs(newValue))}}
      />
    </LocalizationProvider>
  )
}
