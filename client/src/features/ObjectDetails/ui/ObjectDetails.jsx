import React from 'react'
import style from './style.module.scss'

import FormTitle from '@shared/FormTitle/FormTitle'
import FormSubTitle from '@shared/FormSubTitle/FormSubTitle';
import Input from '@entities/Input/Input';

export const ObjectDetails = (props) => {
  return (
    <div className={`${style['object-details']} ${!props.isActive && 'inactive'}`}>
      <FormTitle title="Характеристики объекта"/>
      <FormSubTitle text="Введите основную информацию об объекте."/>
      <div className="input-box">
        <Input 
          id="object-square" 
          label="Площадь помещения" 
          placeholder="25 м.кв." 
        />
        <Input 
          id="rooms-count" 
          label="Количество комнат" 
          placeholder="4" 
        />
        <Input 
          id="light-preferences" 
          label="Предпочтения относительно освещения" 
          placeholder="Искусственный/Естественный свет" 
        />
      </div>
    </div>
  )
}
