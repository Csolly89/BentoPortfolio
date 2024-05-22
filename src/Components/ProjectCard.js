import { Link } from "react-router-dom"

function ProjectCard({ item }) {
    return (
        <section className="mt-14 h-full">
            <div className="grid grid-cols-12 h-[50vh] mb-[10em] ">
                <div className="col-span-5 place-self-center mt-4 lg:mt-0">
                    <div className="bg-charcoal ml-10 p-4 text-center h-[20em] w-[35em] shadow-lg shadow-textwhite rounded-tl-3xl rounded-tr-3xl  ">
                        <div className="transform transition-all ease-in-out duration-1000 hover:scale-125 hover:ml-[5em] hover:mt-[4em] w-[90%] mt-3 mx-auto">
                            <img className="rounded-3xl" src={item.Img} alt="screenshot of previous projects" />
                        </div>
                    </div> 
                </div>
                {/* 2nd container with Logo/img  */}
                <div className="col-span-7 place-self-start text-cente my-36 ">
                    <div>
                        <Link to={item.path} target="_blank" rel="noopener noreferrer">
                            <h2 className="text-textwhite text-4xl font-semibold  hover:text-secondary"> {item.Title}</h2>
                        </Link>
                        <p className="text-textwhite text-xl pl-5 mt-4 mr-10">{item.Description}</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ProjectCard;