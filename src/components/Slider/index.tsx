import React, { useEffect, useState, ReactNode } from 'react'
import Style, { Container } from './styles'

import Dots from './Dots'

import { motion } from 'framer-motion'

interface SliderProps {
  gap: number
  quantity?: number
  children: ReactNode[]
  sliderWidth?: number
  gapVertical?: number
  childrenWidth: number
  initialAtCenter?: boolean
}

const Slider = ({
  gap,
  sliderWidth,
  childrenWidth,
  gapVertical = gap,
  children: containers,
  quantity: quantityProp,
  initialAtCenter = false
}: SliderProps) => {
  const move = childrenWidth + gap
  const quantity = quantityProp || containers?.length
  const isPar = quantity % 2 === 0
  const limit = move * ((quantity - 1) / 2)

  const [makeLeftMove, setMakeLeftMove] = useState(false)
  const [makeRightMove, setMakeRightMove] = useState(false)
  const [xValue, setXValue] = useState(
    initialAtCenter ? (isPar ? move / 2 : 0) : isPar ? limit / 2 : limit
  )

  const onLeftClick = () => {
    if (limit !== 0 && xValue > -limit) setXValue(xValue - move)

    setMakeLeftMove(false)
  }

  const onRightClick = () => {
    if (xValue < limit) setXValue(xValue + move)
    setMakeRightMove(false)
  }

  const onDragged = (_event: any, info: any) => {
    const offset = info.offset.x
    const maxSwipeToAnimate = 20000
    const velocity = info.velocity.x
    const swipe = Math.abs(offset) * velocity

    if (swipe < -maxSwipeToAnimate) {
      setMakeLeftMove(true)
      onLeftClick()
    } else if (swipe > maxSwipeToAnimate) {
      setMakeRightMove(true)
      onRightClick()
    }
  }

  useEffect(() => {
    setXValue(initialAtCenter ? (isPar ? move / 2 : 0) : limit)
  }, [initialAtCenter, isPar, limit, move])

  return (
    <Style
      gap={`${gap}px`}
      className='Slider'
      gapVertical={`${gapVertical}px`}
      width={`${sliderWidth || childrenWidth}px`}
    >
      <motion.ul
        drag='x'
        id='slider'
        dragElastic={0}
        dragMomentum={false}
        onDragEnd={onDragged}
        dragConstraints={{ left: 0, right: 0 }}
      >
        {containers?.map((container: ReactNode, index: number) => (
          <Container
            key={index}
            initial={{ x: xValue }}
            animate={{ x: xValue }}
            width={`${childrenWidth}px`}
            transition={{ type: 'tween', duration: 0.5 }}
          >
            {container}
          </Container>
        ))}
      </motion.ul>

      <Dots
        gap={16}
        size={24}
        radius={50}
        quantity={quantity}
        onLeftClick={onLeftClick}
        makeLeftTap={makeLeftMove}
        onRightClick={onRightClick}
        makeRightTap={makeRightMove}
      />
    </Style>
  )
}

export default Slider
