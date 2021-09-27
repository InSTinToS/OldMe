import Style from './styles'
import { forwardRef } from 'react'

import react from 'assets/skills/react.png'

import MiniCard, { MiniCardProps } from 'components/MiniCard'

import { motion, Variants } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

interface SkillsProps {}

const cards: MiniCardProps[] = [
  {
    image: react,
    title: 'React',
    color: 'green',
    link: 'https://pt-br.reactjs.org/'
  },
  {
    image: react,
    title: 'React',
    color: 'green',
    link: 'https://pt-br.reactjs.org/'
  },
  {
    image: react,
    title: 'React',
    color: 'green',
    link: 'https://pt-br.reactjs.org/'
  },
  {
    image: react,
    title: 'React',
    color: 'green',
    link: 'https://pt-br.reactjs.org/'
  },
  {
    image: react,
    title: 'React',
    color: 'green',
    link: 'https://pt-br.reactjs.org/'
  },
  {
    image: react,
    title: 'React',
    color: 'green',
    link: 'https://pt-br.reactjs.org/'
  },
  {
    image: react,
    title: 'React',
    color: 'green',
    link: 'https://pt-br.reactjs.org/'
  },
  {
    image: react,
    title: 'React',
    color: 'yellow',
    link: 'https://pt-br.reactjs.org/'
  },
  {
    image: react,
    title: 'React',
    color: 'red',
    link: 'https://pt-br.reactjs.org/'
  }
]

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
      <h2>Competências</h2>

      <ul>
        {cards.map(({ image, title, color, link }, index) => (
          <motion.li
            ref={viewRef}
            key={index}
            variants={liAnimation}
            animate={inView ? 'visible' : 'hidden'}
          >
            <MiniCard link={link} image={image} title={title} color={color} />
          </motion.li>
        ))}
      </ul>
    </Style>
  )
})

export default Skills
