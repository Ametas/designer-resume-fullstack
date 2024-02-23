import React from 'react'
import style from './style.module.scss'

export const TextArea = (props) => {
  return (
    <textarea 
      className={style.textarea}
      placeholder={props.placeholder}
    >
    </textarea>
  )
}
