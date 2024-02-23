import React from 'react'
import style from './style.module.scss'

import { AiOutlineHome } from "react-icons/ai";
import { FaChevronRight } from "react-icons/fa6";

export const SidebarItem = (props) => {
  return (
    <li 
      className={`
          ${style[`sidebar-item`]}
          ${props.isActive && style.active}
          ${!props.isHide ? style.hide : ""}
      `}
      onClick={props.onClick}
    >
      {props.icon || <AiOutlineHome />}
      {props.text}
      {<FaChevronRight className={style.chevron} />}
    </li>
  )
}
