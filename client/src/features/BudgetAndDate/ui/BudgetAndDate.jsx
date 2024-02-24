import React from 'react'
import style from './style.module.scss'

import { FormTitle } from '@shared/FormTitle'
import { FormSubTitle } from '@shared/FormSubTitle';

import { Budget } from '@shared/Order/Budget'
import { DatePicker } from '@shared/Order/DatePicker'

export const BudgetAndDate = (props) => {
  return (
    <div className={`${style['budget-and-date']} ${!props.isActive && 'inactive'}`}>
      <FormTitle>Сроки и бюджет</FormTitle>
      <div className={style.wrapper}>
        <Budget />
        <div className={style.date}>
          <FormSubTitle>Крайний срок</FormSubTitle>
          <DatePicker />
        </div>
      </div>
    </div>
  )
}
