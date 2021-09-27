import React, { forwardRef } from 'react'
import Style from './styles'

interface FooterProps {}

const Footer = forwardRef<any, FooterProps>(({}, ref) => (
  <Style ref={ref}>
    <h2>Footer</h2>
  </Style>
))

export default Footer
