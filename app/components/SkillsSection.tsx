import { motion } from 'framer-motion';
import { useMemo } from 'react'

const skills = ['React', 'Next.js', 'JavaScript', 'TypeScript', 'Tailwind CSS', 'Node.js', 'C', 'R', 'Java']

const SkillsSection = () => {
  const memoizedSkills = useMemo(() => skills, [])

  return (
    <motion.section 
      className="py-20 pt-32 text-white"
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
            className="bg-white bg-opacity-10 backdrop-filter px-4 py-2 rounded-full shadow-md text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.1}}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
          >
            {skill}
          </motion.div>
        ))}
      </div>
    </motion.section>
  )
}

export default SkillsSection

