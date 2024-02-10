import React from 'react'
import style from './BorderImage.module.scss'
import bg from '../../assets/images/photo-bg.png'

export function BorderImage(props) {
    return (
        <div className={style['border-image']}>
            <i className={style.background}>
                <img src={bg} alt="" />
            </i>
            <div className={style["image-border"]}>
                {/* Сюда изображение */}
            </div>
        </div>
    )
}

export default BorderImage