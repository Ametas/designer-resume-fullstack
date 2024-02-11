import React from 'react'
import style from './Toolbar.module.scss'
import ThemeSwitcher from './../../shared/ThemeSwitcher/ThemeSwitcher';
import { useTheme } from '../../app/ThemeContext';

function Toolbar() {
    const {theme, toggleTheme} = useTheme()

    return (
        <div className={style.toolbar}>
            <ThemeSwitcher 
                theme={theme}
                onClick={toggleTheme}
            />
        </div>
    )
}

export default Toolbar