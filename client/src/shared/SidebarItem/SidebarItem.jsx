import React from 'react'
import style from './SidebarItem.module.scss'
import { AiOutlineHome } from "react-icons/ai";
import { FaChevronRight } from "react-icons/fa6";
function SidebarItem(props) {
    return (
        <li className={style[`sidebar-item`]}>
            {props.icon || <AiOutlineHome />}
            {props.text || 'Главная'}
            <FaChevronRight className={style.chevron} />
        </li>
    )
}

export default SidebarItem