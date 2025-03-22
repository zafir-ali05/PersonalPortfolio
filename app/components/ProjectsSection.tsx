"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState, useMemo } from "react"
import React from "react"
import { ChevronDown } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/app/components/ui/dropdown-menu"

const projects = [
  {
    id: 1,
    title: "Investment ePortfolio",
    description: "Allows for efficient management of either mutual funds and stocks.",
    status: "completed",
    type: "academic",
    technologies: ["Java"],
  },
  {
    id: 2,
    title: "Grade Calculator",
    description: "Easily calculate averages and required marks to achieve a certain grade",
    link: "https://github.com/zafir-ali05/GradeCalculator",
    status: "completed",
    type: "personal",
    technologies: ["Java"],
  },
  {
    id: 3,
    title: "EncryptGate",
    description: "An AI-driven email security system with AWS integration.",
    link: "https://github.com/zafir-ali05/EncryptGate",
    status: "work in progress",
    type: "personal",
    technologies: ["Node.js", "AWS", "React"],
  },
  {
    id: 4,
    title: "AlertMate",
    description:
      "A community-driven safety mobile app designed to report suspicious activities, access emergency resources, and stay informed about potential threats.\n\nDeveloped for Hack Canada 2025 Hackathon",
    link: "https://github.com/zafir-ali05/NeighborhoodSafetyNetwork",
    status: "completed",
    type: "personal",
    technologies: ["Flutter", "Firebase"],
  },
  {
    id: 5,
    title: "Chrono",
    description:
      "A smart application designed to help students manage their academic workload by tracking assignment due dates and providing an intuitive interface for organizing coursework.",
    link: "https://github.com/zafir-ali05/AssignmentReminderApp",
    status: "work in progress",
    type: "personal",
    technologies: ["Flutter", "Firebase"],
  },
  {
    id: 6,
    title: "wordz.io (NAME WIP)",
    description: 
      "A real-time multiplayer spelling bee game.",
    link: "https://github.com/zafir-ali05/Wordz",
    status: "work in progress",
    type: "personal",
    technologies: ["Next.js, MongoDB, Railway"],
    
    },
]

const filters = ["all", "completed", "work in progress", "personal", "academic"]

const ProjectsSection = () => {
  const [activeFilter, setActiveFilter] = useState("all")
  const filteredProjects = useMemo(() => {
    return projects.filter(
      (project) => activeFilter === "all" || project.status === activeFilter || project.type === activeFilter,
    )
  }, [activeFilter])

  // Function to capitalize first letter of each word
  const formatFilterName = (filter: string) => {
    return filter
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ")
  }

  return (
    <motion.section
      className="py-20 pt-32 pb-40 text-white"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          className="text-3xl font-bold mb-8 text-center text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Projects
        </motion.h2>
        <div className="flex justify-center mb-8 relative z-[1000]">
          <DropdownMenu>
            <DropdownMenuTrigger className="z-[1000]">
              <motion.button
                className="px-4 py-2 rounded-full text-sm font-medium bg-gray-800 text-white hover:bg-opacity-70 flex items-center"
                whileTap={{ scale: 0.95 }}
              >
                {formatFilterName(activeFilter)}
                <ChevronDown className="ml-2 h-4 w-4 opacity-70" />
              </motion.button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-gray-800 border-gray-700 text-white z-[1001]">
              <DropdownMenuRadioGroup value={activeFilter} onValueChange={setActiveFilter}>
                {filters.map((filter) => (
                  <DropdownMenuRadioItem
                    key={filter}
                    value={filter}
                    className="text-white focus:bg-gray-700 focus:text-white cursor-pointer"
                  >
                    {formatFilterName(filter)}
                  </DropdownMenuRadioItem>
                ))}
              </DropdownMenuRadioGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </motion.section>
  )
}

const ProjectCard = ({ project }) => {
  const CardWrapper = project.link ? motion.a : motion.div

  return (
    <CardWrapper
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      className={`block ${project.link ? "cursor-pointer" : ""}`}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      <motion.div
        className="bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-lg p-6 rounded-xl shadow-md text-white h-full"
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        <h3 className="text-xl text-center font-semibold mb-2">{project.title}</h3>
        <p className="text-gray-300 text-center mb-4">
          {project.description.split("\n").map((line, index) => (
            <React.Fragment key={index}>
              {line}
              {index < project.description.split("\n").length - 1 && <br />}
            </React.Fragment>
          ))}
        </p>
        <div className="flex flex-wrap justify-center gap-2">
          {project.technologies.map((tech, index) => (
            <span key={index} className="text-xs bg-gray-700 px-2 py-1 rounded-full">
              {tech}
            </span>
          ))}
        </div>
      </motion.div>
    </CardWrapper>
  )
}

export default ProjectsSection

