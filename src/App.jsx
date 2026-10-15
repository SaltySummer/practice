import { useState } from 'react'

import Navbar from '../components/NavBar'
import Hero from '../components/Hero'
import AboutSection from '../components/AboutSection'
import SkillSection from '../components/SkillsSection'
import './index.css'

function App() {
  return (
    <>
        <Navbar />
        <Hero />
        
        <main>
          <AboutSection />
          <SkillSection />
        </main>
        
    </>
  )
}

export default App
