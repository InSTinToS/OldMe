import Perspective from 'components/Perspective'
import { useRouter } from 'next/dist/client/router'
import React from 'react'
import Style from './styles'

export interface MiniCardProps {
  link: string
  image: string
  title: string
  color: 'green' | 'yellow' | 'red'
}

const MiniCard = ({ image, title, color, link }: MiniCardProps) => {
  const onMiniCardClick = () => window.open(link, '_ blank')

  return (
    <Perspective>
      <Style onClick={onMiniCardClick}>
        <img src={image} />

        <span className='title'>{title}</span>

        {color === 'red' && <div className='redBar' />}
        {color === 'green' && <div className='greenBar' />}
        {color === 'yellow' && <div className='yellowBar' />}
      </Style>
    </Perspective>
  )
}

export default MiniCard