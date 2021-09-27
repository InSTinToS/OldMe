import React, {
  forwardRef,
  MutableRefObject,
  useImperativeHandle,
  useRef
} from 'react'
import Style from './styles'

import FixedNavbar, { ForwardedByFixedNavbar } from 'components/FixedNavbar'

import { motion } from 'framer-motion'

export interface ForwardedByNavbar {
  onLiClick: (_ref?: MutableRefObject<HTMLElement>) => void
}

interface NavbarProps {
  yDistanceOffset: number
  positionRef: MutableRefObject<HTMLElement>
  items?: {
    label: string
    ref?: MutableRefObject<HTMLElement>
  }[]
}

const Navbar = forwardRef<any, NavbarProps>(
  ({ items, positionRef, yDistanceOffset }, ref) => {
    const fixedNavbarRef = useRef<ForwardedByFixedNavbar>(null)

    const onLiClick = (ref?: MutableRefObject<HTMLElement>) => {
      if (ref) {
        const scrolledY = window.scrollY
        const isFixed = fixedNavbarRef.current.getTopDistance() <= 0
        const refY = ref.current?.getBoundingClientRect().top

        const fixedTopScroll = scrolledY + refY
        const unfixedTopScroll = fixedTopScroll - yDistanceOffset + scrolledY

        const top = isFixed ? fixedTopScroll : unfixedTopScroll

        window.scrollTo({ behavior: 'smooth', top })
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' })
      }
    }

    useImperativeHandle(ref, () => ({ onLiClick }))

    return (
      <FixedNavbar ref={fixedNavbarRef} positionRef={positionRef}>
        <Style>
          {items.map(({ label, ref }, index) => (
            <li key={index} onClick={() => onLiClick(ref)}>
              <motion.div
                whileHover={{
                  rotate: [0, -10, 10],
                  transition: {
                    duration: 0.3,
                    repeat: Infinity,
                    repeatType: 'reverse'
                  }
                }}
              >
                {label}
              </motion.div>
            </li>
          ))}
        </Style>
      </FixedNavbar>
    )
  }
)

export default Navbar
