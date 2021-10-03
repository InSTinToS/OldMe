import React, { forwardRef } from 'react'
import Style from './styles'

interface ExperienceProps {}

const Experience = forwardRef<any, ExperienceProps>(({}, ref) => (
  <Style ref={ref}>
    <h2>Experiência</h2>

    <video controls>
      <source src='videos/steamslab.mp4' type='video/mp4' />
      Your browser does not support the video tag.
    </video>
  </Style>
))

export default Experience
