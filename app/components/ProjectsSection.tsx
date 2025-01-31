"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect } from "react"

const projects = [
  {
    id: 1,
    title: "Investment ePortfolio",
    description: "Allows for efficient management of either mutual funds and stocks.",
    status: "completed",
    type: "academic",
  },
  {
    id: 2,
    title: "Grade Calculator",
    description: "Easily calculate averages and required marks to achieve a certain grade",
    link: "https://github.com/zafir-ali05/GradeCalculator",
    status: "completed",
    type: "personal",
  },
  {
    id: 3,
    title: "EncryptGate",
    description: "An AI-driven email security system with AWS integration.",
    link: "https://github.com/zafir-ali05/EncryptGate",
    status: "work in progress",
    type: "personal",
  },
]

const filters = ["all", "completed", "work in progress", "personal", "academic"]

const ProjectsSection = () => {
  const [activeFilter, setActiveFilter] = useState("all")
  const [filteredProjects, setFilteredProjects] = useState(projects)

  useEffect(() => {
    const filtered = projects.filter(
      (project) => activeFilter === "all" || project.status === activeFilter || project.type === activeFilter,
    )
    setFilteredProjects(filtered)
  }, [activeFilter])

  return (
    <motion.section
      className="py-20 pt-32 pb-40 text-white"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <motion.h2
        className="text-3xl font-bold mb-8 text-center text-white"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        Projects
      </motion.h2>
      <div className="flex justify-center space-x-2 mb-8">
        {filters.map((filter) => (
          <motion.button
            key={filter}
            className={`px-4 py-2 rounded-full text-sm font-medium ${
              activeFilter === filter
                ? "bg-white text-blue-600"
                : "bg-white bg-opacity-10 text-white hover:bg-opacity-20"
            }`}
            onClick={() => setActiveFilter(filter)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {filter.charAt(0).toUpperCase() + filter.slice(1)}
          </motion.button>
        ))}
      </div>
      <AnimatePresence mode="wait">
        <motion.div
          key={activeFilter}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6 max-w-6xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          {filteredProjects.map((project) =>
            project.link ? (
              <motion.a
                key={project.id}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              >
                <motion.div
                  className="bg-white bg-opacity-5 backdrop-filter backdrop-blur-lg p-6 rounded-xl shadow-md text-white h-full"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                >
                  <h3 className="text-xl text-center font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-200 text-center mb-4">{project.description}</p>
                  <div className="flex justify-center space-x-2">
                    <span className="text-xs bg-white bg-opacity-20 px-2 py-1 rounded-full">{project.status}</span>
                    <span className="text-xs bg-white bg-opacity-20 px-2 py-1 rounded-full">{project.type}</span>
                  </div>
                </motion.div>
              </motion.a>
            ) : (
              <motion.div
                key={project.id}
                className="bg-white bg-opacity-5 backdrop-filter backdrop-blur-lg p-6 rounded-xl shadow-md text-white h-full"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                whileHover={{ scale: 1.05 }}
              >
                <h3 className="text-xl text-center font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-200 text-center mb-4">{project.description}</p>
                <div className="flex justify-center space-x-2">
                  <span className="text-xs bg-white bg-opacity-20 px-2 py-1 rounded-full">{project.status}</span>
                  <span className="text-xs bg-white bg-opacity-20 px-2 py-1 rounded-full">{project.type}</span>
                </div>
              </motion.div>
            ),
          )}
        </motion.div>
      </AnimatePresence>
    </motion.section>
  )
}

export default ProjectsSection

