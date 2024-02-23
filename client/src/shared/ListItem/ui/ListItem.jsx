import React from 'react'
import style from './style.module.scss'

export const ListItem = (props) => {
  return (
    <li className={style['list-item']}><a href={props.href}>{props.text}</a></li>
  )
}
