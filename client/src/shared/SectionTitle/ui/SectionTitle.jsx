import React from 'react'
import style from './style.module.scss'

export const SectionTitle = (props) => {
  return (
    <h2 className={style['section-title']}>
      {props.children || 'Section title'}
    </h2>
  )
}
