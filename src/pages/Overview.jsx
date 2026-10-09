import { useMemo, useState } from 'react'
import { ArrowDownRight, ArrowUpRight, ArrowUpRight as OpenIcon, Download, MoreHorizontal, Plus, Users, Wallet, MousePointer2, TrendingUp } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { PageHeader, Panel, StatCard, Button, CustomerAvatar, StatusBadge, Amount, EmptyState } from '../components/ui/index.jsx'
import DateFilter from '../components/ui/DateFilter.jsx'
import { RevenueChart, SalesChart, SourcesChart } from '../components/charts/Charts.jsx'
import { useApp } from '../context/AppContext.jsx'
import { downloadCsv, formatDate } from '../utils/helpers.js'
import { revenueData } from '../data/mockData.js'

const sources = [{ name: 'Direct', value: 42 }, { name: 'Social', value: 28 }, { name: 'Referral', value: 18 }, { name: 'Organic', value: 12 }]
export default function Overview() {
  const [range, setRange] = useState('12'), { transactions, customers, notify } = useApp(), navigate = useNavigate()
  const data = useMemo(() => revenueData.slice(-Number(range)), [range])
  const recent = transactions.slice(0, 5)
  const exportOverview = () => downloadCsv('northstar-overview.csv', data.map(row => ({ month: row.month, revenue: row.revenue, orders: row.sales }))) && notify('Overview report downloaded')
  return <>
    <PageHeader eyebrow="MONDAY, JUNE 23, 2025" title="Good morning, Alex 👋" description="Here's what's happening with your store today."><Button variant="secondary" onClick={exportOverview}><Download size={16} /> Export</Button><Button onClick={() => navigate('/customers')}><Plus size={17} /> Add customer</Button></PageHeader>
    <div className="stat-grid"><StatCard label="Total revenue" value="$48,294" change="12.8%" icon={Wallet} tone="purple" /><StatCard label="Total customers" value={customers.length.toLocaleString()} change="8.2%" icon={Users} tone="blue" /><StatCard label="Conversion rate" value="3.24%" change="1.4%" icon={MousePointer2} tone="green" /><StatCard label="Growth" value="+24.6%" change="4.3%" icon={TrendingUp} tone="orange" /></div>
    <div className="dashboard-grid"><Panel title="Revenue over time" subtitle="Track your revenue performance" className="revenue-panel" action={<DateFilter value={range} onChange={setRange} />}><div className="chart-summary"><div><strong>$48,294</strong><span className="growth-pill"><ArrowUpRight size={13} /> 12.8%</span></div><small>Revenue generated this year</small></div><RevenueChart data={data} /></Panel>
      <Panel title="Traffic sources" subtitle="Where your visitors come from" action={<button className="dots-button" aria-label="Traffic source options" onClick={() => notify('Traffic source breakdown is up to date')}><MoreHorizontal size={19} /></button>}><SourcesChart data={sources} /></Panel>
      <Panel title="Monthly sales" subtitle="Orders processed by month" className="sales-panel" action={<button className="dots-button" aria-label="Sales chart info" onClick={() => notify('Monthly sales for the selected period')}><MoreHorizontal size={19} /></button>}><SalesChart data={data} height={230} /></Panel>
      <Panel title="Recent transactions" subtitle="Your latest customer activity" className="recent-panel" action={<button className="link-button" onClick={() => navigate('/transactions')}>View all <OpenIcon size={14} /></button>}>
        {recent.length ? <div className="recent-list">{recent.map(item => <div className="recent-row" key={item.id}><CustomerAvatar name={item.customer} /><div className="recent-person"><b>{item.customer}</b><small>{formatDate(item.date)}</small></div><div className="recent-amount"><Amount value={item.amount} /><StatusBadge status={item.status} /></div></div>)}</div> : <EmptyState title="No transactions yet" />}
      </Panel>
    </div>
  </>
}
