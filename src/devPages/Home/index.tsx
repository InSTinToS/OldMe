import React from 'react'

import Head from 'next/head'
import { NextPage } from 'next'

import Style from './styles'
import Profile from './Profile'

interface HomeProps {}

const Home: NextPage<HomeProps> = () => {
  return (
    <Style>
      <Head>
        <title>Home page</title>
      </Head>

      <Profile />
    </Style>
  )
}

export default Home
