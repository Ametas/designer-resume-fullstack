import React from 'react'
import style from './style.module.scss'

export const Tab = (props) => {
  const handleClick = (e) => {
    e.preventDefault()

    if (props.onClick) {
      props.onClick()
    }
  }
  return (
    <a 
      href={props.href || '#'} 
      className={`${style.tab} ${props.isActive && style.active}`}
      onClick={handleClick}
    >
        {props.children || 'Tab'}
    </a>
  )
}
