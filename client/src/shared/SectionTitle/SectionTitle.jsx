import React from 'react'
import style from './SectionTitle.module.scss'

export function SectionTitle(props) {
    return (
        <h2 className={style['section-title']}>{props.data || 'Section title'}</h2>
    )
}

export default SectionTitle