import { useState, useEffect } from 'react'

export default function Notification({ message, type = 'info', duration = 3000 }) {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false)
    }, duration)

    return () => clearTimeout(timer)
  }, [duration])

  if (!visible) return null

  return (
    <div className={`notification notification-${type}`}>
      {message}
    </div>
  )
}

