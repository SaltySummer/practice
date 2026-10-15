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

          <section id="projects" className="max-w-4xl mx-auto px-6 py-16 border-t border-stone-200 scroll-mt-16">
            <h2 className="text-2xl font-semibold tracking-tight">Projects</h2>
            <p className="mt-2 text-stone-600">Things I have built.</p>
            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              <article className="rounded-lg border border-stone-200 p-6 hover:border-stone-400">
                <p className="text-xs font-medium uppercase tracking-wide text-stone-500">2026</p>
                <h3 className="mt-2 text-lg font-semibold">About Me in React</h3>
                <p className="mt-2 text-sm leading-relaxed text-stone-600">My first React project, rebuilt from a plain HTML page.</p>
                <p className="mt-4 text-sm text-stone-500">React · Tailwind CSS</p>
                <a href="https://github.com/juandelacruz/CSIT340-Lab1-DelaCruz" className="mt-4 inline-block text-sm font-medium underline underline-offset-4 hover:text-stone-600">View on GitHub</a>
              </article>
              <article className="rounded-lg border border-stone-200 p-6 hover:border-stone-400">
                <p className="text-xs font-medium uppercase tracking-wide text-stone-500">2025</p>
                <h3 className="mt-2 text-lg font-semibold">Canteen Queue</h3>
                <p className="mt-2 text-sm leading-relaxed text-stone-600">A page that shows how long the canteen line is so students can decide when to go.</p>
                <p className="mt-4 text-sm text-stone-500">HTML · CSS · JavaScript</p>
                <a href="https://github.com/juandelacruz/canteen-queue" className="mt-4 inline-block text-sm font-medium underline underline-offset-4 hover:text-stone-600">View on GitHub</a>
              </article>
              <article className="rounded-lg border border-stone-200 p-6 hover:border-stone-400">
                <p className="text-xs font-medium uppercase tracking-wide text-stone-500">2025</p>
                <h3 className="mt-2 text-lg font-semibold">Clinic Records</h3>
                <p className="mt-2 text-sm leading-relaxed text-stone-600">A desktop app for our database className that keeps visit records for a small clinic.</p>
                <p className="mt-4 text-sm text-stone-500">Java · MySQL</p>
                <a href="https://github.com/juandelacruz/clinic-records" className="mt-4 inline-block text-sm font-medium underline underline-offset-4 hover:text-stone-600">View on GitHub</a>
              </article>
              <article className="rounded-lg border border-stone-200 p-6 hover:border-stone-400">
                <p className="text-xs font-medium uppercase tracking-wide text-stone-500">2024</p>
                <h3 className="mt-2 text-lg font-semibold">Org Event Page</h3>
                <p className="mt-2 text-sm leading-relaxed text-stone-600">A one-page site for our org's freshman orientation, with the schedule and venue.</p>
                <p className="mt-4 text-sm text-stone-500">HTML · Bootstrap</p>
                <a href="https://github.com/juandelacruz/org-event-page" className="mt-4 inline-block text-sm font-medium underline underline-offset-4 hover:text-stone-600">View on GitHub</a>
              </article>
            </div>
          </section>

          <section id="experience" className="max-w-4xl mx-auto px-6 py-16 border-t border-stone-200 scroll-mt-16">
            <h2 className="text-2xl font-semibold tracking-tight">Experience</h2>
            <p className="mt-2 text-stone-600">Where I have learned and worked.</p>
            <ol className="mt-8 space-y-8 border-l border-stone-200">
              <li className="pl-6">
                <p className="text-sm text-stone-500">2024 – Present</p>
                <h3 className="mt-1 font-semibold">BS Information Technology</h3>
                <p className="text-sm text-stone-600">Cebu Institute of Technology – University</p>
                <p className="mt-2 text-sm leading-relaxed text-stone-600">Taking up web development, databases, and systems analysis.</p>
              </li>
              <li className="pl-6">
                <p className="text-sm text-stone-500">2025</p>
                <h3 className="mt-1 font-semibold">Student Assistant</h3>
                <p className="text-sm text-stone-600">CCS Computer Laboratory</p>
                <p className="mt-2 text-sm leading-relaxed text-stone-600">Set up lab machines and helped students with software installs.</p>
              </li>
              <li className="pl-6">
                <p className="text-sm text-stone-500">2022 – 2024</p>
                <h3 className="mt-1 font-semibold">Senior High School, ICT Strand</h3>
                <p className="text-sm text-stone-600">Talisay City National High School</p>
                <p className="mt-2 text-sm leading-relaxed text-stone-600">Built my first web page and got hooked.</p>
              </li>
            </ol>
          </section>

          <section id="contact" className="max-w-4xl mx-auto px-6 py-16 border-t border-stone-200 scroll-mt-16">
            <h2 className="text-2xl font-semibold tracking-tight">Contact</h2>
            <p className="mt-2 text-stone-600">Say hi.</p>
            <ul className="mt-8 space-y-3">
              <li>
                <span className="inline-block w-24 text-sm text-stone-500">Email</span>
                <a href="mailto:juan.delacruz@cit.edu" className="font-medium hover:underline">juan.delacruz@cit.edu</a>
              </li>
              <li>
                <span className="inline-block w-24 text-sm text-stone-500">GitHub</span>
                <a href="https://github.com/juandelacruz" className="font-medium hover:underline">github.com/juandelacruz</a>
              </li>
              <li>
                <span className="inline-block w-24 text-sm text-stone-500">LinkedIn</span>
                <a href="https://linkedin.com/in/juandelacruz" className="font-medium hover:underline">linkedin.com/in/juandelacruz</a>
              </li>
            </ul>
          </section>

        </main>

        <footer className="border-t border-stone-200">
          <div className="max-w-4xl mx-auto px-6 py-8 text-sm text-stone-500">
            © 2026 Juan dela Cruz. Built with React and Tailwind CSS for CSIT340.
          </div>
        </footer>
    </>
  )
}

export default App
