import { BsArrowDownSquareFill } from 'react-icons/bs'
import { AiFillStar } from 'react-icons/ai'
import { motion, useScroll, useTransform, cubicBezier, useSpring } from "framer-motion";
import { Link } from 'react-scroll';
import { useEffect, useState } from 'react';

export default function Header(){
    const size = useWindowSize();
    const { scrollYProgress } = useScroll();
    const n = useTransform(scrollYProgress,
        [0, .6],
        [0, 11],
        {ease: cubicBezier(.65,0,.39,.95)});
  
    const scale = useSpring(n)
    
    const [star, setStar] = useState([])
    useEffect(()=>{
    for(let i = 0; i < 10; i++){
        let setPos = {x: (Math.random()-.5)*size.width, y: (Math.random()-.5)*size.height}
        setStar(star => [...star, {
            id: star.length,
            x: setPos.x,
            y: setPos.y,
            scale: (Math.random() * 50) + 50,
            rotateZ: Math.random()*100,
            absX: setPos.x,
            absY: setPos.y
          }])
    }
    }, [])

    setTimeout(()=>{
        if(star.length > 30) return
        let setPos = {x: (Math.random()-.5)*size.width, y: (Math.random()-.5)*size.height}
        setStar(star => [...star, {
            id: star.length,
            x: setPos.x,
            y: setPos.y,
            scale: (Math.random() * 100),
            rotateZ: Math.random()*100,
            absX: setPos.x,
            absY: setPos.y
        }])
    },10)

    useEffect(()=>{
        let largeObj = JSON.parse(JSON.stringify(star))
        console.log(largeObj)
        setStar(star => [...star, {
            id: star.length,
            x: 100,
            y: 100,
            scale:(10),
            rotateZ: Math.random()*100,
            absX: 0,
            absY: 0
        }])
        //largeObj[0] += 10
        //largeObj[0].x += 10
        setStar(largeObj)
    }, [scale])

    //todo: make div on outside of this, then make the objects sticky ¯\_(ツ)_/¯
    return(
        <motion.div className="flex w-screen h-screen place-content-center justify-center items-center sticky">
        <motion.h1 className="absolute place-self-center text-7xl" style={{textSizeAdjust: '100%'}}>I'm codeitfast.</motion.h1>
        <img src="https://media.tenor.com/y2JXkY1pXkwAAAAC/cat-computer.gif" className="absolute mt-80 w-64 h-auto invert -z-10 rounded-2xl" />

        {star.map((s)=>{
           
            let nScale = scale * 1
            return(<motion.text
            className="text-5xl fixed cntr"
            key={s.id}
            animate={{
                x: s.x * 1,
                y: s.y * 1,
                fontSize: s.scale,
                rotationZ: s.rotation
            }}
            transition={{ type: "spring" }}
            
            style={{
                fontSize: scale,
                opacity: Math.random(),
                rotationZ: scale
            }}
            ><AiFillStar style={{rotateZ: s.rotation, rotateZ: scale,
                scale: scale, opacity: scale, color: '#4A5EBE'}} className="z-0"/></motion.text>)
            
        })}
        <motion.div id="circle" className="newInvert w-64 h-64 rounded-full fixed"
        animate={{
            scale: 12
        }}
        transition={{ease: 'easeIn', duration: .5}}
        ></motion.div>
        </motion.div>
    )
}


//TODO: put this in a file, then import it
function useWindowSize() {
// Initialize state with undefined width/height so server and client renders match
// Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
});
useEffect(() => {
    // Handler to call on window resize
    function handleResize() {
    // Set window width/height to state
    setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
    });
    }
    // Add event listener
    window.addEventListener("resize", handleResize);
    // Call handler right away so state gets updated with initial window size
    handleResize();
    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
}, []); // Empty array ensures that effect is only run on mount
return windowSize;
}

//        <Link to="1" smooth={true} duration={2000}  className='absolute mt-80 sm:mt-80 text-5xl cursor-pointer'><BsArrowDownSquareFill /></Link>