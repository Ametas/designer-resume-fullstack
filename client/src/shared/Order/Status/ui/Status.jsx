import React from 'react'
import style from './style.module.scss'

export const Status = (props) => {
  return (
    <span className={style[props.status]}>
      {
        props.status === 'in-progress' ? 'В процессе' :
        props.status === 'completed' ? 'Завершен' :
        props.status === 'on-holding' ? 'В ожидании' :
        props.status === 'rejected' ? 'Отклонен' : ''
      } 
    </span>
  )
}
