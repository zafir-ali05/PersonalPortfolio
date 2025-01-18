import { motion } from 'framer-motion';
'use client'

const Hero = () => {
  return (
    <motion.section
      className="text-center py-40 min-h-screen flex flex-col justify-center items-center text-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="w-full max-w-7xl text-left mb-8 px-6 pl-20">
        <motion.h1 
          className="text-6xl font-bold mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          Zafir Ali
        </motion.h1>
        <motion.p 
          className="text-xl mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          I'm a passionate and enthusiastic developer eager to  learn and <br /> grow in the tech world.
          I'm committed to building solutions <br /> and continuously improving my technical and soft skills.
        </motion.p>
      
        <motion.button
          className="bg-white text-blue-600 px-6 py-2 rounded-full hover:bg-blue-100 transition duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          onClick={() => window.open('https://docs.google.com/document/d/1y3RXNit4Y_nKI-KPcyPwUOWAl8_slXV9He-yHyTvGLY/edit?usp=sharing', '_blank')}
        >
          View Resume
        </motion.button>
      </div>
    </motion.section>
  );
};

export default Hero;

