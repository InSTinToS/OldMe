import React, { useRef } from 'react'

import Head from 'next/head'
import { NextPage } from 'next'

import Style from './styles'
import Profile from './Profile'
import Skills from './Skills'
import { motion, useTransform, useViewportScroll } from 'framer-motion'
import Navbar from './Navbar'
import Footer from './Footer'
import Resume from './Resume'
import Experience from './Experience'

interface HomeProps {}

const Home: NextPage<HomeProps> = () => {
  const aboveParallaxRef = useRef<HTMLDivElement>(null)

  const { scrollY } = useViewportScroll()

  const belowY = useTransform(scrollY, [0, 300], [0, 0])
  const aboveY = useTransform(scrollY, [0, 373], [0, -373])

  return (
    <Style>
      <Head>
        <title>Home page</title>
      </Head>

      <Navbar positionRef={aboveParallaxRef} />

      <motion.div style={{ y: belowY }}>
        <Profile />
      </motion.div>

      <motion.div style={{ y: aboveY }} ref={aboveParallaxRef}>
        <Skills />

        <Resume />

        <Experience />

        <Footer />
      </motion.div>
    </Style>
  )
}

export default Home
