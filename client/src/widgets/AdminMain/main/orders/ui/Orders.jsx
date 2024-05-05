import React, { useState, useEffect } from 'react'
import style from './style.module.scss'

import axios from 'axios'

import { AdminTitle } from '../../../../../shared/titles/AdminTitle'
import { OrderList } from '../../../../../shared/Order/OrderList'
import { Modal } from '../../../../../shared/modal'
import { OrderCard } from '../../../../../shared/Order/OrderCard'
import { Button } from '@shared/Button'
import { FaRegHeart, FaHeart } from "react-icons/fa6";

export const Orders = () => {
    const [modal, setModal] = useState(false)
    const [activeOrder, setActiveOrder] = useState(null)
    const [orderList, setOrderList] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [isFavourite, setIsFavourite] = useState(false)
    const [orderStatus, setOrderStatus] = useState(orderList[activeOrder]?.status || '')

    useEffect(() => {
      setIsLoading(true)

      fetch('/api/getOrders')
        .then(res => res.json())
        .then(res => {
          setOrderList(res)
          setIsLoading(false)
        })
        .catch(error => {
          console.log(error)
          setIsLoading(false)
        })
    }, [])

    useEffect(() => {
      if (activeOrder !== null) {
        setIsFavourite(orderList[activeOrder].isFavourite || false)
        setOrderStatus(orderList[activeOrder].status || '')
      }
    }, [activeOrder, orderList])


    const handleOrderClick = (id) => {
        const orderIndex = orderList.findIndex(order => order._id === id)
        console.log('Индекс: ', orderIndex)
        setActiveOrder(orderIndex)
        setModal(true)
    }

    const handleModalClose = () => { setModal(false) }

    const toggleFavourite = async () => {
      try {
        await axios.patch(`/api/orders/${orderList[activeOrder]._id}`, { isFavourite: !isFavourite })
        setIsFavourite(!isFavourite)
      } catch (error) {
        console.error('Error in toggleFavourite:', error);
      }
    }

    const updateOrderStatus = async (newStatus) => {
      try {
        await axios.patch(`/api/orderStatus/${orderList[activeOrder]._id}`, { status: newStatus })
        setOrderStatus(newStatus)
      } catch (error) {
        console.error('Error in updateOrderStatus:', error);
      }
    }

    return (
      <div className={style.orders}>
        <AdminTitle>Заказы</AdminTitle>
        <OrderList 
          onClick={handleOrderClick} 
          data={orderList} 
          orderStatus={orderStatus}
        />
        {modal && (
        <Modal
          key={activeOrder}
          onClose={handleModalClose}
          title={'Заказ #' + activeOrder}
          open={modal}
          additionalActions={[
            <Button
              variable="tertiary"
              onClick={() => updateOrderStatus('completed')}
              status='completed'
            >
              Завершен
            </Button>,
            <Button
              variable="tertiary"
              onClick={() => updateOrderStatus('in-progress')}
              status='in-progress'
            >
              В процессе
            </Button>,
            <Button
              variable="tertiary"
              onClick={() => updateOrderStatus('on-holding')}
              status='on-holding'
            >
              В ожидании
            </Button>,
            <Button
              variable="tertiary"
              onClick={() => updateOrderStatus('rejected')}
              status='rejected'
            >
              Отклонен
            </Button>,
            <Button
              variable={'tertiary'}
              onClick={toggleFavourite}
              size={'square'}
            >
              {isFavourite ? <FaHeart /> : <FaRegHeart />}
            </Button>,
          ]}
          >
            {isLoading ? (
              <div>Загрузка...</div>
            ) : (
              <OrderCard 
                key={activeOrder} 
                data={orderList[activeOrder]} 
                orderStatus={orderStatus}
              />
            )}
          </Modal>
        )}
      </div>
    )
}
