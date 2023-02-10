import Project from './item'
export default function Part3(){
    return(
        <>
        <div className="flex w-screen h-screen place-content-center justify-center items-center">
        <h1 className="absolute place-self-center text-7xl text-white mx-auto mb-96">Stuff I've Made:</h1>
        <div className="project-holder w-screen justify-items-center place-content-center justify-center items-center mt-96">
        <Project src="https://imgs.search.brave.com/Er0wxCce8pPcGrqcHJtneQe9HEm1esgLzhg1Mq1cFh4/rs:fit:1200:1050:1/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJjYXZlLmNv/bS93cC93cDk0MTQz/MDMuanBn" title="lorem ipsum" description="lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum" className="m-4 mx-auto"/>
        <Project src="https://imgs.search.brave.com/Er0wxCce8pPcGrqcHJtneQe9HEm1esgLzhg1Mq1cFh4/rs:fit:1200:1050:1/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJjYXZlLmNv/bS93cC93cDk0MTQz/MDMuanBn" title="lorem ipsum" description="lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum" className="m-4 mx-auto"/>
        <Project src="https://imgs.search.brave.com/Er0wxCce8pPcGrqcHJtneQe9HEm1esgLzhg1Mq1cFh4/rs:fit:1200:1050:1/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJjYXZlLmNv/bS93cC93cDk0MTQz/MDMuanBn" title="lorem ipsum" description="lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum" className="m-4 mx-auto"/>
        </div>
        </div>
        </>
    )
}