import React, { useEffect, useRef } from 'react'
import Style from './styles'

import Profile from './Profile'
import Skills from './Skills'
import Navbar, { ForwardedByNavbar } from '../../components/Navbar'
import Footer from './Footer'
import Resume from './Resume'
import Experience from './Experience'

import { motion, useTransform, useViewportScroll } from 'framer-motion'
import { NextPage } from 'next'
import { useRouter } from 'next/dist/client/router'
import Head from 'next/head'

interface HomeProps {}

const Home: NextPage<HomeProps> = () => {
  const aboveParallaxRef = useRef<HTMLDivElement>(null)
  const navbarRef = useRef<ForwardedByNavbar>(null)

  const resumeRef = useRef<HTMLDivElement>(null)
  const experienceRef = useRef<HTMLDivElement>(null)
  const skillsRef = useRef<HTMLDivElement>(null)

  const { scrollY } = useViewportScroll()

  const belowY = useTransform(scrollY, [0, 300], [0, 373])
  const aboveY = useTransform(scrollY, [0, 373], [0, -373])

  const { query } = useRouter()

  useEffect(() => {
    const refs = {
      skills: skillsRef,
      resume: resumeRef,
      experience: experienceRef
    }

    if (refs[query.section?.[0]])
      navbarRef.current.onLiClick(refs[query.section[0]])
    else window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [query.section])

  return (
    <Style>
      <Head>
        <title>Home page</title>
      </Head>

      <Navbar
        ref={navbarRef}
        yDistanceOffset={373}
        positionRef={aboveParallaxRef}
        items={[
          { label: 'Ínicio' },
          { label: 'Tecnologias', ref: skillsRef },
          { label: 'Resumo', ref: resumeRef },
          { label: 'Experiência', ref: experienceRef }
        ]}
      />

      <motion.div id='below' style={{ y: belowY }}>
        <Profile />
      </motion.div>

      <motion.div id='above' style={{ y: aboveY }} ref={aboveParallaxRef}>
        <Experience ref={experienceRef} />

        <Skills ref={skillsRef} />

        <Resume ref={resumeRef} />
      </motion.div>
    </Style>
  )
}

export default Home
