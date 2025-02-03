"use client"

import Hero from "./components/Hero"
import ProjectsSection from "./components/ProjectsSection"
import SkillsSection from "./components/SkillsSection"

export default function Home() {
  return (
    <div className="flex flex-col">
      <div id="hero">
        <Hero />
      </div>
      <div id="projects">
        <ProjectsSection />
      </div>
      <div id="skills">
        <SkillsSection />
      </div>
    </div>
  )
}

