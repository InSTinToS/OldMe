import React, { forwardRef } from 'react'
import Style from './styles'

interface ExperienceProps {}

const Experience = forwardRef<any, ExperienceProps>(({}, ref) => (
  <Style ref={ref}>
    <h2>Experiência</h2>
  </Style>
))

export default Experience
