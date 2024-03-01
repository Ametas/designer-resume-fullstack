import React, { useState } from 'react'
import style from './style.module.scss'

import { FormTitle } from '@shared/FormTitle'
import { FormSubTitle } from '@shared/FormSubTitle';
import Input from '@entities/Input/Input';

export const ObjectDetails = (props) => {
  const [values, setValues] = useState({})
  const handleChange = (e, field) => {
    setValues({ ...values, [field]: e.target.value })
    props.onUpdate(values)
  }

  return (
    <div className={`${style['object-details']} ${!props.isActive && 'inactive'}`}>
      <FormTitle>Характеристики объекта</FormTitle>
      <FormSubTitle>Введите основную информацию об объекте.</FormSubTitle>
      <div className="input-box">
        <Input 
          id="object-square" 
          label="Площадь помещения" 
          placeholder="25 м.кв." 
          onChange={(e) => handleChange(e, 'objectSquare')}
        />
        <Input 
          id="rooms-count" 
          label="Количество комнат" 
          placeholder="4" 
          onChange={(e) => handleChange(e, 'roomsCount')}
        />
        <Input 
          id="light-preferences" 
          label="Предпочтения относительно освещения" 
          placeholder="Искусственный/Естественный свет" 
          onChange={(e) => handleChange(e, 'lightPreferences')}
        />
      </div>
    </div>
  )
}
