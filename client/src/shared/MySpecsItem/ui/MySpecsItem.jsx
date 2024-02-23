import React from 'react'
import style from './style.module.scss'

export const MySpecsItem = (props) => {
  return (
    <li className={style['specs-item']}>
      <strong>{props.title || 'title'} :</strong>
      {props.values || 'values'}
    </li>
  )
}
