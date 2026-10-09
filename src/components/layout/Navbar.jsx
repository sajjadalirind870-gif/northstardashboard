import { useMemo, useState } from 'react'
import { Bell, ChevronDown, Menu, Moon, Search, Sun } from 'lucide-react'
import { useLocation, useNavigate } from 'react-router-dom'
import { useApp } from '../../context/AppContext.jsx'

const pageNames = {
  '/': 'Overview',
  '/analytics': 'Analytics',
  '/customers': 'Customers',
  '/transactions': 'Transactions',
  '/reports': 'Reports',
  '/settings': 'Settings',
  '/profile': 'My profile',
}

export default function Navbar({ onMenuClick }) {
  const [notifyOpen, setNotifyOpen] = useState(false)
  const [userOpen, setUserOpen] = useState(false)
  const [query, setQuery] = useState('')
  const { settings, setSettings, notify } = useApp()
  const location = useLocation()
  const navigate = useNavigate()
  const title = useMemo(() => pageNames[location.pathname] ?? 'Page not found', [location.pathname])
  const toggleTheme = () => setSettings(current => ({ ...current, theme: current.theme === 'dark' ? 'light' : 'dark' }))
  const submitSearch = event => {
    event.preventDefault()
    if (query.trim()) {
      navigate(`/customers?search=${encodeURIComponent(query.trim())}`)
      setQuery('')
    }
  }

  return (
    <header className="h-16 flex-shrink-0 border-b topbar">
      <div className="topbar-left">
        <button className="icon-button mobile-menu" onClick={onMenuClick} aria-label="Open navigation"><Menu size={20} /></button>
        <div className="breadcrumb"><span>Workspace</span><span className="crumb-divider">/</span><b>{title}</b></div>
      </div>
      <div className="topbar-actions">
        <form className="search-box" onSubmit={submitSearch}>
          <Search size={16} />
          <input aria-label="Search customers" placeholder="Search anything..." value={query} onChange={event => setQuery(event.target.value)} />
          <kbd>⌘ K</kbd>
        </form>
        <button className="icon-button theme-button" onClick={toggleTheme} aria-label="Toggle dark mode">
          {settings.theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
        </button>
        <div className="dropdown-anchor">
          <button className="icon-button notification-button" onClick={() => { setNotifyOpen(!notifyOpen); setUserOpen(false) }} aria-label="Notifications" aria-expanded={notifyOpen}>
            <Bell size={18} /><i />
          </button>
          {notifyOpen && <div className="floating-menu notification-menu">
            <div className="menu-head"><b>Notifications</b><button onClick={() => { setNotifyOpen(false); notify('You are all caught up') }}>Mark all read</button></div>
            <div className="notification-item"><span className="notification-dot blue" /><div><b>Payment received</b><p>Olivia Rhye paid $2,400.00</p><small>12 minutes ago</small></div></div>
            <div className="notification-item"><span className="notification-dot green" /><div><b>New customer</b><p>Phoenix Baker joined your workspace</p><small>1 hour ago</small></div></div>
          </div>}
        </div>
        <div className="dropdown-anchor profile-anchor">
          <button className="top-profile" onClick={() => { setUserOpen(!userOpen); setNotifyOpen(false) }} aria-label="Open account menu" aria-expanded={userOpen}>
            <div className="avatar">AM</div><ChevronDown size={14} />
          </button>
          {userOpen && <div className="floating-menu user-menu">
            <div className="menu-user"><div className="avatar">AM</div><span><b>{settings.name || 'Alex Morgan'}</b><small>{settings.email || 'alex@northstar.app'}</small></span></div>
            <button onClick={() => { navigate('/profile'); setUserOpen(false) }}>My profile</button>
            <button onClick={() => { navigate('/settings'); setUserOpen(false) }}>Account settings</button>
            <button onClick={() => { toggleTheme(); setUserOpen(false) }}>Toggle appearance</button>
          </div>}
        </div>
      </div>
    </header>
  )
}
