import React from 'react'
import style from './style.module.scss'

import FormTitle from '@shared/FormTitle/FormTitle';
import { TextArea } from '@shared/TextArea';

export const SpecialRequest = (props) => {
  return (
    <div className={`${style['special-request']} ${!props.isActive && 'inactive'}`}>
      <FormTitle title="Особые запросы"/>
      <TextArea placeholder={"Поле не обязательно к заполнению."}/>
    </div>
  )
}
