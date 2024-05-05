import React, { useState } from 'react'
import style from './style.module.scss'
import { Button } from '../../../../Button/ui/Button';
import { Input } from './../../../input';

export const ConfigItem = (props) => {
  const [value, setValue] = useState(props.initialValue)

  const handleChange = (e) => {
    const newValue = e.target.value
    setValue(newValue)
    props.onChange(newValue)
  }

  return (
    <div className={style.item}>
      <div className={style.field}>
        <Input
          value={value}
          onChange={handleChange}
          placeholder={props.placeholder}
        />
      </div>
      <div className={style.preview}>
        <props.component variable={props.btnVariable}>
          {value}
        </props.component>
      </div>
      <Button 
        variable={'tertiary'} 
        size={'xs'}
        onClick={() => console.log([value, props.keys.key, props.keys.section])}
      >
        Сохранить
      </Button>
    </div>
  )
}
