import React, { useState } from 'react'
import style from './style.module.scss'

import { FormTitle } from '@shared/FormTitle'
import { FormSubTitle } from '@shared/FormSubTitle';

import { Budget } from '@shared/Order/Budget'
import { DatePicker } from '@shared/Order/DatePicker'

export const BudgetAndDate = (props) => {
  const [values, setValues] = useState({})

  const handleDateChange = (value) => {
    const day = value["$D"]
    const month = value["$M"] + 1
    const year = value["$y"]
    setValues({ ...values, date: `${day}.${month}.${year}` })
    props.onUpdate(values)
  }

  const handleBudgetChange = (value) => {
    setValues({ ...values, budget: value })
    props.onUpdate(values)
  }

  return (
    <div className={`${style['budget-and-date']} ${!props.isActive && 'inactive'}`}>
      <FormTitle>Сроки и бюджет</FormTitle>
      <div className={style.wrapper}>
        <Budget onChange={(value) => handleBudgetChange(value)} />
        <div className={style.date}>
          <FormSubTitle>Крайний срок</FormSubTitle>
          <DatePicker onChange={(value) => handleDateChange(value)} />
        </div>
      </div>
    </div>
  )
}
