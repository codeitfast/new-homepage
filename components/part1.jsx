import { HiOutlineDesktopComputer } from 'react-icons/hi'

export default function PartOne(){
    return(
        <div id="1" className="flex w-screen h-screen place-content-center justify-center items-center sticky overflow-hidden">
        <h1 className="absolute place-self-center text-7xl" style={{textSizeAdjust: '100%'}}>I code.</h1>
        <a href="#1" className='absolute mt-32 text-5xl'><HiOutlineDesktopComputer /></a>
        </div>
    )
}