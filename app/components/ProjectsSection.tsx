import { motion } from 'framer-motion';

const projects = [
  { id: 1, title: 'Investment ePortfolio', description: 'Allows for efficient management of either mutual funds and stocks.' },
  { id: 2, title: 'Grade Calculator', description: 'Easily calculate averages and required marks to achieve a certain grade', link: 'https://github.com/zafir-ali05/GradeCalculator' }, // Add link property
]

const ProjectsSection = () => {
  return (
    <motion.section 
      className="py-20 pt-32 text-white"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      /*transition={{ duration: 1 }}*/
      viewport={{ once: true }}
    >
      <motion.h2 
        className="text-3xl font-bold mb-8 text-center text-white"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        /*transition={{ duration: 0.8 }}*/
        viewport={{ once: true }}
      >
        Personal/Academic Projects
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-6 max-w-4xl mx-auto"> 
        {projects.map((project, index) => (
          project.link ? (
            <a 
              key={project.id} 
              href={project.link} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="block"
            >
              <motion.div 
                className="bg-white bg-opacity-10 backdrop-filter p-6 rounded-lg shadow-md text-white"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                //transition={{ duration: 0.5, delay: index * 0.07 }}
                /*transition={{ type: "spring", stiffness: 200, damping: 8 }} */
                viewport={{ once: true }}
                /*whileHover={{ scale: 1.05 }}*/
              >
                <h3 className="text-xl text-center font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-200 text-center">{project.description}</p>
              </motion.div>
            </a>
          ) : (
            <motion.div 
              key={project.id} 
              className="bg-white bg-opacity-10 backdrop-filter p-6 rounded-lg shadow-md text-white"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              /*transition={{ type: "spring", stiffness: 200, damping: 8 }} */
              viewport={{ once: true }}
              /*whileHover={{ scale: 1.05 }} */
            >
              <h3 className="text-xl text-center font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-200 text-center">{project.description}</p>
            </motion.div>
          )
        ))}
      </div>
    </motion.section>
  )
}

export default ProjectsSection

