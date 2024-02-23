import React from 'react'
import style from './Button.module.scss'

export function Button(props) {
    return (
        <button 
            className={
                style.button + ' ' 
                + style[props.variable] + ' '
                + style[props.size]
            }
            onClick={props.onClick}
        >
            {props.children || 'Button'}
        </button>
    )
}

export default Button