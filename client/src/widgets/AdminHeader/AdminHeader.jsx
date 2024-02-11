import React from 'react'
import style from './AdminHeader.module.scss'

import { MdOutlineMenu } from "react-icons/md";
import { GoSearch } from "react-icons/go";
import { FaChevronLeft } from "react-icons/fa6";
import img from '../../assets/images/admin-image.jpg'

function AdminHeader(props) {
    return (
        <div className={style.header}>
            <div className={style.tools}>
                <div className={style["sidebar-toggle"]} onClick={props.onClick}>
                    <FaChevronLeft className={style.chevron} />
                    <MdOutlineMenu />
                </div>
                <div className={style.search}>
                    <GoSearch />
                    <input type="search" placeholder='Поиск' />
                </div>
            </div>
            <div className={style.user}>
                <div className={style["user-info"]}>
                    <span className={style.name}>Ametas</span>
                    <span className={style.role}>Admin</span>
                </div>
                <img src={img} className={style["user-image"]} />
            </div>
        </div>
    )
}

export default AdminHeader