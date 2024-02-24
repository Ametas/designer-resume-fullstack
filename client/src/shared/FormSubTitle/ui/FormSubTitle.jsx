import React from 'react'
import style from './style.module.scss'

export const FormSubTitle = (props) => {
  return (
    <span className={style.subtitle}>
      {props.children}
    </span>
  )
}
