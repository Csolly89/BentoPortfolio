import NavLink from "./NavLink";
import navLinks from "../Utilities/navlinks";

const Navbar = () => {
    return (
        <>
            <div className="card">
                <ul className="flex p-4 w-[100svw] flex-row justify-between space-x-8 mt-0 font-Prompt text-2xl z-10 bg-[#111d13] text-[#fffbfe]">
                    {navLinks.map((link, index) => (
                        <li className="px-24" key={index}>
                            <NavLink href={link.path} title={link.title} />
                        </li>
                    ))
                    }
                </ul>
            </div>
        </>
    );
}
export default Navbar;