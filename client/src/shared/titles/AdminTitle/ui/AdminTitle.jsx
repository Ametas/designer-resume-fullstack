import React from 'react'
import style from './style.module.scss'

export const AdminTitle = (props) => {
    return (
        <h1 className={style.title}>
            {props.children}
        </h1>
    )
}
