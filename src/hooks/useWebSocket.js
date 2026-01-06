import { useEffect, useState } from 'react'

export function useWebSocket(url) {
  const [data, setData] = useState(null)
  const [connected, setConnected] = useState(false)

  useEffect(() => {
    // In production, use actual WebSocket connection
    // const ws = new WebSocket(url)
    // 
    // ws.onopen = () => setConnected(true)
    // ws.onmessage = (event) => setData(JSON.parse(event.data))
    // ws.onclose = () => setConnected(false)
    // 
    // return () => ws.close()

    // Simulate WebSocket for now
    const interval = setInterval(() => {
      setData({
        timestamp: new Date().toISOString(),
        updates: Math.floor(Math.random() * 10)
      })
    }, 5000)

    setConnected(true)
    return () => {
      clearInterval(interval)
      setConnected(false)
    }
  }, [url])

  return { data, connected }
}




