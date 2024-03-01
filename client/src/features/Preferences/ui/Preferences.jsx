import React, { useState } from 'react'
import style from './style.module.scss'

import { FormTitle } from '@shared/FormTitle';
import Input from '@entities/Input/Input';

const inputs = [
  {
    id: 'interior-style',
    placeholder: 'Классический',
    label: 'Стиль интерьера',
    autoComplete: ['Классический', 'Лофт', 'Модерн', 'Минимализм']
  },
  {
    id: 'color-scheme',
    placeholder: 'Основной: белый, дополнительный: черный',
    label: 'Цветовая схема',
    autoComplete: ['Черно-белые тона',  'Яркие цвета',  'Преимущественно бежевый']
  },
  {
    id: 'materials-and-texture',
    placeholder: 'Мраморная текстура стен, текстура песчаника на полу',
    label: 'Материал и текстура',
  },
  {
    id: 'functional-requirements',
    placeholder: 'Игровая комната, рабочее пространство',
    label: 'Функциональные требования',
    autoComplete: ['Жилое помещение', 'Офисное помещение', 'Торговое помещение', 'Медицинское учреждение', 'Рестораны и кафе', 'Спортивное помещение', 'Образовательное учреждение', 'Производственное помещение']
  }
]

export const Preferences = (props) => {
  const [values, setValues] = useState({})

  const handleChange = (e, field) => {
    setValues({ ...values, [field]: e.target.value })
    props.onUpdate(values)
  }

  return (
    <div className={`${style['preferences']} ${!props.isActive && 'inactive'}`}>
      <FormTitle>Ваши пожелания и предпочтения</FormTitle>
      <div className={style["input-box"]}>
        {inputs.map((input) => (
          <Input 
            key={input.id}
            id={input.id}
            placeholder={input.placeholder}
            label={input.label}
            autoComplete={input.autoComplete}
            onChange={(e) => handleChange(e, input.id)}
            //TODO FIX ONCHANGE WITH AUTOCOMPLETE
          />
        ))}
      </div>
    </div>
  )
}
