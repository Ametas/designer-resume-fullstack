import React from 'react'
import style from './MySpecsItem.module.scss'

export function MySpecsItem(props) {
    return (
        <li className={style['specs-item']}>
            <strong>{props.title || 'title'} :</strong>
            {props.values || 'values'}
        </li>
    )
}

export default MySpecsItem