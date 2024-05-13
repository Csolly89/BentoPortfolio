import Navbar from "./Navbar";
import green from "../assets/greenGradient.png"


const Exp = () => {
    return (
        <>
        <img className="w-full h-[100vh] top-0 fixed z-[-10]  object-fill" src={green} alt="gradient background" />
        <div className="sticky top-0 z-10 overflow-hidden "> <Navbar /> </div>
        <h1>Experience</h1>
        </>
    );
}
export default Exp;