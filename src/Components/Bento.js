import Logo from "../assets/image.png"
const Bento = () => {
    return (
        <>
            <ul className=" grid grid-cols-4 grid-rows-5 gap-24 m-12 px-10">
                {/* profile picture */}
                <li className="bg-[#424b54] shadow-xl shadow-[#3b1c32] hover:shadow-[#149911] hover:scale-110 rounded-2xl row-span-3 col-span-2"><div className="h-24 text-center mt-48">Profile Picture</div></li>
                {/* social icons */}
                <li className="bg-[#424b54] shadow-xl shadow-[#3b1c32] hover:shadow-[#149911] hover:scale-110 rounded-2xl col-span-2"><div className="h-24 text-center ">Social Icons</div></li>
                {/* about link */}
                <li className="bg-[#424b54] shadow-xl shadow-[#3b1c32] hover:shadow-[#149911] hover:scale-110 rounded-2xl row-span-1"><div className="h-24 text-center ">About me</div></li>
                {/* exp link */}
                <li className="bg-[#424b54] shadow-xl shadow-[#3b1c32] hover:shadow-[#149911] hover:scale-110 rounded-2xl row-span-1"><div className="h-24 text-center "> Experience/Education</div></li>
                {/* project link */}
                <li className="bg-[#424b54] shadow-xl shadow-[#3b1c32] hover:shadow-[#149911] hover:scale-110 rounded-2xl row-span-1"><div className="h-24 text-center ">Projects</div></li>
                {/* contact link */}
                <li className="bg-[#424b54] shadow-xl shadow-[#3b1c32] hover:shadow-[#149911] hover:scale-110 rounded-2xl row-span-1"><div className="h-24 text-center ">Contact</div></li>
                {/* skills icons */}
                <li className="bg-[#424b54] shadow-xl shadow-[#3b1c32] hover:shadow-[#149911] hover:scale-110 rounded-2xl col-span-3"><div className="h-24 text-center ">Skills icons</div></li>
                {/* profile 2 */}
                <li className="bg-[#424b54] shadow-xl shadow-[#3b1c32] hover:shadow-[#149911] hover:scale-110 rounded-2xl col-span-1 row-span-2"><div className="h-24 text-center ">Profile 2</div></li>
                {/* logo */}
                <li className="bg-invisible"><img className="rounded-3xl shadow-xl shadow-[#3b1c32] hover:shadow-[#149911] hover:scale-110 h-36 w-36 ml-36" src={Logo} alt="hulk logo" /></li>
                {/* skills icons continued */}
                <li className="bg-[#424b54] shadow-xl shadow-[#3b1c32] hover:shadow-[#149911] hover:scale-110 rounded-2xl col-span-2"><div className="h-24 text-center ">Skills continued</div></li>
            </ul>
        </>
    );
}
export default Bento