import Navbar from "./Navbar";
import projects from "../Utilities/projects"
import green from "../assets/greenGradient.png"

import ProjectCard from "./ProjectCard"

const Projects = () => {
    return (
        <>
            <div className="sticky top-0 z-10 overflow-hidden "> <Navbar /> </div>
            <img className="w-full h-[100vh] top-0 fixed z-[-10]  object-fill" src={green} alt="gradient background" />

            <section className="relative">
                <h1 className="text-textwhite text-center text-4xl mt-10 font-Prompt">Projects</h1>
                <div>
                    {projects.map((item, i) => (
                        <ProjectCard key={i} item={item}/>
                    ))}
                </div>
            </section>
        </>
    );
}
export default Projects;