import { motion, useMotionValue, useTransform } from 'framer-motion'

import useWindowDimensions from 'hooks/useWindowDimensions'
import {
  useEffect,
  useCallback,
  ReactNode,
  MouseEventHandler,
  useRef
} from 'react'

interface PerspectiveProps {
  degree?: number
  children: ReactNode
  onlyInChildren?: boolean
}

const Perspective = ({
  children,
  degree = 22,
  onlyInChildren = false
}: PerspectiveProps) => {
  const { innerHeight, innerWidth } = useWindowDimensions()

  const perspectiveRef = useRef<HTMLDivElement>(null)

  const childrenWidth = perspectiveRef.current?.clientWidth
  const childrenHeight = perspectiveRef.current?.clientHeight

  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const rotateY = useTransform(
    x,
    [0, onlyInChildren ? childrenWidth : innerWidth],
    [-degree, degree]
  )
  const rotateX = useTransform(
    y,
    [0, onlyInChildren ? childrenHeight : innerHeight],
    [degree, -degree]
  )

  const onMouseLeave: MouseEventHandler<HTMLDivElement> = () => {
    setTimeout(() => {
      rotateX.set(0)
      rotateY.set(0)
    }, 500)
  }

  const onMouseOver: MouseEventHandler<HTMLDivElement> = event => {
    const rect = event.currentTarget.getBoundingClientRect()

    x.set(event.clientX - rect.left)
    y.set(event.clientY - rect.top)
  }

  const onMouseMove = useCallback(
    (event: MouseEvent) => {
      x.set(event.x)
      y.set(event.y)
    },
    [x, y]
  )

  useEffect(() => {
    !onlyInChildren && window.addEventListener('mousemove', onMouseMove)

    return () => window.removeEventListener('mousemove', onMouseMove)
  }, [onMouseMove, onlyInChildren])

  return (
    <motion.div
      ref={perspectiveRef}
      className='Perspective'
      onMouseMove={onMouseOver}
      onMouseLeave={onMouseLeave}
      style={{ rotateX, rotateY }}
    >
      {children}
    </motion.div>
  )
}

export default Perspective
