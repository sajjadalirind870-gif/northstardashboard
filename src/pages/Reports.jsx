import { useMemo, useState } from 'react'
import { Download, FileBarChart, Printer, RefreshCw } from 'lucide-react'
import { Button, PageHeader, Panel, StatusBadge } from '../components/ui/index.jsx'
import DateFilter from '../components/ui/DateFilter.jsx'
import { revenueData } from '../data/mockData.js'
import { useApp } from '../context/AppContext.jsx'
import { downloadCsv, money } from '../utils/helpers.js'

export default function Reports() {
  const [range, setRange] = useState('6'), [generatedAt, setGeneratedAt] = useState(new Date()), { transactions, customers, notify } = useApp()
  const data = useMemo(() => revenueData.slice(-Number(range)), [range])
  const reportRows = data.map(row => ({ month: row.month, revenue: row.revenue, orders: row.sales, average_order_value: Math.round(row.revenue / row.sales), returning_customers: Math.round(row.sales * 0.34) }))
  const total = reportRows.reduce((sum, row) => sum + row.revenue, 0)
  const generate = () => { setGeneratedAt(new Date()); notify('Your report has been refreshed') }
  const exportReport = () => { downloadCsv('northstar-performance-report.csv', reportRows); notify('Report exported as CSV') }
  return <div className="reports-page"><PageHeader eyebrow="INSIGHTS" title="Reports" description="Generate and export a snapshot of your business performance."><DateFilter value={range} onChange={setRange}/><Button variant="secondary" onClick={() => window.print()}><Printer size={16}/> Print / Save PDF</Button><Button onClick={exportReport}><Download size={16}/> Export CSV</Button></PageHeader>
    <div className="report-summary-grid"><div><span>Total revenue</span><b>{money(total)}</b><small>Selected period</small></div><div><span>Transactions</span><b>{transactions.length.toLocaleString()}</b><small>All time</small></div><div><span>Customers</span><b>{customers.length.toLocaleString()}</b><small>In your workspace</small></div><div><span>Avg. order value</span><b>{money(total / Math.max(1, reportRows.reduce((n, row) => n + row.orders, 0)))}</b><small>Selected period</small></div></div>
    <Panel title="Performance report" subtitle={`Generated ${generatedAt.toLocaleString('en-US', { dateStyle: 'medium', timeStyle: 'short' })}`} action={<Button variant="secondary" className="button-small" onClick={generate}><RefreshCw size={14}/> Regenerate</Button>}>
      <div className="report-banner"><div className="report-icon"><FileBarChart size={23}/></div><div><b>Business performance</b><span>Revenue and order trends · Last {range} months</span></div><StatusBadge status="Ready"/></div>
      <div className="table-scroll"><table><thead><tr><th>Month</th><th>Revenue</th><th>Orders</th><th>Average order value</th><th>Returning customers</th></tr></thead><tbody>{reportRows.map(row => <tr key={row.month}><td><b>{row.month}</b></td><td className="amount-cell">{money(row.revenue)}</td><td>{row.orders.toLocaleString()}</td><td>{money(row.average_order_value)}</td><td>{row.returning_customers.toLocaleString()}</td></tr>)}</tbody><tfoot><tr><td><b>Total</b></td><td className="amount-cell"><b>{money(total)}</b></td><td><b>{reportRows.reduce((n, row) => n + row.orders, 0).toLocaleString()}</b></td><td>—</td><td>{reportRows.reduce((n, row) => n + row.returning_customers, 0).toLocaleString()}</td></tr></tfoot></table></div>
    </Panel><p className="report-footnote">Reports are generated from the local demo dataset and update automatically when you change the date range.</p></div>
}
