import React from 'react'
import style from './AdminMain.module.scss'

import { Home } from './main/home'
import { Survey } from './main/survey'
import { Orders } from './main/orders';

function AdminMain(props) {
    const tabs = [
        {
            id: 0,
            tab: <Home />,
        },
        {
            id: 1,
            tab: <Survey />,
        },
        {
            id: 2,
            tab: <Orders />,
        },
    ]

    return (
        <div className={style.main}>
            {tabs[props.activeTab].tab}
        </div>
    )
}

export default AdminMain