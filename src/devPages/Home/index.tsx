import React, { useRef, useEffect } from 'react'

import Head from 'next/head'
import { NextPage } from 'next'

import Style from './styles'
import Profile from './Profile'
import Skills from './Skills'
import { motion, useTransform, useViewportScroll } from 'framer-motion'

import Footer from './Footer'

interface HomeProps {}

const Home: NextPage<HomeProps> = () => {
  const profileRef = useRef<HTMLDivElement>(null)

  const { scrollY } = useViewportScroll()

  const y1 = useTransform(scrollY, [0, 300], [0, 100])
  const y2 = useTransform(scrollY, [0, 300], [0, -300])
  const y3 = useTransform(scrollY, [0, 600], [0, -600])

  useEffect(() => console.log(scrollY))

  return (
    <Style>
      <Head>
        <title>Home page</title>
      </Head>

      <motion.div style={{ y: y1 }} ref={profileRef}>
        <Profile />
      </motion.div>

      <motion.div style={{ y: y2 }}>
        <Skills />
      </motion.div>

      <motion.div style={{ y: y3 }}>
        <Footer />
      </motion.div>
    </Style>
  )
}

export default Home
