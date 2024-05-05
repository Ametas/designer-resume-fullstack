import React from 'react'
import style from './style.module.scss'

export const Button = (props) => {
    return (
        <button 
            className={
                style.button + ' ' 
                + style[props.variable] + ' '
                + style[props.size] + ' '
                + style[props.status]
            }
            onClick={props.onClick}
        >
            {props.children || 'Button'}
        </button>
    )
}
