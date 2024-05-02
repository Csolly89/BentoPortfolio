import wave from "../assets/wave-haikei.png"

const Hero = () => {
    return (
        <>
        <div className="text-center mt-16 relative top-48">

        <h1 className="font-Alex text-6xl">Hello</h1>
        <h1 className="font-Cursive text-6xl">Welcome</h1>
        <h2 className="font-Prompt text-6xl">I am </h2>
        <p className="font-Prompt text-4xl">a <span className="font-Cursive text-6xl">Web Designer</span></p>
        <p className="font-Prompt text-4xl">a <span className="font-Cursive text-6xl">Software Developer</span></p>
        <p className="font-Prompt text-4xl">a <span className="font-Cursive text-6xl">Ui/Ux Designer</span></p>
        <p className="font-Gov text-6xl">Da Governatah!!!!</p>
        </div>
        <img className="w-full relative bottom-96" src={wave} alt="wave design for page break"/>
        </>
    );
}
export default Hero;