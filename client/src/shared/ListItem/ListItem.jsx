import React from 'react'
import style from './ListItem.module.scss'

export function ListItem(props) {
    return (
        <li className={style['list-item']}><a href={props.href}>{props.text}</a></li>
    )
}

export default ListItem