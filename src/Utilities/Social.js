import LI from "../assets/LinkedIn_Logo.svg.png"
import GH from "../assets/Github.png"
import { Link } from "react-router-dom"

const social = [
    {
        path: "https://www.linkedin.com/in/c-jay-solly-16908a284/",
        pic: LI ,
        alt: "Logo for LinkedIn",
    },
    {
        path: "https://github.com/Csolly89",
        pic: GH ,
        alt: "Logo for Github"
    }
]

const Social = () => {
    return (
        <>
            <ul className='flex flex-row justify-center gap-10'>
                {social.map((item, i) => (
                    <Link className="" key={i} to={item.path} target="_blank" rel="noopener noreferrer">
                        <img className='w-full h-20' src={item.pic} alt={item.alt} />
                    </Link>
                ))
                }
            </ul>
        </>
    );
}
export default Social;