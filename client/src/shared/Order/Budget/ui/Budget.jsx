import React, { useState } from 'react'
import style from './style.module.scss'

import { FormSubTitle } from '@shared/FormSubTitle';

export const Budget = (props) => {
  const [budget, setBudget] = useState({
    min: '',
    recommended: '',
    max: '',
  })

  const handleChange = (e) => {
    setBudget({
      ...budget,
      [e.target.name]: e.target.value
    })
    props.onChange(budget)
  }

  return (
    <div className={style.budget}>
      <FormSubTitle>Бюджет</FormSubTitle>
      <input name="min" onChange={(e) => handleChange(e)} placeholder='Минимальный бюджет' />
      <input name="recommended" onChange={(e) => handleChange(e)} placeholder='Рекомендуемый бюджет*' />
      <input name="max" onChange={(e) => handleChange(e)} placeholder='Максимальный бюджет*' />
    </div>
  )
}
