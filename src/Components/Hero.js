// import wave from "../assets/wave-haikei.png"
import Bg from "../assets/greenGradient.png"
import Bento from "./Bento"
import Profile from "../assets/H3.png"

const Hero = () => {
    return (
        <div className="absolute ">
            <img className="w-full h-full fixed object-fill" src={Bg} alt="gradient background" />
            <div className="text-center relative top-0 mt-16 text-[#fffbfe] h-[100svh] grid grid-cols-12">
                <div className="cols-span-8">
                    <h1 className="font-Alex text-[25rem] ml-[.8em] mt-[1.2em] mix-blend-soft-light -rotate-90 relative z-10">Solly</h1>
                    <img className="absolute top-[15em] left-[5em]" src={Profile} alt="Profile of the hulk screaming" />
                </div>
                <div className="cols-span-4 text-center text-textwhite relative left-[35em] top-[32%] w-full">
                    <h1 className="font-Alex text-8xl w-[10em]">Hello & Welcome</h1>
                    <h2 className="text-3xl font-Prompt ml-28 w-[30em]">I am a Web Developer!</h2>
                </div>
            </div>
        {/* <img className="w-[100vw] relative bottom-20" src={wave} alt="wave design for page break"/> */}
        <Bento />

        </div>
    );
}
export default Hero;