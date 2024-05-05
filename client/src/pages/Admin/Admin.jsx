import React, { useState } from 'react'
import style from './Admin.module.scss'

import { AdminHeader } from '@widgets/AdminHeader'
import AdminMain from '@widgets/AdminMain/AdminMain'
import AdminSidebar from '@widgets/AdminSidebar/AdminSidebar'

function Admin() {
  const [activeTab, setActiveTab] = useState(0)

  const handleActiveTab = (id) => {
      setActiveTab(id)
  }
  
  return (
    <div className={style.admin}>
      <AdminSidebar onActiveTab={handleActiveTab} />
      <div className={style["content-wrapper"]}>
        <AdminHeader onClick={() => setSidebar(!sidebar)} />
        <AdminMain activeTab={activeTab} />
      </div>
    </div>
  )
}

export default Admin