import panda from '../images/pandaAvatar.jpg'
import nyt from '../images/nyt.png'
import louvre from '../images/money_monet.png'

import Project from './item'
export default function Part3(){
    return(
        <>
        <div className="flex w-screen h-screen place-content-center justify-center">
        <h1 className="absolute place-self-center text-7xl text-white mx-auto mb-96">Stuff I've Made:</h1>
        <div className="project-holder w-screen justify-items-center place-content-center justify-center items-center mt-96">
        <Project src={panda.src} href = "https://snipcart-test-neon.vercel.app/" title="Panda Eyes Website" description="A mockup website for Panda Eyes, an electronic artist." className="m-4 mx-auto"/>

        <Project src={nyt.src} href= "https://react-nyt.codeitfast.repl.co/" title="Yorkify" description="A mockup of the New York Times scroll effect." className="m-4 mx-auto p-0"/>

        <Project src={louvre.src} href = "https://louvre.codeitfast.xyz/" title="Louvre." description="A joke website about the louvre..." className="m-4 mx-auto w-11/12"/>
        </div>
        </div>
        </>
    )
}