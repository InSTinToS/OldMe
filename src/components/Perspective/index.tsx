import { motion, useMotionValue, useTransform } from 'framer-motion'

import useWindowDimensions from 'hooks/useWindowDimensions'
import { useEffect, useCallback, ReactNode } from 'react'

interface PerspectiveProps {
  children: ReactNode
  degree?: number
}

const Perspective = ({ children, degree = 22 }: PerspectiveProps) => {
  const { innerHeight, innerWidth } = useWindowDimensions()

  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const rotateY = useTransform(x, [0, innerWidth], [-degree, degree])
  const rotateX = useTransform(y, [0, innerHeight], [degree, -degree])

  const onMouseMove = useCallback(
    (event: MouseEvent) => {
      x.set(event.pageX)
      y.set(event.pageY)
    },
    [x, y]
  )

  useEffect(() => {
    window.addEventListener('mousemove', onMouseMove)
  }, [onMouseMove])

  return (
    <motion.div className='Perspective' style={{ rotateX, rotateY }}>
      {children}
    </motion.div>
  )
}

export default Perspective
