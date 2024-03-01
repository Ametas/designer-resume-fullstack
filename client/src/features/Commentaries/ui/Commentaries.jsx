import React from 'react'
import style from './style.module.scss'

import { FormTitle } from '@shared/FormTitle';
import { TextArea } from '@shared/TextArea';

export const Commentaries = (props) => {
  return (
    <div className={`${style['commentaries']} ${!props.isActive && 'inactive'}`}>
      <FormTitle>Комментарии</FormTitle>
      <TextArea onChange={(e) => props.onUpdate(e.target.value)} placeholder={"Если остались дополнительные требования, которые не были указаны ранее, можете оставить их здесь. Также можете оставить социальные сети для связи. Поле не обязательно к заполнению."} />
    </div>
  )
}
