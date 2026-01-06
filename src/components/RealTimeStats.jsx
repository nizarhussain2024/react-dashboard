import { useWebSocket } from '../hooks/useWebSocket'

export default function RealTimeStats() {
  const { data, connected } = useWebSocket('ws://localhost:8080/ws')

  return (
    <div className="realtime-stats">
      <div className={`connection-status ${connected ? 'connected' : 'disconnected'}`}>
        {connected ? '● Connected' : '○ Disconnected'}
      </div>
      {data && (
        <div className="stats-update">
          <p>Last update: {new Date(data.timestamp).toLocaleTimeString()}</p>
          <p>Updates: {data.updates}</p>
        </div>
      )}
    </div>
  )
}




