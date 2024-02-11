import React, { useState } from 'react'
import style from './Admin.module.scss'
import AdminHeader from '../../widgets/AdminHeader/AdminHeader'
import AdminMain from '../../widgets/AdminMain/AdminMain'
import AdminSidebar from '../../widgets/AdminSidebar/AdminSidebar'

function Admin() {
    const [sidebar, setSidebar] = useState(true)
    
    return (
        <div className={style.admin}>
            <AdminSidebar isHide={sidebar} />
            <div className={style["content-wrapper"]}>
                <AdminHeader onClick={() => setSidebar(!sidebar)} />
                <AdminMain />
            </div>         
        </div>
    )
}

export default Admin