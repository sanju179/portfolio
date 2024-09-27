import { RiReactjsLine } from "react-icons/ri";
import { SiMongodb, SiOpencv, SiFlask, SiLangchain } from "react-icons/si";
import { IoLogoCss3 } from "react-icons/io5";
import { TiHtml5 } from "react-icons/ti";
import { FaPython, FaJava, FaFigma } from "react-icons/fa6";
import { DiIllustrator } from "react-icons/di";
import { GrOracle } from "react-icons/gr";
import { motion } from "framer-motion";

const iconVariants = {
  animate: {
    x: [0, -2000], // Adjust the value based on the total width of icons
    opacity: 1,
    transition: {
      x: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 25, // Adjust this duration for smoother or faster scrolling
        ease: "linear"
      }
    }
  }
};

const Technologies = () => {
  const icons = [
    <TiHtml5 className="text-7xl text-red-500" />,
    <RiReactjsLine className="text-7xl text-cyan-400" />,
    <IoLogoCss3 className="text-7xl text-blue-700" />,
    <SiMongodb className="text-7xl text-green-400" />,
    <FaPython className="text-7xl text-amber-300" />,
    <SiOpencv className="text-7xl text-red-400" />,
    <SiFlask className="text-7xl text-stone-50" />,
    <SiLangchain className="text-7xl text-stone-50" />,
    <FaJava className="text-7xl text-stone-50" />,
    <FaFigma className="text-7xl text-stone-50" />,
    <DiIllustrator className="text-7xl text-orange-600" />,
    <GrOracle className="text-7xl text-red-600" />
  ];

  // Duplicate the icons to ensure continuous scrolling without gaps
  const duplicatedIcons = [...icons, ...icons];

  return (
    <div className="border-b border-neutral-800 pb-24 overflow-hidden">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl"
      >
        Technologies
      </motion.h1>

      <motion.div
        variants={iconVariants}
        animate="animate"
        className="flex items-center justify-center gap-8 w-max" // Set container width wide enough for scrolling
      >
        
        {duplicatedIcons.map((icon, index) => (
          <div key={index} className="rounded-2xl border-4 border-neutral-800 p-4">
            {icon}
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Technologies;
