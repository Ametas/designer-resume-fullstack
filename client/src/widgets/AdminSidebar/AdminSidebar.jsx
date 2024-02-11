import React from 'react'
import style from './AdminSidebar.module.scss'

import SidebarTabs from '../../features/SidebarTabs/SidebarTabs';

function AdminSidebar() {
    return (
        <div className={style.sidebar}>
            <div className={style.logo}><span>Dash</span>Stack</div>
            <SidebarTabs />
        </div>
    )
}

export default AdminSidebar