export default function Dashboard() {
  const stats = [
    { label: 'Total Users', value: '1,234', change: '+12%' },
    { label: 'Revenue', value: '$45,678', change: '+8%' },
    { label: 'Orders', value: '567', change: '+15%' },
    { label: 'Growth', value: '23.5%', change: '+5%' },
  ]

  return (
    <div className="dashboard">
      <h1>Dashboard</h1>
      <div className="stats-grid">
        {stats.map((stat, index) => (
          <div key={index} className="stat-card">
            <h3>{stat.label}</h3>
            <div className="stat-value">{stat.value}</div>
            <div className="stat-change positive">{stat.change}</div>
          </div>
        ))}
      </div>
      <div className="dashboard-content">
        <div className="chart-section">
          <h2>Analytics</h2>
          <div className="chart-placeholder">
            <p>Chart visualization would go here</p>
          </div>
        </div>
        <div className="activity-section">
          <h2>Recent Activity</h2>
          <ul className="activity-list">
            <li>User registration completed</li>
            <li>Order #1234 processed</li>
            <li>System backup completed</li>
            <li>New feature deployed</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
