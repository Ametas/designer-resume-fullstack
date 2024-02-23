import React from 'react'
import style from './AdminMain.module.scss'

import { Home } from './main/home'
import { Survey } from './main/survey'
import { Orders } from './main/orders';
import { Favourite } from './main/favourite';
import { HeaderConfig } from './resume/header';
import { AboutConfig } from './resume/about';
import { PortfolioConfig } from './resume/portfolio';
import { ServicesConfig } from './resume/services';
import { TestimonialConfig } from './resume/testimonials';

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
        {
            id: 3,
            tab: <Favourite />,
        },
        {
            id: 4,
            tab: <HeaderConfig />
        },
        {
            id: 5,
            tab: <AboutConfig />
        },
        {
            id: 6,
            tab: <PortfolioConfig />
        },
        {
            id: 7,
            tab: <ServicesConfig />
        },
        {
            id: 8,
            tab: <ServicesConfig />
        },
        {
            id: 9,
            tab: <TestimonialConfig />
        }
    ]

    return (
        <div className={style.main}>
            {tabs[props.activeTab].tab}
        </div>
    )
}

export default AdminMain