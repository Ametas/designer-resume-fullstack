import React from 'react'
import style from './style.module.scss'

export const PreviewCard = (props) => {
  return (
    <li className={style['preview-item']}>
      <img src={props.img} alt="Portfolio Image" />
    </li>
  )
}
