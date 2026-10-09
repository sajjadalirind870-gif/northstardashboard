import { Activity, BarChart3, ChevronDown, CircleHelp, Command, CreditCard, FileText, LayoutDashboard, Settings as SettingsIcon, Users, X } from 'lucide-react'
import { NavLink, useNavigate } from 'react-router-dom'
import { useApp } from '../../context/AppContext.jsx'

const links = [
  { label: 'Overview', path: '/', icon: LayoutDashboard },
  { label: 'Analytics', path: '/analytics', icon: BarChart3 },
  { label: 'Customers', path: '/customers', icon: Users },
  { label: 'Transactions', path: '/transactions', icon: CreditCard },
  { label: 'Reports', path: '/reports', icon: FileText },
]

function SidebarContents({ onClose }) {
  const { settings, notify } = useApp()
  const navigate = useNavigate()

  return (
    <>
      <div className="brand">
        <div className="brand-mark"><Activity size={19} strokeWidth={2.5} /></div>
        <span>northstar</span>
        <button className="icon-button sidebar-close" onClick={onClose} aria-label="Close navigation">
          <X size={18} />
        </button>
      </div>
      <div className="workspace-switch">
        <div className="workspace-avatar">N</div>
        <div className="workspace-copy"><b>Northstar Studio</b><span>Pro plan</span></div>
        <ChevronDown size={15} />
      </div>
      <div className="nav-label">WORKSPACE</div>
      <nav className="side-nav" aria-label="Main navigation">
        {links.map(({ label, path, icon: Icon }) => (
          <NavLink key={path} to={path} end={path === '/'} onClick={onClose} className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
            <Icon size={18} /><span>{label}</span>
            {label === 'Transactions' && <span className="nav-count">8</span>}
          </NavLink>
        ))}
      </nav>
      <div className="sidebar-bottom">
        <div className="nav-label">PREFERENCES</div>
        <NavLink to="/settings" onClick={onClose} className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
          <SettingsIcon size={18} /><span>Settings</span>
        </NavLink>
        <button className="nav-link help-link" onClick={() => notify('Help center is ready to assist you')}>
          <CircleHelp size={18} /><span>Help center</span><span className="external-mark">↗</span>
        </button>
        <div className="sidebar-plan">
          <div className="plan-icon"><Command size={16} /></div>
          <div><b>You're on Pro</b><span>Unlock more of Northstar</span></div>
          <button className="text-arrow" onClick={() => notify('You are already on our Pro plan')}>Upgrade</button>
        </div>
        <button className="sidebar-user" onClick={() => navigate('/profile')}>
          <div className="avatar avatar-small">AM</div>
          <span className="user-meta"><b>{settings.name || 'Alex Morgan'}</b><small>{settings.email || 'alex@northstar.app'}</small></span>
          <ChevronDown size={16} />
        </button>
      </div>
    </>
  )
}

export default function Sidebar({ mobileOpen, onClose }) {
  return (
    <>
      <aside className="w-64 h-screen overflow-y-auto flex-shrink-0 border-r sidebar" aria-label="Sidebar navigation">
        <SidebarContents onClose={onClose} />
      </aside>
      <div className={`sidebar-wrap ${mobileOpen ? 'mobile-visible' : ''}`}>
        <aside className="sidebar sidebar-mobile" aria-label="Mobile sidebar navigation">
          <SidebarContents onClose={onClose} />
        </aside>
      </div>
    </>
  )
}
