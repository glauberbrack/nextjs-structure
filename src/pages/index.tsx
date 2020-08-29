import React from 'react'
import Head from 'next/head'

import { Container } from '../styles/pages/Home'

const Home: React.FC = () => {
  return (
    <Container>
      <Head>
        <title>Next.js | Home</title>
      </Head>

      <h1>Hi, there!</h1>
      <p>This is just an simple structure created using A ReactJS + Next.js </p>
    </Container>
  )
}

export default Home
