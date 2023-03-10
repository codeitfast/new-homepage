import Image from 'next/image'

export default function Project(props){
    return(
        <a href={props.href} target="_blank" className="mx-auto w-11/12 max-w-sm">
        <div className="card w-full bg-base-100 shadow-xl cursor-pointer hoverable">
        <figure><Image src={props.src} alt="image" className="hover-grow" width="512" height="512"/></figure>
        <div className="card-body">
            <h2 className="card-title">{props.title}</h2>
            <p className="text-left h-12">{props.description}</p>
        </div>
        </div>
        </a>
    )
}