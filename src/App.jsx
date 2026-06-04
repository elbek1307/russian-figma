import React from 'react'
import "./App.css"
import { Header } from './components/Header/Header'
import { Hero } from './components/Hero/Hero'
import Ser from './components/ser/ser'
import Courses from './components/Kurs/Courses'
import Nas from './components/nas/Nas'

const App = () => {
  return (
    <>
      <Header />
      <Hero />
      <Ser />
      <Courses />
      <Nas />
    </>
  )
}

export default App
