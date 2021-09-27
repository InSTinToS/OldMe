import React, { forwardRef } from 'react'
import Style from './styles'

interface ResumeProps {}

const Resume = forwardRef<any, ResumeProps>(({}, ref) => (
  <Style ref={ref}>
    <h2>Resumo</h2>
  </Style>
))

export default Resume
