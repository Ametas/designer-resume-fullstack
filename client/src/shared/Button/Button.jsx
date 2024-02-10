import React from 'react'
import style from './Button.module.scss'

export function Button(props) {
    return (
        <button className={style.button + ' ' + style[props.variable]}>{props.text || 'Button'}</button>
    )
}

export default Button