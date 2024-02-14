import React from 'react'
import style from './style.module.scss'

export const Card = (props) => {
    return (
        <div className={style.card}>
            <div className={style['card-title']}>
                {props.title} {props.icon}
            </div>
            <div className={style['card-content']}>
                {props.children}
            </div>
        </div>
    )
}
