import React, {
  forwardRef,
  MutableRefObject,
  useEffect,
  useImperativeHandle,
  useRef,
  useState
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
  getTopDistance: (_distance: number) => any
  items?: {
    label: string
    icon?: JSX.Element
    ref?: MutableRefObject<HTMLElement>
  }[]
}

const Navbar = forwardRef<any, NavbarProps>(
  ({ items, positionRef, yDistanceOffset, getTopDistance }, ref) => {
    const [topDistance, setTopDistance] = useState(0)

    const fixedNavbarRef = useRef<ForwardedByFixedNavbar>(null)

    const onLiClick = (ref?: MutableRefObject<HTMLElement>) => {
      if (ref) {
        const scrolledY = window.scrollY
        const isFixed = topDistance <= 0
        const refY = ref.current?.getBoundingClientRect().top

        const fixedTopScroll = scrolledY + refY
        const unfixedTopScroll = fixedTopScroll - yDistanceOffset + scrolledY

        const top = isFixed ? fixedTopScroll : unfixedTopScroll

        window.scrollTo({ behavior: 'smooth', top })
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' })
      }
    }

    useImperativeHandle(ref, () => ({
      onLiClick
    }))

    useEffect(() => {
      getTopDistance(topDistance)
    }, [topDistance])

    return (
      <FixedNavbar
        ref={fixedNavbarRef}
        positionRef={positionRef}
        getTopDistance={distance => setTopDistance(distance)}
      >
        <Style>
          {items.map(({ label, ref, icon }, index) => (
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
                {icon && icon}

                <span>{label}</span>
              </motion.div>
            </li>
          ))}
        </Style>
      </FixedNavbar>
    )
  }
)

export default Navbar
