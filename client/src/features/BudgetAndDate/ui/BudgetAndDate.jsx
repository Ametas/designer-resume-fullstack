import React from 'react'
import style from './style.module.scss'

import FormTitle from '@shared/FormTitle/FormTitle'

import FormSubTitle from '@shared/FormSubTitle/FormSubTitle';
import { Budget } from '@shared/Order/Budget'
import { DatePicker } from '@shared/Order/DatePicker'

export const BudgetAndDate = (props) => {
  return (
    <div className={`${style['budget-and-date']} ${!props.isActive && 'inactive'}`}>
      <FormTitle title="Сроки и бюджет"/>
      <div className={style.wrapper}>
        <Budget />
        <div className={style.date}>
          <FormSubTitle text="Крайний срок" />
          <DatePicker />
        </div>
      </div>
    </div>
  )
}
