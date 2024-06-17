import { RiJavaFill } from "react-icons/ri";
import { TbBrandKotlin } from "react-icons/tb";
import { TbBrandAndroid } from "react-icons/tb";
import { animate, motion } from "framer-motion";

const iconVariants = (duration) => ({
  initial: {y: -10},
  animate: {
    y: [-10, 10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    }
  }
})

const Techologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <motion.h2 whileInView={{opacity: 1, y: 0}} initial={{opacity: 0, y:-100}} transition={{duration: 1.5}} className="my-20 text-center text-4xl">Technologies</motion.h2>
      <motion.div whileInView={{opacity: 1, x: 0}} initial={{opacity: 0, x:-100}} transition={{duration: 1.5}} className="flex flex-wrap items-center justify-center gap-4">
        <motion.div variants={iconVariants(2.5)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
          <RiJavaFill className="text-5xl text-white-400"/>
        </motion.div>
        <motion.div variants={iconVariants(3)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
          <TbBrandKotlin className="text-5xl text-yellow-400"/>
        </motion.div>
        <motion.div variants={iconVariants(4.4)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
          <TbBrandAndroid className="text-5xl text-green-400"/>
        </motion.div>
      </motion.div>
    </div>

  )
}

export default Techologies