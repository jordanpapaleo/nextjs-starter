import { useState, useEffect } from 'react'

export default function useWindowWidth() {
  const windowWidth = (process.browser)
    ? window.innerWidth
    : null

  const [width, setWidth] = useState(windowWidth)

  useEffect(() => {
    const handleResize = () => setWidth(windowWidth)
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  })

  return width
}
