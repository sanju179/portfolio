
import { ABOUT_TEXT } from '../constants';
import { motion } from 'framer-motion';
const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
        <motion.h1 
        whileInView={{ opacity: 1, y:0}}
        initial={{opacity:0, y:-100}}
        transition= {{duration: 1.5}}
        className="my-20 text-center text-4xl">About</motion.h1>
        <div className="flex flex-wrap">
            <div className='w-full'>
                <div className='flex justify-center'>
                    <p className='my-2 w-1/2 xl:w-3/4 py-6'>{ABOUT_TEXT}</p>
                </div>
                </div>
        </div>
        
        </div>
  )
}

export default About