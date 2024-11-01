 
import { HERO_CONTENT } from '../constants/index'
import Profile from '../assets/kevinRushProfile.jpg'
import { motion } from 'framer-motion'


const boxVariants = {
  hidden: { opacity: 0, y: -50 },
  visible: { opacity: 1, y: 0 },
};


export default function Hero() {
 
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35 lg:ms-10">
        <div className="flex flex-wrap">
         <div className="w-full lg:w-1/2">
      
           <div className="flex flex-col items-center lg:items-start">
             <motion.h1
              initial={{ opacity:0 }}
              animate={{ opacity:1}}

              transition={{ duration: 0.7 }}
              whileHover={{scale:1.1}}
              whileTap = {{ scale: 0.9}}
             className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl">
                Kenvin Rush
             </motion.h1> 
             <motion.span

              variants={boxVariants}
              initial="hidden"
              animate="visible"
              transition={{duration:1}}

             className="bg-gradient-to-l from-pink-300 via-slate-500 to-purple-500 bg-clip-text 
             text-4xl tracking-tight text-transparent hover:bg-gradient-to-r hover:from-pink-500 hover:to-orange-500  ">
                Full Stack Developer
             </motion.span>
             <motion.p animate={{ y: [0, 100, 50, 100, 0] }}
  transition={{ duration: 2, ease: "easeInOut" }} className='my-2 max-w-xl py-6 font-light tracking-tight '>
                {HERO_CONTENT}
             </motion.p>
             </div>
           </div>
           <div className='w-full lg:w-1/2 lg:p-8'>
            <div  className="flex justify-center">
            <motion.img   drag
  dragConstraints={{ left: -100, right: 80, top: -50, bottom: 50 }}
  animate={{ x: [0, 200, -10, 100, 0] }}
  transition={{ duration: 2, ease: "easeInOut" }}
  src={Profile} alt="" />
            </div>
           </div>
         </div>
        

        </div>
      
   
  )
}
