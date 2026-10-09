import { useMemo, useState } from 'react'
import { Activity, Download, MousePointerClick, Users, Wallet } from 'lucide-react'
import { PageHeader, Panel, StatCard, Button } from '../components/ui/index.jsx'
import DateFilter from '../components/ui/DateFilter.jsx'
import { RevenueChart, SalesChart, SourcesChart } from '../components/charts/Charts.jsx'
import { downloadCsv } from '../utils/helpers.js'
import { revenueData } from '../data/mockData.js'
import { useApp } from '../context/AppContext.jsx'

const sources = [{ name: 'Direct', value: 42 }, { name: 'Social', value: 28 }, { name: 'Referral', value: 18 }, { name: 'Organic', value: 12 }]
const funnel = [{ label: 'Website visitors', value: 24800, width: 100, rate: '100%' }, { label: 'Product views', value: 16240, width: 78, rate: '65.5%' }, { label: 'Added to cart', value: 8460, width: 57, rate: '34.1%' }, { label: 'Completed purchase', value: 3214, width: 38, rate: '13.0%' }]
export default function Analytics() {
  const [range, setRange] = useState('12'), { notify } = useApp(), data = useMemo(() => revenueData.slice(-Number(range)), [range])
  const exportCsv = () => { downloadCsv('northstar-analytics.csv', data.map(row => ({ month: row.month, revenue: row.revenue, previous_period: row.previous, orders: row.sales }))); notify('Analytics export downloaded') }
  return <><PageHeader eyebrow="PERFORMANCE" title="Analytics" description="Understand how your business is performing over time."><DateFilter value={range} onChange={setRange} /><Button variant="secondary" onClick={exportCsv}><Download size={16} /> Export data</Button></PageHeader>
    <div className="stat-grid"><StatCard label="Total revenue" value="$48,294" change="12.8%" icon={Wallet} /><StatCard label="Active users" value="24,892" change="18.2%" icon={Users} tone="blue" /><StatCard label="Conversion rate" value="3.24%" change="1.4%" icon={MousePointerClick} tone="green" /><StatCard label="Avg. session" value="2m 48s" change="6.5%" icon={Activity} tone="orange" /></div>
    <div className="analytics-grid"><Panel title="Revenue performance" subtitle="Current period compared with previous period" className="analytics-revenue"><RevenueChart data={data} compare /></Panel><Panel title="Traffic sources" subtitle="Visitors by acquisition channel"><SourcesChart data={sources} /></Panel><Panel title="Conversion funnel" subtitle="Visitor journey through your store" className="funnel-panel"><div className="funnel-list">{funnel.map((item, index) => <div className="funnel-row" key={item.label}><div className="funnel-top"><span><i>{index + 1}</i>{item.label}</span><b>{item.value.toLocaleString()}</b></div><div className="funnel-track"><div style={{ width: `${item.width}%` }} /></div><small>{item.rate} of visitors</small></div>)}</div></Panel><Panel title="Orders by month" subtitle="Order volume in the selected period"><SalesChart data={data} height={245} /></Panel></div>
  </>
}
