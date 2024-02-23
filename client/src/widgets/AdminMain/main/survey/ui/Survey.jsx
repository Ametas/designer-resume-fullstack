import React, { useState } from 'react'
import style from './style.module.scss'
import { AdminTitle } from '@shared/titles/AdminTitle';
import { Input } from '@shared/admin/input';
import { Button } from '@shared/Button';

const fakeItems = [
  {
    id: 1,
    title: 'Классический'
  },
  {
    id: 2,
    title: 'Лофт'
  },
  {
    id: 3,
    title: 'Модерн'
  },
  {
    id: 4,
    title: 'Минимализм'
  }
]

export const Survey = () => {
  const [items, setItems] = useState(fakeItems)
  const [inputValue, setInputValue] = useState('')

  const handleAddItem = () => {
    if (inputValue.trim() === '') {
      return
    }
  
    setItems((prevItems) => [...prevItems, 
      {
        id: prevItems.length + 1,
        title: inputValue
      }
    ])

    setInputValue('')
  }

const handleRemoveItem = (id) => {
  setItems((prevItems) => prevItems.filter((item) => item.id !== id))
}


  return (
    <div className={style.survey}>
    <AdminTitle>Анкета</AdminTitle>
      <div className={style['survey-box']}>
        <ul className={style['survey-list']}>
          <li className={style['survey-item']}>
            Стиль интерьера
          </li>
          <li className={style['survey-item']}>
            Стиль интерьера
          </li>
          <li className={style['survey-item']}>
            Стиль интерьера
          </li>
        </ul>
        <div className={style['survey-content']}>
          <div className={style.addition}>
            <Input 
              placeholder={'Стиль интерьера'} 
              type="text" 
              onChange={(e) => setInputValue(e.target.value)}
              value={inputValue}
            />
            <Button 
              onClick={handleAddItem}
              variable={'tertiary'}
              size={'xs'}
            >
              Добавить
            </Button>
          </div>
          <div className={style['content-container']}>
            {items.map((item) => (
              <span key={item.id} onClick={() => {handleRemoveItem(item.id)}}>{item.title}</span>
            ))}
          </div>
          <div className={style['survey-actions']}>
            <Button
              variable={'tertiary'}
              size={'xs'}
            >
              Сохранить
            </Button>
            <Button
              variable={'tertiary'}
              size={'xs'}
            >
              Сбросить
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
