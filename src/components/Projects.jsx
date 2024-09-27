import { PROJECTS } from "../constants"
import { motion } from "framer-motion";


const Projects = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h1 
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl">
        Projects
      </motion.h1>

      <div className="grid justify-center items-center">
        {PROJECTS.map((project, index) => (
          <div 
            key={index} 
            className="mb-8 flex flex-wrap lg:justify-center rounded-xl lg:py-4 w-full mx-4 px-8 py-8 bg-transparent transition-all duration-700 hover:shadow-sm hover:shadow-neutral-700 hover:bg-neutral-800 hover:transform hover:translateY-2 hover:scale-105 hover:bg-opacity-10">
            
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="w-full lg:w-1/4">
              <img 
                src={project.image} 
                alt={project.title} 
                width={150} 
                height={150} 
                className="mb-6 rounded"
              />
            </motion.div>

            <motion.div 
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }} 
              transition={{ duration: 1 }} 
              className="w-full max-w-xl lg:w-3/4">
              
              <h6 className="mb-2 font-semibold">
                {project.title}
              </h6>
              
              <p className="mb-4 text-neutral-400">
                {project.description}
              </p>
              
              {project.technologies.map((tech, index) => (
                <span 
                  key={index} 
                  className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900">
                  {tech}
                </span>
              ))}
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Projects;