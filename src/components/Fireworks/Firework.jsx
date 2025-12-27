import  {Fireworks} from 'fireworks-js'
import { useEffect, useRef } from 'react'

const FireworkDemo = () => {
    const containerRef = useRef(null)

    useEffect(() => {
        const Firework = new Fireworks(containerRef.current)
        Firework.start()

        return() => Firework.stop()
    },[])

  return (
    <div ref={containerRef}></div>
  )
}

export default FireworkDemo