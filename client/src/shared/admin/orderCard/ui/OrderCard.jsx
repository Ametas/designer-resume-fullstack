import React from 'react'
import style from './style.module.scss'
import { Button } from './../../../Button/Button';

export const OrderCard = (props) => {
    const { id, name, phone, address, square, rooms, placementType, comments, specialRequests, interiorStyle, functionalRequests } = props.data
    return (
        <div className={style.card}>
            <div className={style["card-header"]}>
                <span className={style.item}>
                    {id} <i>id</i>
                </span>
                <span className={style.item}>
                    {name} <i>ФИО</i>
                </span>
            </div>
            <div className={style["card-content"]}>
                <div className={style.contacts}>
                    <span className={style.item}>
                        {phone} <i>Номер телефона</i>
                    </span>
                    <span className={style.item}>
                        {address} <i>Адрес</i>
                    </span>
                </div>
                <div className={style.chars}>
                    <span className={style.item}>
                        {square} <i>Площадь</i>
                    </span>
                    <span className={style.item}>
                        {rooms} <i>Комнат</i>
                    </span>
                </div>
                <div className={style['placement-type']}>
                    <span className={style.item}>
                        {placementType} <i>Тип помещения</i>
                    </span>
                </div>
                <div className={style.functional}>
                    <span className={style.item}>
                        {specialRequests} <i>Особые требования</i>
                    </span>
                </div>
                <div className={style.preferences}>
                    <span className={style.item}>
                        {interiorStyle} <i>Стиль интерьера</i>
                    </span>
                    <span className={style.item}>
                        {functionalRequests} <i>Функциональные требования</i>
                    </span>
                </div>
                <div className={style.comments}>
                    <span className={style.item}>
                        {comments} <i>Комментарии</i>
                    </span>
                </div>
            </div>
            <Button text="Подробнее" variable="tertiary" onClick={() => console.log(id)} />
        </div>
    )
}
