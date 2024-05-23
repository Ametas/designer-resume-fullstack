import React, { useEffect, useState } from 'react'
import style from './style.module.scss'
import { AdminTitle } from './../../../../../shared/titles/AdminTitle';
import { Card } from '../../../../../shared/admin/card';

import { FiUsers } from "react-icons/fi";
import { MdDoneAll, MdRemoveDone } from "react-icons/md";
import { FaRegClock } from "react-icons/fa6";

import { LineChart } from './../../../../../features/charts/LineChart';

export const Home = () => {
  const [stats, setStats] = useState({})
  const [chartStats, setChartStats] = useState({})

  useEffect(() => {
    fetch('api/stats')
      .then(response => response.json())
      .then(response => setStats(response))
      .catch(error => console.log(error))

    fetch('api/chartStats')
      .then(response => response.json())
      .then(response => setChartStats(response))
      .catch(error => console.log(error))
  }, [])

  return (
    <div className={style.home}>
      <AdminTitle>Главная</AdminTitle>
      <div className={style["cards-box"]}>
        <Card title={'Всего заказов'} icon={<FiUsers />}>{stats.count || 0}</Card>
        <Card title={'Завершено'} icon={<MdDoneAll />}>{stats.completed || 0}</Card>
        <Card title={'В ожидании'} icon={<FaRegClock />}>{stats.onHolding || 0}</Card>
        <Card title={'Отклонено'} icon={<MdRemoveDone />}>{stats.rejected || 0}</Card>
      </div>
      <div className={style['charts-box']}>
        <div className={style["chart-item"]}>
          <LineChart 
            label={'Заказы за год'} 
            labels={['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь']}
            data={chartStats?.yearCounts} 
          />
        </div>
        <div className={style["chart-item"]}>
          <LineChart 
            label={'Заказы за месяц'} 
            labels={chartStats.monthCounts?.map((_, index) => index + 1)}
            data={chartStats?.monthCounts} 
          />
        </div>
      </div>
    </div>
  )
}
