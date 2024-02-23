import React from 'react'
import style from './style.module.scss'
import { AdminTitle } from './../../../../../shared/titles/AdminTitle';
import { Card } from '../../../../../shared/admin/card';

import { FiUsers } from "react-icons/fi";
import { LineChart } from './../../../../../features/charts/LineChart';

export const Home = () => {
    return (
        <div className={style.home}>
            <AdminTitle>Главная</AdminTitle>
            <div className={style["cards-box"]}>
                <Card title={'Всего заказов'} icon={<FiUsers />}>40,000</Card>
                <Card title={'Всего заказов'} icon={<FiUsers />}>40,000</Card>
                <Card title={'Всего заказов'} icon={<FiUsers />}>40,000</Card>
                <Card title={'Всего заказов'} icon={<FiUsers />}>40,000</Card>
            </div>
            <div className={style['charts-box']}>
                <div className={style["chart-item"]}>
                    <LineChart />
                </div>
                <div className={style["chart-item"]}>
                    <LineChart />
                </div>
            </div>
        </div>
    )
}
