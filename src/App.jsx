import { useState } from 'react'

import Navbar from './components/NavBar'
import Hero from './components/Hero'
import AboutSection from './components/AboutSection'
import SkillSection from './components/SkillsSection'
import ProjectsSection from './components/Projects'
import ExperienceSection from './components/Experience'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'
import './index.css'

function App() {
  return (
    <>
        <Navbar />
        <Hero />
        
        <main>
          <AboutSection />
          <SkillSection />
          <ProjectsSection />
          <ExperienceSection />
          <ContactSection />
        </main>

        <Footer />
    </>
  )
}

export default App
