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
        company: 'PFF',
        title: 'Data Collector trainee',
        startDate: 'May 2024 - Present', 
        disc: '6 week training program with PFF to enter company as PT Data collector during live games for both NFL and College level games',
    },
]


const Exp = () => {
    return (
        <>
        <img className="w-full h-[100vh] top-0 fixed z-[-10]  object-fill" src={green} alt="gradient background" />
        <div className="sticky top-0 z-10 overflow-hidden "> <Navbar /> </div>
        <div className="grid grid-cols-9 w-full px-52 mt-10">
            {jobs.map((jobs, i) => (
                <div key={i} className="text-textwhite col-span-5 mt-10">
                    <div className="w-[35vw] bg-gradient-to-tr from-charcoal to-slate-500 min-h-[6em] rounded-md mx-auto content-center text-center"> 
                        <h1 className="font-Prompt text-3xl">{jobs.company}</h1>
                        <h2 className="font-Prompt">{jobs.title}</h2>
                        <h2 className="font-Prompt">{jobs.startDate}</h2>
                    </div>
                    <div className="border-r-slate-500 border-2 w-5 mx-auto"> </div>
                    <div className="min-h-[6em] rounded-b-3xl rounded-t-xl p-4 mx-auto text-center bg-gradient-to-tr from-slate-700 to-slate-800 content-center ">
                        <h2 className="font-Prompt text-md">{jobs.disc}</h2>
                    </div>
                    <div className="border-r-slate-500 border-2 w-5 mx-auto"> </div>
                </div>
                        ))}
        </div>
        </>
    );
}
export default Exp;