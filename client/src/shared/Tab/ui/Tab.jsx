import React from 'react'
import style from './style.module.scss'

export const Tab = (props) => {
  return (
    <a 
      href={props.href || '#'} 
      className={`${style.tab} ${props.isActive && style.active}`}>
        {props.children || 'Tab'}
    </a>
  )
}
