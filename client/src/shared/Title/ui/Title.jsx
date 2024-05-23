import React from 'react'
import style from './Title.module.scss'

export const Title = (props) => {
  return <h1 className={style.title}>{props.children || 'Title'}</h1>
}
