import Navbar from "./Navbar";
import projects from "../Utilities/projects"

const Projects = () => {
    return (
        <>
            <div className="sticky top-0 z-10 bg-black"> <Navbar /> </div>
            <section className="bg-black relative">
                <h1>Projects</h1>
                <div className="inline-flex flex-row items-center mx-auto p-10 gap-10  ">
                        <ul className="ml-24">
                    {projects.map((item, i) => (
                            <li key={i} className="inline-grid w-[20rem] h-[20rem] mx-10 align-center bg-slate-300 border-b-red-300 rounded-xl p-5 text-center m-24 transition-opacity ease-in-out duration-300 overflow-hidden  ">
                                <div className="transition-transform transform ease-in-out duration-500 hover:scale-75 hover:-mb-[50px] pb-52 mb-8 h-[70%] bg-slate-700 hover:overflow-visible">
                                    {item.Img}
                                </div>
                                <div>
                                    <h2 className="mb-8"> {item.Title}</h2>
                                    <p className="">{item.Description}</p>
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