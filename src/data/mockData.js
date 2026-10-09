export const initialCustomers = [
  { id: 'CUS-1048', name: 'Olivia Rhye', email: 'olivia@acme.co', company: 'Acme Inc.', plan: 'Pro', status: 'Active', spent: 12480, joined: '2025-06-18' },
  { id: 'CUS-1047', name: 'Phoenix Baker', email: 'phoenix@linear.co', company: 'Linear', plan: 'Enterprise', status: 'Active', spent: 8420, joined: '2025-06-16' },
  { id: 'CUS-1046', name: 'Lana Steiner', email: 'lana@catalog.com', company: 'Catalog', plan: 'Starter', status: 'Pending', spent: 1240, joined: '2025-06-14' },
  { id: 'CUS-1045', name: 'Demi Wilkinson', email: 'demi@tech.com', company: 'Techly', plan: 'Pro', status: 'Active', spent: 5960, joined: '2025-06-12' },
  { id: 'CUS-1044', name: 'Candice Wu', email: 'candice@sv.com', company: 'Sisyphus', plan: 'Enterprise', status: 'Active', spent: 14800, joined: '2025-06-10' },
  { id: 'CUS-1043', name: 'Natali Craig', email: 'natali@company.io', company: 'Company.io', plan: 'Starter', status: 'Churned', spent: 890, joined: '2025-06-08' },
  { id: 'CUS-1042', name: 'Drew Cano', email: 'drew@spotify.com', company: 'Spotify', plan: 'Pro', status: 'Active', spent: 3200, joined: '2025-06-04' },
  { id: 'CUS-1041', name: 'Orlando Diggs', email: 'orlando@figma.com', company: 'Figma', plan: 'Pro', status: 'Pending', spent: 1680, joined: '2025-06-01' },
  { id: 'CUS-1040', name: 'Andi Lane', email: 'andi@webflow.com', company: 'Webflow', plan: 'Enterprise', status: 'Active', spent: 19100, joined: '2025-05-29' },
  { id: 'CUS-1039', name: 'Kate Morrison', email: 'kate@notion.so', company: 'Notion', plan: 'Starter', status: 'Active', spent: 540, joined: '2025-05-25' },
  { id: 'CUS-1038', name: 'Jasmine Patel', email: 'jasmine@loom.com', company: 'Loom', plan: 'Pro', status: 'Churned', spent: 4720, joined: '2025-05-22' },
  { id: 'CUS-1037', name: 'Diana Mills', email: 'diana@slack.com', company: 'Slack', plan: 'Enterprise', status: 'Active', spent: 11300, joined: '2025-05-19' },
]
export const initialTransactions = [
  { id: 'TRX-90210', customer: 'Olivia Rhye', email: 'olivia@acme.co', date: '2025-06-18', amount: 2400, status: 'Successful', method: 'Visa ···· 4242' },
  { id: 'TRX-90209', customer: 'Phoenix Baker', email: 'phoenix@linear.co', date: '2025-06-17', amount: 1290, status: 'Successful', method: 'Mastercard ···· 8821' },
  { id: 'TRX-90208', customer: 'Lana Steiner', email: 'lana@catalog.com', date: '2025-06-16', amount: 480, status: 'Pending', method: 'Visa ···· 1048' },
  { id: 'TRX-90207', customer: 'Demi Wilkinson', email: 'demi@tech.com', date: '2025-06-15', amount: 840, status: 'Successful', method: 'Amex ···· 2001' },
  { id: 'TRX-90206', customer: 'Candice Wu', email: 'candice@sv.com', date: '2025-06-14', amount: 3500, status: 'Refunded', method: 'Visa ···· 6732' },
  { id: 'TRX-90205', customer: 'Natali Craig', email: 'natali@company.io', date: '2025-06-13', amount: 160, status: 'Failed', method: 'Mastercard ···· 0194' },
  { id: 'TRX-90204', customer: 'Drew Cano', email: 'drew@spotify.com', date: '2025-06-12', amount: 920, status: 'Successful', method: 'Visa ···· 4242' },
  { id: 'TRX-90203', customer: 'Orlando Diggs', email: 'orlando@figma.com', date: '2025-06-11', amount: 320, status: 'Pending', method: 'Amex ···· 2001' },
  { id: 'TRX-90202', customer: 'Andi Lane', email: 'andi@webflow.com', date: '2025-06-10', amount: 1800, status: 'Successful', method: 'Visa ···· 1048' },
  { id: 'TRX-90201', customer: 'Kate Morrison', email: 'kate@notion.so', date: '2025-06-09', amount: 240, status: 'Successful', method: 'Mastercard ···· 8821' },
]
export const revenueData = [
  { month: 'Jan', revenue: 18400, previous: 14200, sales: 340 }, { month: 'Feb', revenue: 22100, previous: 16100, sales: 390 },
  { month: 'Mar', revenue: 19700, previous: 17800, sales: 360 }, { month: 'Apr', revenue: 28600, previous: 19500, sales: 470 },
  { month: 'May', revenue: 25400, previous: 21300, sales: 430 }, { month: 'Jun', revenue: 34200, previous: 24100, sales: 560 },
  { month: 'Jul', revenue: 31900, previous: 26000, sales: 520 }, { month: 'Aug', revenue: 38900, previous: 28700, sales: 630 },
  { month: 'Sep', revenue: 36100, previous: 30400, sales: 590 }, { month: 'Oct', revenue: 43800, previous: 32900, sales: 710 },
  { month: 'Nov', revenue: 41200, previous: 35100, sales: 680 }, { month: 'Dec', revenue: 48600, previous: 38200, sales: 790 },
]
