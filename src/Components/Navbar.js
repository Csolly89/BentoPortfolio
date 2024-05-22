import NavLink from "./NavLink";
import navLinks from "../Utilities/navlinks";

const Navbar = () => {
    return (
        <>
            <div className="card">
                <ul className="flex flex-row p-4 w-full justify-center m font-Prompt text-2xl z-10 bg-eerie text-textwhite">
                    {navLinks.map((link, index) => (
                        <li className="px-24 mr-10" key={index}>
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