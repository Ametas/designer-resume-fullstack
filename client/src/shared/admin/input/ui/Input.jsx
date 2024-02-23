import React from 'react'
import style from './style.module.scss'

export const Input = (props) => {
  return (
    <input 
      className={style.input}
      type={props.type}
      placeholder={props.placeholder}
      value={props.value}
      onChange={props.onChange}
    />
  )
}
