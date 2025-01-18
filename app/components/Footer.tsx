import { FaLinkedin, FaGithub } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="text-white text-2x py-8 ">
      <div className="container mx-auto px-6 pl-24 flex flex-col items-center">
        <p className="mb-4 ">Find me on here!</p>
        <div className="flex space-x-4">
          <a href="https://linkedin.com/in/zafir-ali05" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition duration-300">
            <FaLinkedin size={24} />
          </a>
          <a href="https://github.com/zafir-ali05" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition duration-300">
            <FaGithub size={24} />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer

