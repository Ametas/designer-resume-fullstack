import React from 'react'
import style from './style.module.scss'

export const SupTitle = (props) => {
  return <h3 className={style.suptitle}>{props.children || 'SupTitle'}</h3>
}
