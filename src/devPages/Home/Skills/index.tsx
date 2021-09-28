import Style from './styles'
import { forwardRef } from 'react'

import cards from 'utils/getCards'

import MiniCard from 'components/MiniCard'

import { motion, Variants } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

interface SkillsProps {}

const liAnimation: Variants = {
  visible: {
    y: 0,
    scale: 1,
    opacity: 1,
    transition: { duration: 2, ease: 'easeOut' }
  },
  hidden: {
    y: 50,
    opacity: 0,
    scale: 0.65,
    transition: { duration: 2, ease: 'easeOut' }
  }
}

const Skills = forwardRef<any, SkillsProps>(({}, ref) => {
  const [viewRef, inView] = useInView()

  return (
    <Style ref={ref}>
      <h2>Tecnologias</h2>

      <motion.ul
        ref={viewRef}
        variants={liAnimation}
        animate={inView ? 'visible' : 'hidden'}
      >
        {cards.map(({ image, title, color, link }, index) => (
          <motion.li key={index}>
            <MiniCard link={link} image={image} title={title} color={color} />
          </motion.li>
        ))}
      </motion.ul>
    </Style>
  )
})

export default Skills
