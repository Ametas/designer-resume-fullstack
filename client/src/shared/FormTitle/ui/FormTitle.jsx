import React from 'react'
import style from './style.module.scss'

export const FormTitle = (props) => {
  return (
    <h4 className={style.title}>
      {props.children}
    </h4>
  )
}
