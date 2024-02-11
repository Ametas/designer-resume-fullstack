import React from 'react'
import style from './Admin.module.scss'
import AdminHeader from '../../widgets/AdminHeader/AdminHeader'
import AdminMain from '../../widgets/AdminMain/AdminMain'
import AdminSidebar from '../../widgets/AdminSidebar/AdminSidebar'

function Admin() {
    return (
        <div className={style.admin}>
            <AdminHeader />
            <AdminMain />            
            <AdminSidebar />
        </div>
    )
}

export default Admin