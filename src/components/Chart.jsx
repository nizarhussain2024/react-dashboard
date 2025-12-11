export default function Chart({ data, title }) {
  const maxValue = Math.max(...data.map(d => d.value), 1)
  
  return (
    <div className="chart">
      <h3>{title}</h3>
      <div className="chart-bars">
        {data.map((item, index) => (
          <div key={index} className="chart-bar-container">
            <div className="chart-bar-label">{item.label}</div>
            <div className="chart-bar">
              <div
                className="chart-bar-fill"
                style={{ width: `${(item.value / maxValue) * 100}%` }}
              />
            </div>
            <div className="chart-bar-value">{item.value}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

