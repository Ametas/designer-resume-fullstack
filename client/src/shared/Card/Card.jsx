import React from 'react'
import style from './Card.module.scss'

import { FaArrowRight } from "react-icons/fa";

export function Card(props) {
    return (
        <div className={style.card}>
            <div className={style.icon}>
                <img src={props.img || 'none'} alt="Card Image" />
            </div>
            <h2 className={style["card-title"]}>{props.title || 'title'}</h2>
            <p className={style["card-text"]}>{props.text || 'text'}</p>
            <div className={style["card-action"]}>
                <a href={props.actionHref || 'href'} className={style.action}>
                    <FaArrowRight />
                </a>
                <i className={style["action-text"]}>{props.actionText || 'actionText'}</i>
            </div>
        </div>
    )
}

export default Card