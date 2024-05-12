import NavLink from "./NavLink";
import navLinks from "../Utilities/navlinks";

const Navbar = () => {
    return (
        <>
        <div className="flex h-[4em] w-full flex-col items-center justify-center text-[#fffbfe]">
            <div className="card-wrapper w-full h-[4em]">
                <div className="card-content h-[5em] w-[100vw]" id="navbar">
                    <ul className="flex p-4 md:p-0 md:flex-row justify-between mx-24 md:space-x-8 mt-0 font-Prompt text-2xl text-[#fffbfe]">
                        {navLinks.map((link, index) => (
                            <li key={index}>
                                <NavLink href={link.path} title={link.title} />
                            </li>
                        ))
                        }
                    </ul>
                </div>
            </div>
        </div>
        </>
    );
}
export default Navbar;