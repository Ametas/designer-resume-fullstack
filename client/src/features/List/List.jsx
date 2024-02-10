import React from 'react'
import style from './List.module.scss'
import ListItem from '../../shared/ListItem/ListItem'

export function List(props) {
    return (
        <ul className={style.list}>
            {props.data.map((item, i) => (
                <ListItem key={i} href={item.href} text={item.text} />
            ))}
        </ul>
    )
}

export default List