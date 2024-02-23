import React from 'react'
import style from './style.module.scss'

export const Paragraph = (props) => {
  return (
    <p className={style.parag}>
      {props.children || 'Paragraph'}
    </p>
  )
}
