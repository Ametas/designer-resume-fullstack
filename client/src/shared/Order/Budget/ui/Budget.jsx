import React from 'react'
import style from './style.module.scss'

import { FormSubTitle } from '@shared/FormSubTitle';

export const Budget = () => {
  return (
    <div className={style.budget}>
      <FormSubTitle>Бюджет</FormSubTitle>
      <input placeholder='Минимальный бюджет' />
      <input placeholder='Рекомендуемый бюджет*' />
      <input placeholder='Максимальный бюджет*' />
    </div>
  )
}
