import React from 'react'
import style from './style.module.scss'

import { ListItem } from '@shared/ListItem'

export const List = (props) => {
  return (
    <ul className={style.list}>
      {props.data.map((item, i) => (
        <ListItem key={i} href={item.href} text={item.text} />
      ))}
    </ul>
  )
}
