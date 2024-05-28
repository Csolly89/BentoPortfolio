import Navbar from "./Navbar";
import green from "../assets/greenGradient.png"

const jobs = [
    {
        company: 'Code Nurturers LLC',
        title: 'Web Developer',
        startDate: 'April 2024 - Present', 
        disc: 'Freelance contract developer to design and develop any software or website along with maintaining/updating current projects for clients',
    },
    {
        company: 'ThriveDx / Nc State',
        title: 'Software Development bootcamp',
        startDate: 'June 2024 - March 2024', 
        disc: "Accelerated Software Development bootcamp to cover the basis of Html,Css,Javascript,React,Node.js,Restful API's, Relational & Non-relational Databases ",
    },
    {
        company: 'Food Lion',
        title: 'Perishable Manager',
        startDate: 'December 2021 - Present', 
        disc: 'Department manager for Dairy, Frozen, and Meat sections within the store. Daily invoice/ordering and scheduling along with Meat production of the day.',
    },
    
]


const Exp = () => {
    return (
        <>
        <img className="w-full h-[100vh] top-0 fixed z-[-10]  object-fill" src={green} alt="gradient background" />
        <div className="sticky top-0 z-10 overflow-hidden "> <Navbar /> </div>
        <div className="grid place-items-center w-full px-52 mt-10">
            {jobs.map((jobs, i) => (
                <div key={i} className="text-textwhite mt-36">
                    <div className="w-[35vw] bg-gradient-to-tr from-charcoal to-slate-500 min-h-[6em] rounded-md mx-auto content-center text-center"> 
                        <h1 className="font-Prompt text-5xl">{jobs.company}</h1>
                        <h2 className="font-Prompt text-2xl">{jobs.title}</h2>
                        <h2 className="font-Prompt text-2xl">{jobs.startDate}</h2>
                    </div>
                    <div className="border-r-slate-500 border-2 w-5 mx-auto"> </div>
                    <div className="min-h-[6em] rounded-b-3xl rounded-t-xl p-4 mx-auto text-center bg-gradient-to-tr from-slate-700 to-slate-800 content-center shadow">
                        <h2 className="font-Prompt text-xl">{jobs.disc}</h2>
                    </div>
                    <div className="border-r-slate-500 border-2 w-5 mx-auto"> </div>
                </div>
                        ))}
        </div>
        </>
    );
}
export default Exp;