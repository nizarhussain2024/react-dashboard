import { useState, useEffect } from 'react'
import { useApi } from '../hooks/useApi'

export default function Dashboard() {
  const [stats, setStats] = useState([
    { label: 'Total Users', value: '1,234', change: '+12%' },
    { label: 'Revenue', value: '$45,678', change: '+8%' },
    { label: 'Orders', value: '567', change: '+15%' },
    { label: 'Growth', value: '23.5%', change: '+5%' },
  ])

  useEffect(() => {
    // Simulate API call
    const timer = setTimeout(() => {
      setStats(prev => prev.map(stat => ({
        ...stat,
        value: stat.value.includes('$') 
          ? `$${(parseInt(stat.value.replace(/[$,]/g, '')) + Math.floor(Math.random() * 100)).toLocaleString()}`
          : stat.value
      })))
    }, 2000)
    return () => clearTimeout(timer)
  }, [])

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
          <Chart
            title="Monthly Performance"
            data={[
              { label: 'Jan', value: 1200 },
              { label: 'Feb', value: 1900 },
              { label: 'Mar', value: 3000 },
              { label: 'Apr', value: 2780 },
              { label: 'May', value: 1890 },
            ]}
          />
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
