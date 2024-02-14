import React from 'react'
import style from './style.module.scss'
import { AdminTitle } from '../../../../../shared/titles/AdminTitle'
import { OrderCard } from '../../../../../shared/admin/orderCard'

const orderList = [
    {
        id: 1,
        name: 'Иванов Иван Иваночик',
        phone: '79000000000',
        email: 'Email@eee.ru',
        address: 'Улица дададададаад',
        date: '24.02.1222',
        price: 2000,
        rooms: 4,
        square: 42,
        placementType: 'Дом',
        specialRequests: 'Для детей',
        interiorStyle: 'Классический',
        functionalRequests: 'Игровая комната',
        comments: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga atque quaerat sequi blanditiis debitis, doloremque nam, accusamus, esse voluptate odit aliquam natus dolorum. Cumque, vel ab. Possimus sed numquam dolorum?
        Placeat odit alias voluptates modi cupiditate pariatur harum autem, officiis cum earum architecto libero similique ullam incidunt recusandae debitis ad. Totam, quis ex. Provident adipisci quam facilis hic obcaecati et?`
    }
]

export const Orders = () => {
    return (
        <div className={style.orders}>
            <AdminTitle>Заказы</AdminTitle>
            <div className={style["order-cards"]}>
                <OrderCard data={orderList[0]} />
                <OrderCard data={orderList[0]} />
                <OrderCard data={orderList[0]} />
                <OrderCard data={orderList[0]} />
            </div>
        </div>
    )
}
