import React from 'react'
import style from './style.module.scss'

import { FaArrowRight } from "react-icons/fa";

export const Card = (props) => {
  const IconComponent = props.icon || ''
  return (
    <div className={style.card}>
      <div className={style.icon}>
        {IconComponent && <IconComponent />}
      </div>
      <h2 className={style["card-title"]}>{props.title || 'title'}</h2>
      <p className={style["card-text"]}>{props.text || 'text'}</p>
      <div className={style["card-action"]}>
        <a href={props.actionHref || '#'} className={style.action}>
          <FaArrowRight />
        </a>
        <i className={style["action-text"]}>{props.actionText || 'actionText'}</i>
      </div>
    </div>
  )
}
