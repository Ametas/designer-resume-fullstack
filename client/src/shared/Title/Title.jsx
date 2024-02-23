import React from 'react'
import style from './Title.module.scss'

export function Title(props) {
    return (
        <h1 className={style.title}>
            {props.children || 'Title'}
        </h1>
    )
}

export default Title