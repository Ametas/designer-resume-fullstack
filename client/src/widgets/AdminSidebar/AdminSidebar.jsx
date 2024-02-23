import React, { useState } from 'react'
import style from './AdminSidebar.module.scss'

import { FaRegHeart, FaRegFileLines } from "react-icons/fa6";
import { GoChecklist, GoBriefcase, GoGear } from "react-icons/go";
import { IoInformationCircleOutline } from "react-icons/io5";
import { AiOutlineHome, AiOutlinePoweroff } from "react-icons/ai";
import { MdChecklist } from "react-icons/md";
import { FiUserCheck } from "react-icons/fi";
import { IoLogoAmplify } from "react-icons/io5";

import { SidebarItem } from '@shared/SidebarItem';

const sidebarItems = {
    main: [
        {
            id: 0,
            text: 'Главная',
            icon: <AiOutlineHome />
        },
        {
            id: 1,
            text: 'Анкета',
            icon: <GoChecklist />
        },
        {
            id: 2,
            text: 'Заявки',
            icon: <MdChecklist />
        },
        {
            id: 3,
            text: 'Интересно',
            icon: <FaRegHeart />
        }
    ],
    resume: [
        {
            id: 4,
            text: 'Главная',
            icon: <AiOutlineHome />
        },
        {
            id: 5,
            text: 'Обо мне',
            icon: <IoInformationCircleOutline />
        },
        {
            id: 6,
            text: 'Портфолио',
            icon: <GoBriefcase />
        },
        {
            id: 7,
            text: 'Сервисы',
            icon: <GoGear />
        },
        {
            id: 8,
            text: 'Резюме',
            icon: <FaRegFileLines />
        },
        {
            id: 9,
            text: 'Отзывы',
            icon: <FiUserCheck />
        }
    ]
}

function AdminSidebar(props) {
    const [activeItem, setActiveItem] = useState(false)

    const handleActiveItem = (id) => {
        setActiveItem(id)
        props.onActiveTab(id)
    }

    return (
        <div className={`${style.sidebar} ${!props.isHide ? style.hidden : ""}`}>
            <div className={style.logo}>
                <IoLogoAmplify />
            </div>
            <ul className={style['sidebar-links']}>
                {sidebarItems.main.map((item) => (
                    <SidebarItem 
                        key={item.id} 
                        {...item} 
                        isHide={props.isHide} 
                        isActive={activeItem === item.id}
                        onClick={() => handleActiveItem(item.id)}
                    />
                ))}
            </ul>
            <ul className={style['sidebar-links']}>
                <h2 className={style.title}>Resume</h2>
                {sidebarItems.resume.map((item) => (
                    <SidebarItem 
                        key={item.id} 
                        {...item} 
                        isHide={props.isHide} 
                        isActive={activeItem === item.id}
                        onClick={() => handleActiveItem(item.id)}
                    />
                ))}
            </ul>
            <ul className={`${style['sidebar-links']}`}>
                <SidebarItem 
                    icon={<AiOutlinePoweroff />} 
                    text='Выход'
                    isHide={props.isHide}
                />
            </ul>
        </div>
    )
}

export default AdminSidebar