import React from 'react'
import style from './SupTitle.module.scss'

export function SupTitle(props) {
    return (
        <h3 className={style['sup-title']}>
            {props.children || 'SupTitle'}
        </h3>
    )
}

export default SupTitle