import React, { useState } from 'react'
import style from './style.module.scss'
import { AdminTitle } from '../../../../../shared/titles/AdminTitle'
import { Modal } from './../../../../../shared/modal';
import Button from '../../../../../shared/Button/Button';
import { FaRegHeart } from "react-icons/fa6";
import { OrderList } from '../../../../../shared/Order/OrderList';
import { OrderCard } from '../../../../../shared/Order/OrderCard';

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
        status: 'in-progress',
        comments: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga atque quaerat sequi blanditiis debitis, doloremque nam, accusamus, esse voluptate odit aliquam natus dolorum. Cumque, vel ab. Possimus sed numquam dolorum?
        Placeat odit alias voluptates modi cupiditate pariatur harum autem, officiis cum earum architecto libero similique ullam incidunt recusandae debitis ad. Totam, quis ex. Provident adipisci quam facilis hic obcaecati et?`
    },
    {
        id: 2,
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
        status: 'completed',
        comments: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga atque quaerat sequi blanditiis debitis, doloremque nam, accusamus, esse voluptate odit aliquam natus dolorum. Cumque, vel ab. Possimus sed numquam dolorum?
        Placeat odit alias voluptates modi cupiditate pariatur harum autem, officiis cum earum architecto libero similique ullam incidunt recusandae debitis ad. Totam, quis ex. Provident adipisci quam facilis hic obcaecati et?`
    },
    {
        id: 3,
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
        status: 'on-holding',
        comments: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga atque quaerat sequi blanditiis debitis, doloremque nam, accusamus, esse voluptate odit aliquam natus dolorum. Cumque, vel ab. Possimus sed numquam dolorum?
        Placeat odit alias voluptates modi cupiditate pariatur harum autem, officiis cum earum architecto libero similique ullam incidunt recusandae debitis ad. Totam, quis ex. Provident adipisci quam facilis hic obcaecati et?`
    },
    {
        id: 4,
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
        status: 'rejected',
        comments: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga atque quaerat sequi blanditiis debitis, doloremque nam, accusamus, esse voluptate odit aliquam natus dolorum. Cumque, vel ab. Possimus sed numquam dolorum?
        Placeat odit alias voluptates modi cupiditate pariatur harum autem, officiis cum earum architecto libero similique ullam incidunt recusandae debitis ad. Totam, quis ex. Provident adipisci quam facilis hic obcaecati et?`
    },
]

export const Favourite = () => {
    const [modal, setModal] = useState(false)
    const [activeOrder, setActiveOrder] = useState(null)

    const handleOrderClick = (id) => {
        console.log(id)
        setActiveOrder(id)
        setModal(true)
    }

    const handleModalClose = () => { setModal(false) }

    return (
        <div className={style.favourite}>
            <AdminTitle>Интересно</AdminTitle>
            <OrderList onClick={handleOrderClick} data={orderList} />
            <Modal 
            onClose={handleModalClose}
            title={'Заказ #' + activeOrder}
            open={modal}
            additionalActions={
                Button({
                    text: <FaRegHeart />,
                    variable: 'tertiary',
                    onClick: handleModalClose
                })
            }
            >
                <OrderCard data={orderList[activeOrder - 1]} />
            </Modal>
        </div>
    )
}
