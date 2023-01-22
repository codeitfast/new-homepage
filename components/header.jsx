import { BsArrowDownSquareFill } from 'react-icons/bs'
import { motion, useScroll, useTransform, cubicBezier } from "framer-motion";
import { Link } from 'react-scroll';

export default function Header(){
    const { scrollYProgress } = useScroll();
    const scale = useTransform(scrollYProgress,
        [0, .25],
        [1, 11],
        {ease: cubicBezier(.65,0,.39,.95)});
  

    //todo: make div on outside of this, then make the objects sticky ¯\_(ツ)_/¯
    return(
        <motion.div className="flex w-screen h-screen place-content-center justify-center items-center sticky overflow-hidden">
        <motion.h1 className="absolute place-self-center text-7xl" style={{textSizeAdjust: '100%'}}>I'm codeitfast.</motion.h1>
        <Link to="1" smooth={true} duration={2000}  className='absolute mt-80 text-5xl cursor-pointer'><BsArrowDownSquareFill /></Link>
        <motion.div id="circle" className="newInvert w-64 h-64 rounded-full"
        style={{
            scale
        }}
        ></motion.div>
        </motion.div>
    )
}
