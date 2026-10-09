import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar.jsx'
import Navbar from './Navbar.jsx'
import { Toast } from '../ui/index.jsx'
import './dashboard-layout.css'

export default function DashboardLayout() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <div className="flex h-screen overflow-hidden bg-gray-50 dark:bg-gray-950 app-shell dashboard-layout">
      <Sidebar mobileOpen={mobileOpen} onClose={() => setMobileOpen(false)} />
      <div className="flex-1 flex flex-col h-screen overflow-hidden dashboard-right-column">
        <Navbar onMenuClick={() => setMobileOpen(true)} />
        <main className="flex-1 overflow-y-auto p-6 dashboard-main">
          <div className="page-content">
            <Outlet />
          </div>
        </main>
      </div>
      <Toast />
    </div>
  )
}
