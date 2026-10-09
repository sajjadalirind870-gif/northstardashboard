import { Navigate, Route, Routes } from 'react-router-dom'
import DashboardLayout from './components/layout/DashboardLayout.jsx'
import Overview from './pages/Overview.jsx'
import Analytics from './pages/Analytics.jsx'
import Customers from './pages/Customers.jsx'
import Transactions from './pages/Transactions.jsx'
import Reports from './pages/Reports.jsx'
import Settings from './pages/Settings.jsx'
import Profile from './pages/Profile.jsx'
import NotFound from './pages/NotFound.jsx'

export default function App() {
  return <Routes><Route element={<DashboardLayout />}>
    <Route index element={<Overview />} /><Route path="analytics" element={<Analytics />} />
    <Route path="customers" element={<Customers />} /><Route path="transactions" element={<Transactions />} />
    <Route path="reports" element={<Reports />} /><Route path="settings" element={<Settings />} />
    <Route path="profile" element={<Profile />} /><Route path="404" element={<NotFound />} /><Route path="*" element={<NotFound />} />
  </Route><Route path="/home" element={<Navigate to="/" replace />} /></Routes>
}
