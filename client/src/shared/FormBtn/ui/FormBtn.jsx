import React from 'react'
import style from './style.module.scss'

export const FormBtn = (props) => {
  const { btnText, onClick, isHide } = props
  return (
    <button type={props.type} onClick={onClick} className={`${style['form-btn']} ${isHide && style.hide}`}>
      {btnText || 'Button'}
    </button>
  )
}
