import React, { useEffect, useRef } from 'react'
import Style from './styles'

import { NextPage } from 'next'
import { useRouter } from 'next/dist/client/router'
import Head from 'next/head'

import Profile from './Profile'
import Skills from './Skills'
import Resume from './Resume'
import Experience from './Experience'
import Footer from './Footer'

import HomeIcon from 'assets/icons/home'
import CertificateIcon from 'assets/icons/certified'
import ResumeIcon from 'assets/icons/resume'
import SkillsIcon from 'assets/icons/skills'

import Navbar, { ForwardedByNavbar } from 'components/Navbar'

import { motion, useTransform, useViewportScroll } from 'framer-motion'

interface HomeProps {}

const Home: NextPage<HomeProps> = () => {
  const aboveParallaxRef = useRef<HTMLDivElement>(null)
  const experienceRef = useRef<HTMLDivElement>(null)
  const navbarRef = useRef<ForwardedByNavbar>(null)
  const resumeRef = useRef<HTMLDivElement>(null)
  const skillsRef = useRef<HTMLDivElement>(null)

  const { scrollY } = useViewportScroll()
  const { query } = useRouter()

  const aboveY = useTransform(scrollY, [0, 373], [0, -373])
  const belowY = useTransform(scrollY, [0, 300], [0, 373])

  const navbarItems = [
    { label: 'Ínicio', icon: <HomeIcon /> },
    { label: 'Tecnologias', ref: skillsRef, icon: <SkillsIcon /> },
    {
      ref: experienceRef,
      label: 'Experiência',
      icon: <CertificateIcon />
    },
    { label: 'Resumo', ref: resumeRef, icon: <ResumeIcon /> }
  ]

  useEffect(() => {
    const refs = {
      skills: skillsRef,
      resume: resumeRef,
      experience: experienceRef
    }

    refs[query.section?.[0]]
      ? navbarRef.current.onLiClick(refs[query.section[0]])
      : window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [query.section])

  return (
    <Style>
      <Head>
        <title>Home page</title>
      </Head>

      <Navbar
        ref={navbarRef}
        items={navbarItems}
        yDistanceOffset={373}
        positionRef={aboveParallaxRef}
      />

      <motion.div id='below' style={{ y: belowY }}>
        <Profile />
      </motion.div>

      <motion.div id='above' style={{ y: aboveY }} ref={aboveParallaxRef}>
        <Skills ref={skillsRef} />

        <Experience ref={experienceRef} />

        <Resume ref={resumeRef} />

        <Footer />
      </motion.div>
    </Style>
  )
}

export default Home
