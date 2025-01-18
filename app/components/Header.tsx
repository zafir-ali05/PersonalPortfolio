'use client'
import { useEffect, useState, useCallback, useMemo } from 'react'
import { motion } from 'framer-motion';
import { Home, Briefcase, Code } from 'lucide-react'

const Header = () => {
  const [activeSection, setActiveSection] = useState('hero')

  const sections = useMemo(() => ['hero', 'projects', 'skills'], [])

  const handleScroll = useCallback(() => {
    const currentSection = sections.find(section => {
      const element = document.getElementById(section)
      if (element) {
        const rect = element.getBoundingClientRect()
        return rect.top <= 100 && rect.bottom > 100
      }
      return false
    })
    if (currentSection) {
      setActiveSection(currentSection)
    }
  }, [sections])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [handleScroll])

  const scrollToSection = useCallback((sectionId: string) => {
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' })
    }
  }, [])

  return (
    <motion.div 
      className="fixed left-4 top-1/4 transform -translate-y-1/2 z-50 pointer-events-none"
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      /*transition={{ duration: 0.5 }}*/
    >
      <div className="rounded-full p-2 flex flex-col items-center space-y-4 pointer-events-auto">
        {[
          { id: 'hero', Icon: Home },
          { id: 'projects', Icon: Briefcase },
          { id: 'skills', Icon: Code }
        ].map(({ id, Icon }) => (
          <button
            key={id}
            onClick={() => scrollToSection(id)}
            className={`p-2 rounded-full transition-colors duration-300 backdrop-filter backdrop-blur-lg ${
              activeSection === id ? 'bg-white bg-opacity-80 text-blue-600' : 'text-white hover:bg-white hover:bg-opacity-30'
            }`}
          >
            <Icon size={24} />
          </button>
        ))}
      </div>
    </motion.div>
  )
}

export default Header

