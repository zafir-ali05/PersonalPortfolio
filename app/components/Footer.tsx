"use client"

import { Github, Linkedin } from "lucide-react"
import { motion } from "framer-motion"

const Footer = () => {
  return (
    <footer className="relative text-white py-6 h-24">
      <motion.div
        className="absolute bottom-6"
        style={{ left: "calc(50% - 15px)" }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <p className="text-sm text-gray-300 mb-2">Find me on here!</p>
        <div className="flex justify-center space-x-4">
          <motion.a
            href="https://linkedin.com/in/zafir-ali05"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300 transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <Linkedin size={20} />
            <span className="sr-only">LinkedIn</span>
          </motion.a>
          <motion.a
            href="https://github.com/zafir-ali05"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300 transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <Github size={20} />
            <span className="sr-only">GitHub</span>
          </motion.a>
        </div>
      </motion.div>
    </footer>
  )
}

export default Footer

