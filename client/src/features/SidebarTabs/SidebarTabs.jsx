import React from 'react'
import style from './SidebarTabs.module.scss'
import { FaRegHeart, FaChevronRight, FaRegFileLines } from "react-icons/fa6";
import { GoChecklist, GoBriefcase, GoGear } from "react-icons/go";
import { IoInformationCircleOutline } from "react-icons/io5";
import { AiOutlineHome, AiOutlinePoweroff } from "react-icons/ai";
import { MdChecklist } from "react-icons/md";
import { FiUserCheck } from "react-icons/fi";
import SidebarItem from '../../shared/SidebarItem/SidebarItem';

function SidebarTabs() {
    return (
        <>
        <ul className={style['sidebar-links']}>
            <SidebarItem 
                icon={<AiOutlineHome />} 
                text='Главная'
            />
            <SidebarItem 
                icon={<GoChecklist />} 
                text='Анкета'
            />
            <SidebarItem 
                icon={<MdChecklist />} 
                text='Заявки'
            />
            <SidebarItem 
                icon={<FaRegHeart />} 
                text='Интересно'
            />
        </ul>
        <ul className={style['sidebar-links']}>
            <h2 className={style.title}>Resume</h2>
            <SidebarItem 
                icon={<AiOutlineHome />} 
                text='Главная'
            />
            <SidebarItem 
                icon={<IoInformationCircleOutline />} 
                text='Обо мне'
            />
            <SidebarItem 
                icon={<GoBriefcase />} 
                text='Портфолио'
            />
            <SidebarItem 
                icon={<GoGear />} 
                text='Сервисы'
            />
            <SidebarItem 
                icon={<FaRegFileLines />} 
                text='Резюме'
            />
            <SidebarItem 
                icon={<FiUserCheck />} 
                text='Отзывы'
            />
        </ul>
        <ul className={`${style['sidebar-links']} ${style.actions}`}>
            <SidebarItem 
                icon={<AiOutlinePoweroff />} 
                text='Выход'
            />
        </ul>
        </>
    )
}

export default SidebarTabs