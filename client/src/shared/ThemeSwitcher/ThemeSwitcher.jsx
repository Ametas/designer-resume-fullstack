import React from 'react'
import style from './ThemeSwitcher.module.scss'

import { IoIosSunny, IoIosMoon } from "react-icons/io";

function ThemeSwitcher(props) {
    return (
        <div 
            className={`
                ${style['theme-switcher']}
                ${theme === 'dark' ? style['dark'] : ''}
            `}
            onClick={props.onClick}
        >
            {<i className={`${style['theme-icon']}`}>
                {theme === 'light' ? <IoIosMoon /> : <IoIosSunny />}
            </i>}
        </div>
    )
}

export default ThemeSwitcher