export default function Project(props){
    return(
        <div className="card w-11/12 max-w-sm bg-base-100 shadow-xl cursor-pointer hoverable">
        <figure><img src={props.src} alt="Shoes" className="hover-grow" /></figure>
        <div className="card-body">
            <h2 className="card-title">{props.title}</h2>
            <p className="text-left">{props.description}</p>
        </div>
        </div>
    )
}