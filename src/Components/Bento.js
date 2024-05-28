import { Link } from "react-router-dom";

import Social from "../Utilities/Social"
import Logo from "../assets/image.png"
import Skills from "./Skills";
import Frameworks from "./Frameworks";
import Profile from "../assets/HulkProfile.png"
import Gojira from "../assets/godzilla.jpg"



const Bento = () => {
    return (
        <>
            <ul className=" grid grid-cols-4 grid-rows-5 gap-20 m-12 px-12 pb-12 h-[85vh]">
                {/* profile picture */}
                <li className="transform scale-150 rounded-2xl row-span-3 col-span-2 overflow-hidden"><img className="object-cover h-full mx-auto drop-shadow-lg hover:shadow-accent" src={Profile} alt="hulk profile" /></li>
                {/* social icons */}
                <li className="bg-invisible transform rounded-2xl col-span-2"><div className=""> <Social /> </div></li>
                <Link to={'/about'} >
                    {/* about link */}
                    <li className="bg-gradient-to-tr from-charcoal to-slate-500 transform shadow-xl shadow-[#3b1c32] hover:shadow-[#149911] hover:scale-110 rounded-2xl row-span-1 "><div className="h-16 font-Alex font-light text-6xl flex justify-center items-center">About me</div></li>
                </Link>
                <Link to={'/exp'} >
                    {/* exp link */}
                    <li className="bg-gradient-to-tr from-charcoal to-slate-500 transform shadow-xl shadow-[#3b1c32] hover:shadow-[#149911] hover:scale-110 rounded-2xl row-span-1 "><div className="h-16 font-Alex font-light text-6xl flex justify-center items-center">Experience</div></li>
                </Link>
                <Link to={'/projects'} >
                    {/* project link */}
                    <li className="bg-gradient-to-tr from-charcoal to-slate-500 transform shadow-xl shadow-[#3b1c32] hover:shadow-[#149911] hover:scale-110 rounded-2xl row-span-1 "><div className="h-16 font-Alex font-light text-6xl flex justify-center items-center">Projects</div></li>
                </Link>
                <Link to={'/contact'} >
                    {/* contact link */}
                    <li className="bg-gradient-to-tr from-charcoal to-slate-500 transform shadow-xl shadow-[#3b1c32] hover:shadow-[#149911] hover:scale-110 rounded-2xl row-span-1 "><div className="h-16 font-Alex font-light text-6xl flex justify-center items-center">Contact</div></li>
                </Link>
                {/* skills icons */}
                <li className="bg-invisible transform rounded-2xl col-span-3"><div className=""> <Skills /> </div></li>
                {/* profile 2 */}
                <li className="bg-[#424b54] transform shadow-xl hover:shadow-[#149911] hover:scale-105 rounded-2xl col-span-1 row-span-2"><img className="w-full h-full rounded-2xl" src={Gojira} alt="movie poster of godzilla" /></li>
                {/* logo */}
                <li className="bg-invisible transform"><img className="rounded-3xl shadow-xl shadow-[#3b1c32] hover:shadow-[#149911] hover:scale-105 h-36 w-36 ml-36" src={Logo} alt="hulk personal logo" /></li>
                {/* skills icons continued */}
                <li className="bg-invisible transform rounded-2xl col-span-2"><div className=""> <Frameworks /> </div></li>
            </ul>
        </>
    );
}
export default Bento