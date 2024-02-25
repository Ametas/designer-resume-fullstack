import React, { useState } from 'react'
import style from './style.module.scss'

import Input from '@entities/Input/Input';
import { FormTitle } from '@shared/FormTitle';
import { FormSubTitle}  from '@shared/FormSubTitle';

export const PersonalData = (props) => {
  const [values, setValues] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
  })

  return (
  <div className={`${style['personal-data']} ${!props.isActive && 'inactive'}`}>
    <FormTitle>Контактная информация</FormTitle>
    <FormSubTitle>Заполните информацию о себе, чтобы мы могли связаться с Вами.</FormSubTitle>
    <div className={style['input-box']}>
      <Input 
        id="name" 
        label="ФИО" 
        placeholder="Ваше ФИО"
        onChange={(e) => setValues({ ...values, name: e.target.value })}
      />
      <Input 
        id="email" 
        label="Электронная почта" 
        placeholder="Ваш E-Mail" 
        onChange={(e) => setValues({ ...values, email: e.target.value })}
      />
      <Input 
        id="phone"
        type="tel"
        label="Номер телефона" 
        placeholder="+7 000 000-00-00"
        onChange={(e) => setValues({ ...values, phone: e.target.value })}
      />
      <Input 
        id="address"
        label="Адрес объекта" 
        placeholder="Введите адрес объекта" 
        onChange={(e) => setValues({ ...values, address: e.target.value })}
      />
    </div>
  </div>
  )
}
