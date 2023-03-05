import { HiOutlineDesktopComputer } from 'react-icons/hi'
import { TbBrandNextjs, TbBrandJavascript, TbBrandHtml5, TbBrandCss3, TbBrandPython, TbBrandReactNative } from 'react-icons/tb'
import { SiSocketdotio, SiJavascript, SiReact, SiNextdotjs, SiHtml5, SiCss3, SiJson, SiPython, SiUnity, SiFlask, SiTensorflow, SiTailwindcss } from 'react-icons/si'

export default function PartOne(){
    const logos = [<SiSocketdotio className="inline-block grow cursor-pointer svg mx-auto"/>, <SiReact className="inline-block grow cursor-pointer svg mx-auto"/>, <SiNextdotjs className="inline-block grow cursor-pointer svg mx-auto"/>, <SiJavascript className="inline-block grow cursor-pointer svg mx-auto"/>, <SiHtml5 className="inline-block grow cursor-pointer svg mx-auto"/>, <SiCss3 className="inline-block grow cursor-pointer svg mx-auto"/>, <SiJson className="inline-block grow cursor-pointer svg mx-auto"/>, <SiPython className="inline-block grow cursor-pointer svg mx-auto"/>, <SiUnity className="inline-block grow cursor-pointer svg mx-auto"/>, <SiFlask className="inline-block grow cursor-pointer svg mx-auto"/>, <SiTensorflow className="inline-block grow cursor-pointer svg mx-auto" />, <SiTailwindcss className="inline-block grow cursor-pointer svg mx-auto" />]
    return(
        <div id="1" className="flex h-screen place-content-center justify-center items-center text-black overflow-hidden w-screen">
        <div className="large-card-holder w-11/12 mx-auto max-w-lg my-auto align-middle justify-center items-center place-content-center text-lg text-left backdrop-blur-sm bg-slate-700/25 rounded-2xl py-6 px-28">
        

            <div className="blue font-bold max-w-lg mx-auto px-6"><span className="text-white">👋Hi! I'm codeitfast! As my name <i>implies</i>, I program.</span> I enjoy frontend and anything 3d, but I also have worked with ML and client-sided servers. I also play chess, the piano, and I bike.<br/><br/>
            <span>My primary languages are JS (and JSX), Python, HTML, and CSS. I'm experienced with using APIs, and I have been using React and Next.js for a while (this website is in Next.js).</span><br/><br/>
            I have many projects on <a href="https://replit.com/@codeitfast?tabs=repls" target="_blank" className="text-white special-link">Replit</a> and  <a href="https://github.com/codeitfast" target="_blank" className="text-white special-link">GitHub.</a> Feel free to check them out and <a href="mailto: codeitfast434@gmail.com" className="text-white special-link">contact me!</a></div>
            <div className="blue font-bold card-holder text-5xl w-full mx-auto max-w-lg px-6">
                {logos.map(logo =>{
                    return(logo)
                })}
            </div>
        </div>
        </div>
    )
}

/*

<div className="blue font-bold inline z-30">
                <img src="https://insidehpc.com/wp-content/uploads/2016/01/Python-logo-notext.svg_.png" className="w-16 h-auto"/>
                <img src="https://th.bing.com/th/id/R.e20a376f7dec3a97e1cab5b889b438fc?rik=tDY7bewhJh7yww&pid=ImgRaw&r=0" className="w-16 h-auto" />
                <img src="https://th.bing.com/th/id/R.f81a6f373c244b1f70f4b7402b5ab372?rik=XpEbNeP6w1h6AQ&pid=ImgRaw&r=0" className="w-16 h-auto" />
                <img src="https://th.bing.com/th/id/R.c9421be52fe48fdf04839b53f8e9f1d4?rik=mXxNLfvtnGtNEA&pid=ImgRaw&r=0" className="w-16 h-auto" />
                <img src="https://th.bing.com/th/id/R.6c8f0a0e377cfa70efcd35ff52893b17?rik=iqhl8JD0f9LLpA&pid=ImgRaw&r=0" className='w-16 h-auto' />
                <img src="https://pagepro.co/blog/wp-content/uploads/2020/09/image-5.png" className="w-16 h-auto" />

            </div>

*/