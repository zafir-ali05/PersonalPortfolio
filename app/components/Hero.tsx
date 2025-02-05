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
      <div className="w-full max-w-7xl text-left mb-8 px-6 pl-20">
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
      </div>
    </motion.section>
  )
}

export default Hero

