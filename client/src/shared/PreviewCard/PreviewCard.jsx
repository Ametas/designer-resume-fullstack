import React from 'react'
import style from './PreviewCard.module.scss'

function PreviewCard(props) {
    return (
        <li className={style['preview-item']}>
            <img src={props.img} alt="Portfolio Image" />
        </li>
    )
}

export default PreviewCard