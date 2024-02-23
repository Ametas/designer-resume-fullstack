import React, { useState } from 'react'
import style from './style.module.scss'
import { Button } from './../../../../Button/Button';
import { Input } from './../../../input';

export const ConfigItem = (props) => {
  const [value, setValue] = useState('')

  return (
    <div className={`${style.item} ${props.dark ? style.dark : ""}`}>
      <div className={style.field}>
        <Input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder={props.placeholder}
        />
      </div>
      <div className={style.preview}>
        <props.component variable={props.btnVariable}>
          {value}
        </props.component>
      </div>
      <Button variable={'tertiary'} size={'xs'}>Сохранить</Button>
    </div>
  )
}
