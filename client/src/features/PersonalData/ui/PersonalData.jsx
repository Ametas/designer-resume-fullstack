import React from 'react'
import style from './style.module.scss'

import Input from '@entities/Input/Input';
import FormTitle from '@shared/FormTitle/FormTitle';
import FormSubTitle from '@shared/FormSubTitle/FormSubTitle';

export const PersonalData = (props) => {
  return (
  <div className={`${style['personal-data']} ${!props.isActive && 'inactive'}`}>
    <FormTitle title="Контактная информация"/>
    <FormSubTitle text="Заполните информацию о себе, чтобы мы могли связаться с Вами."/>
    <div className={style['input-box']}>
      <Input 
        id="name" 
        label="ФИО" 
        placeholder="Ваше ФИО" 
      />
      <Input 
        id="email" 
        label="Электронная почта" 
        placeholder="Ваш E-Mail" 
      />
      <Input 
        id="phone"
        type="tel"
        label="Номер телефона" 
        placeholder="+7 000 000-00-00" 
      />
      <Input 
        id="address"
        label="Адрес объекта" 
        placeholder="Введите адрес объекта" 
      />
    </div>
  </div>
  )
}