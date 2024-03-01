import React, { useState } from 'react'
import style from './style.module.scss'

import Input from '@entities/Input/Input';
import { FormTitle } from '@shared/FormTitle';
import { FormSubTitle}  from '@shared/FormSubTitle';

export const PersonalData = (props) => {
  const [values, setValues] = useState({})

  const handleChange = (e, field) => {
    setValues({ ...values, [field]: e.target.value })
    props.onUpdate(values)
  }

  return (
  <div className={`${style['personal-data']} ${!props.isActive && 'inactive'}`}>
    <FormTitle>Контактная информация</FormTitle>
    <FormSubTitle>Заполните информацию о себе, чтобы мы могли связаться с Вами.</FormSubTitle>
    <div className={style['input-box']}>
      <Input 
        id="name" 
        label="ФИО" 
        placeholder="Ваше ФИО"
        onChange={(e) => handleChange(e, 'name')}
      />
      <Input 
        id="email" 
        label="Электронная почта" 
        placeholder="Ваш E-Mail" 
        onChange={(e) => handleChange(e, 'email')}
      />
      <Input 
        id="phone"
        type="tel"
        label="Номер телефона" 
        placeholder="+7 000 000-00-00"
        onChange={(e) => handleChange(e, 'phone')}
      />
      <Input 
        id="address"
        label="Адрес объекта" 
        placeholder="Введите адрес объекта" 
        onChange={(e) => handleChange(e, 'address')}
      />
    </div>
  </div>
  )
}
