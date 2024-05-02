import { Link } from "react-router-dom";
import NavLink from "./NavLink";
import navLinks from "../Utilities/navlinks";

const Navbar = () => {
    return (
        <>
        <div className="menu hidden md:block md:w-auto" id="navbar">
            <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
                {navLinks.map((link, index) => (
                    <li key={index}>
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