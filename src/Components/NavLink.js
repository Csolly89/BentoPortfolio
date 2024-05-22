import { Link } from "react-router-dom";

const NavLink = ({ href, title }) => {
    return (
        <Link to={href} className="block py-2 ">
            {title}
        </Link>
    )
}

export default NavLink