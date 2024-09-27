
import profilePic from '../assets/prof.jpeg';
import { motion } from "framer-motion";
import Resumee from './Resumee';

const container = (delay) => ({
    hidden: {x: -100, opacity: 0},
    visible: {
        x:0,
        opacity:1,
        transition: {duration: 0.5, delay: delay}
    }
})

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-8 lg:mb-35">
        <div className="flex flex-wrap">
            <div className="w-full lg:w-2/5">
                <div className="flex flex-col items-end lg:items-start">
                    <motion.h1
                    variants={container(0)}
                    initial="hidden"
                    animate="visible"
                     className="pb-16 text-6xl font-light tracking-tight lg:mt-16 lg:text-8xl"> Sanjeevini R</motion.h1>
                    <motion.span 
                    variants={container(0.25)}
                    initial="hidden"
                    animate="visible"
                    className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent">
                        Full Stack Developer
                    </motion.span>
                    <Resumee />
                </div>
            </div>
            <div className='w-full lg:w-3/5 lg:p-8'>
  <div className='flex justify-end'>
    <motion.img 
      initial={{ x:100, opacity: 0}}
      animate={{ x:0, opacity:1 }}
      transition={{duration: 1, delay: 1.2}} 
      className='w-1/2 rounded-3xl' 
      src={profilePic} alt="" />
  </div>
</div>
        </div>
    </div>
  )
}

export default Hero