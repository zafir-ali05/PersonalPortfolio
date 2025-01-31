"use client"

import { motion } from "framer-motion"
import { useMemo } from "react"
import Image from "next/image"

const skills = [
  {
    name: "React",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-VY4jYUNquJEJwBUD4uw6nQCVZmBsSx.png",
  },
  {
    name: "Next.js",
    logo: "https://assets.vercel.com/image/upload/v1662130559/nextjs/Icon_light_background.png",
  },
  {
    name: "JavaScript",
    logo: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
  },
  {
    name: "TypeScript",
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg",
  },
  {
    name: "Tailwind CSS",
    logo: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg",
  },
  {
    name: "Node.js",
    logo: "https://nodejs.org/static/images/logo.svg",
  },
  {
    name: "C",
    logo: "https://upload.wikimedia.org/wikipedia/commons/1/19/C_Logo.png",
  },
  {
    name: "R",
    logo: "https://www.r-project.org/logo/Rlogo.svg",
  },
  {
    name: "Java",
    logo: "https://dev.java/assets/images/java-logo-vert-blk.png",
  },
]

const SkillsSection = () => {
  const memoizedSkills = useMemo(() => skills, [])

  return (
    <motion.section
      className="py-20 pt-48 text-white"
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
        Skills
      </motion.h2>
      <div className="flex flex-wrap justify-center gap-4">
        {memoizedSkills.map((skill, index) => (
          <motion.div
            key={index}
            className="bg-white bg-opacity-5 backdrop-filter backdrop-blur-lg px-4 py-2 rounded-full shadow-md text-white flex items-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
          >
            <div className="w-6 h-6 relative mr-2">
              <Image
                src={skill.logo || "/placeholder.svg"}
                alt={`${skill.name} logo`}
                fill
                className="object-contain"
                sizes="24px"
              />
            </div>
            <span>{skill.name}</span>
          </motion.div>
        ))}
      </div>
    </motion.section>
  )
}

export default SkillsSection

