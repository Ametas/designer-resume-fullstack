import React from 'react'
import style from './style.module.scss'

export const ChooseCard = (props) => {
  const { id, text, isActive, onClick } = props
  
  return (
    <div id={id} className={`${style['choose-card']} ${isActive && style.active}`} onClick={onClick}>
      <span className={style["card-text"]}>{text}</span>
    </div>
  )
}
