import wave from "../assets/wave-haikei.png"
import Bg from "../assets/blurry-gradient-haikei.png"
import Bento from "./Bento"


const Hero = () => {
    return (
        <div className="absolute ">
            <img className="w-full h-full fixed object-fill" src={Bg} alt="gradient background" />
            <div className="text-center relative top-0 mt-16 text-[#fffbfe] h-[100svh]">
                <h1 className="font-Alex content-stretch h-full text-[25rem] ml-[-1.65em] mt-[-.12em] mix-blend-overlay -rotate-90 ">Solly</h1>
                {/* <h1 className="font-Alex text-6xl">Welcome</h1>
                <h2 className="font-Prompt text-4xl">I am </h2>
                <p className="font-Cursive text-4xl">a Web Designer</p>
                <p className="font-Cursive text-4xl">a Software Developer</p>
                <p className="font-Cursive text-4xl">a Ui/Ux Designer</p>
                <p className="font-Gov text-6xl">Da Governatah!!!!</p> */}
        <img className="w-[100vw] relative bottom-20" src={wave} alt="wave design for page break"/>
            </div>
        <Bento />

        </div>
    );
}
export default Hero;