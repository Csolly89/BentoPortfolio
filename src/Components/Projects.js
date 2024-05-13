import Navbar from "./Navbar";
import projects from "../Utilities/projects"
import green from "../assets/greenGradient.png"


const Projects = () => {
    return (
        <>
            <div className="sticky top-0 z-10 overflow-hidden "> <Navbar /> </div>
            <img className="w-full h-[100vh] top-0 fixed z-[-10]  object-fill" src={green} alt="gradient background" />
            <section className="relative">
                <h1>Projects</h1>
                <div className="">
                    <ul className="grid grid-cols-5">
                        {projects.map((item, i) => (
                            <li key={i} className="mx-10 col-span-1 bg-eerie rounded-bl-3xl rounded-tr-2xl p-5 text-center m-24 overflow-y-clip shadow-lg shadow-secondary  ">
                                <div className="transform ease-in-out duration-500 hover:scale-75 hover:mb-[-1em] pb-52 mb-8 h-[80%] bg-slate-700 hover:overflow-visible">
                                    {item.Img}
                                </div>
                                <div>
                                    <h2 className="mb-10 text-textwhite text-2xl"> {item.Title}</h2>
                                    <p className="text-textwhite">{item.Description}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>
        </>
    );
}
export default Projects;