import { Link } from "react-router-dom";

import Logo from "../assets/image.png"
import Skills from "./Skills";
import Frameworks from "./Frameworks";



const Bento = () => {
    return (
        <>
            <ul className=" grid grid-cols-4 grid-rows-5 gap-20 m-12 px-12 pb-12 h-[85vh]">
                {/* profile picture */}
                <li className="bg-[#424b54] transform shadow-xl shadow-[#3b1c32] hover:shadow-[#149911] hover:scale-105 rounded-2xl row-span-3 col-span-2"><div className="h-24 text-center mt-48 ">Profile Picture</div></li>
                {/* social icons */}
                <li className="bg-invisible transform  shadow-xl shadow-[#3b1c32] hover:shadow-[#149911] hover:scale-105 rounded-2xl col-span-2"><div className="h-24 text-center ">Social Icons</div></li>
                    <Link to={'/about'} >
                        {/* about link */}
                        <li className="bg-[#424b54] transform shadow-xl shadow-[#3b1c32] hover:shadow-[#149911] hover:scale-105 rounded-2xl row-span-1"><div className="h-24 text-center font-Alex font-light text-4xl ">About me</div></li>
                    </Link>
                    <Link to={'/exp'} >
                        {/* exp link */}
                        <li className="bg-[#424b54] transform shadow-xl shadow-[#3b1c32] hover:shadow-[#149911] hover:scale-105 rounded-2xl row-span-1"><div className="h-24 text-center font-Alex font-light text-4xl "> Experience</div></li>
                    </Link>
                    <Link to={'/projects'} >
                        {/* project link */}
                        <li className="bg-[#424b54] transform shadow-xl shadow-[#3b1c32] hover:shadow-[#149911] hover:scale-105 rounded-2xl row-span-1"><div className="h-24 text-center font-Alex font-light text-4xl ">Projects</div></li>
                    </Link>
                    <Link to={'/contact'} >
                        {/* contact link */}
                        <li className="bg-[#424b54] transform shadow-xl shadow-[#3b1c32] hover:shadow-[#149911] hover:scale-105 rounded-2xl row-span-1"><div className="h-24 text-center font-Alex font-light text-4xl ">Contact</div></li>
                    </Link>
                {/* skills icons */}
                <li className="bg-invisible transform rounded-2xl col-span-3"><div className="h-24 text-center "> <Skills /> </div></li>
                {/* profile 2 */}
                <li className="bg-[#424b54] transform shadow-xl shadow-[#3b1c32] hover:shadow-[#149911] hover:scale-105 rounded-2xl col-span-1 row-span-2"><div className="h-24 text-center ">Profile 2</div></li>
                {/* logo */}
                <li className="bg-invisible transform"><img className="rounded-3xl shadow-xl shadow-[#3b1c32] hover:shadow-[#149911] hover:scale-105 h-36 w-36 ml-36" src={Logo} alt="hulk logo" /></li>
                {/* skills icons continued */}
                <li className="bg-invisible transform rounded-2xl col-span-2"><div className="h-24 text-center "> <Frameworks /> </div></li>
            </ul>
        </>
    );
}
export default Bento