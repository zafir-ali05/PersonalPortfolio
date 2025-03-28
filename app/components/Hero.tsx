"use client"
import { motion } from "framer-motion"
import { TypeAnimation } from "react-type-animation"
import { Button } from "@/app/components/ui/neon-button"

const Hero = () => {
  return (
    <motion.section
      className="text-center py-40 min-h-screen flex flex-col justify-center items-center text-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="w-full max-w-7xl flex flex-row justify-between items-center px-6">
        {/* Text content - takes half the width */}
        <motion.div 
          className="w-1/2 text-left mb-8 pl-12"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <motion.div
            className="text-6xl font-bold mb-4 h-[72px]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <TypeAnimation
              sequence={[
                "Z",
                200,
                "Za",
                200,
                "Zaf",
                200,
                "Zafi",
                200,
                "Zafir",
                200,
                "Zafir ",
                200,
                "Zafir A",
                200,
                "Zafir Al",
                200,
                "Zafir Ali",
              ]}
              wrapper="h1"
              speed={1}
              repeat={0}
              cursor={true}
            />
          </motion.div>
          <motion.p
            className="text-xl mb-6 text-gray-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            I'm a passionate and enthusiastic developer eager to learn and <br /> grow in the tech world. I'm committed to
            building solutions <br /> and continuously improving my technical and soft skills.
          </motion.p>
          <motion.div
            className="relative"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <Button
              className="text-zinc-50"
              onClick={() =>
                window.open(
                  "https://drive.google.com/file/d/1S75EoqgX7Et-et-yp8MgD3401R02ZBGB/view?usp=drive_link",
                  "_blank",
                )
              }
            >
              View Resume
            </Button>
          </motion.div>
        </motion.div>
        
        {/* Image container - takes other half of the width */}
        <motion.div 
          className="w-1/2 flex justify-center items-center"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <div className="relative w-4/5 aspect-square overflow-hidden rounded-full border-4 border-yellow-50 shadow-lg shadow-indigo-500/50">
            <img 
              src="/zafir.png" 
              alt="Zafir Ali" 
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
      </div>
    </motion.section>
  )
}

export default Hero