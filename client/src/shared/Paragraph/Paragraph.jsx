import React from 'react'
import style from './Paragraph.module.scss'

export function Paragraph(props) {
    return (
        <p className={style.parag}>{props.text || 'Paragraph'}</p>
    )
}

export default Paragraph