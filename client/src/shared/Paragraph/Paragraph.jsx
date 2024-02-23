import React from 'react'
import style from './Paragraph.module.scss'

export function Paragraph(props) {
    return (
        <p className={style.parag}>
            {props.children || 'Paragraph'}
        </p>
    )
}

export default Paragraph