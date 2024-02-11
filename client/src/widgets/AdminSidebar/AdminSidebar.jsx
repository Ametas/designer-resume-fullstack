import React from 'react'
import style from './AdminSidebar.module.scss'

import { FaRegHeart, FaChevronRight, FaRegFileLines } from "react-icons/fa6";
import { GoChecklist, GoBriefcase, GoGear } from "react-icons/go";
import { IoInformationCircleOutline } from "react-icons/io5";
import { AiOutlineHome, AiOutlinePoweroff } from "react-icons/ai";
import { MdChecklist } from "react-icons/md";
import { FiUserCheck } from "react-icons/fi";
import { IoLogoAmplify } from "react-icons/io5";
import SidebarItem from '../../shared/SidebarItem/SidebarItem';

function AdminSidebar(props) {
    return (
        <div className={`${style.sidebar} ${!props.isHide ? style.hidden : ""}`}>
            <div className={style.logo}>
                <IoLogoAmplify />
            </div>
            <ul className={style['sidebar-links']}>
                <SidebarItem 
                    icon={<AiOutlineHome />} 
                    text='Главная'
                    isHide={props.isHide}
                    isActive={true}
                />
                <SidebarItem 
                    icon={<GoChecklist />} 
                    text='Анкета'
                    isHide={props.isHide}
                />
                <SidebarItem 
                    icon={<MdChecklist />} 
                    text='Заявки'
                    isHide={props.isHide}
                />
                <SidebarItem 
                    icon={<FaRegHeart />} 
                    text='Интересно'
                    isHide={props.isHide}
                />
            </ul>
            <ul className={style['sidebar-links']}>
                <h2 className={style.title}>Resume</h2>
                <SidebarItem 
                    icon={<AiOutlineHome />} 
                    text='Главная'
                    isHide={props.isHide}
                />
                <SidebarItem 
                    icon={<IoInformationCircleOutline />} 
                    text='Обо мне'
                    isHide={props.isHide}
                />
                <SidebarItem 
                    icon={<GoBriefcase />} 
                    text='Портфолио'
                    isHide={props.isHide}
                />
                <SidebarItem 
                    icon={<GoGear />} 
                    text='Сервисы'
                    isHide={props.isHide}
                />
                <SidebarItem 
                    icon={<FaRegFileLines />} 
                    text='Резюме'
                    isHide={props.isHide}
                />
                <SidebarItem 
                    icon={<FiUserCheck />} 
                    text='Отзывы'
                    isHide={props.isHide}
                />
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