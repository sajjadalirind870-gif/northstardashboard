import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { initialCustomers, initialTransactions } from '../data/mockData.js'
import { readStore } from '../utils/helpers.js'

const AppContext = createContext(null)
export function AppProvider({ children }) {
  const [customers, setCustomers] = useState(() => readStore('northstar-customers', initialCustomers))
  const [transactions, setTransactions] = useState(() => readStore('northstar-transactions', initialTransactions))
  const [settings, setSettings] = useState(() => readStore('northstar-settings', { theme: 'light', emailAlerts: true, weeklySummary: false, productUpdates: true, name: 'Alex Morgan', email: 'alex@northstar.app', company: 'Northstar Studio' }))
  const [toast, setToast] = useState(null)
  useEffect(() => { localStorage.setItem('northstar-customers', JSON.stringify(customers)) }, [customers])
  useEffect(() => { localStorage.setItem('northstar-transactions', JSON.stringify(transactions)) }, [transactions])
  useEffect(() => { localStorage.setItem('northstar-settings', JSON.stringify(settings)); document.documentElement.dataset.theme = settings.theme }, [settings])
  useEffect(() => { if (!toast) return; const timer = setTimeout(() => setToast(null), 3000); return () => clearTimeout(timer) }, [toast])
  const notify = (message, type = 'success') => setToast({ message, type, id: Date.now() })
  const resetDemo = () => { setCustomers(initialCustomers); setTransactions(initialTransactions); notify('Demo data has been restored') }
  const value = useMemo(() => ({ customers, setCustomers, transactions, setTransactions, settings, setSettings, toast, notify, resetDemo }), [customers, transactions, settings, toast])
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}
export const useApp = () => useContext(AppContext)
