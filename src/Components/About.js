import Navbar from "./Navbar";
import green from "../assets/greenGradient.png"
import Hulk from "../assets/Hulk2.jpg"


const About = () => {
    return (
        <>
            <div className="sticky top-0 z-10 overflow-hidden mb-16"> <Navbar /> </div>
            <img className="w-full h-[100vh] top-0 fixed z-[-10]  object-fill" src={green} alt="gradient background" />
            <article className="mt-[4em] font-Sans text-textwhite pb-44">
                    {/* first section*/}
                <section>
                    <div className="grid grid-cols-12">
                        <div className="col-span-8 place-self-center text-left ml-20 mt-16">
                            <h1 className="text-7xl font-Alex ml-10">
                                Well hello there,
                                <br></br>
                            </h1>
                            <p className="text-md First font-Prompt font-light mb-12 leading-8">
                                My name is Christopher Solly but I prefer to go by C-jay. I am a Web Designer and Front end Developer. Since graduating <span className="pl-[.2em]"> highschool </span>I have been working my way through retail stores starting off as a bag-boy and eventually up to being 3rd in line for store management as Perishable/Meat manager. After
                                having my daughter and looking forward in our lives, made the decision to change careers and jump into a Software Development bootcamp through NC State and ThriveDx in hopes to express my artistic flare and turn it into a more profitable and work/life balanced career.
                                I am an outgoing person that has no problem talking with others and making lasting connections;<span className="text-xs  mx-1 text-accent">(unless you're a Raiders fan...Go Bronco's!!).</span> I am a diehard football fanatic being a fan of the Denver Bronco's and a Semi-pro Left Tackle player as well for the last 7 years.
                                Other favorites of mine include Star Wars, the Monsterverse as a whole (Godzilla/Kong/Pacific Rim), Marvel comics and movies <span className="text-xs mx-1 text-accent"> (mainly the inifity saga, its dropped off hard since then)</span> and since becoming a Butcher about 10 years ago, always in the mood for a damn good steak. I fully believe
                                life is too short to waste time on bs and not be the most honest version of yourself you can be and not have fun while you're still here. I also have a horrible habbit of screaming Arnold Schwarzenegger while impersonating his accent.
                            I finished my bootcamp with ThriveDx and NC State at the end of March 2024 and am currently working as a independent contractor with CodeNurturers LLC and hopefully soon a pt data entry specialist with PFF. 
                            Would love to get connected with you for any design or development work that you would like for me to take a shot at. Sincerly hope you have a wonderful day.
                            </p>
                        </div>
                        {/* 2nd container with Logo/img  */}
                        <div className="col-span-4 place-self-center mt-4 lg:mt-0">
                            <div className="rounded-full bg-gradient-to-br from-black to-green-700 w-[250px] h-[250px] relative lg:w-[375px] lg:h-[305px] mt-4 overflow-hidden">
                                <img className="relative bottom-5" src={Hulk} alt="passive hulk against a wall" />
                            </div>
                        </div>
                    </div>
                </section>
            </article>
        </>
    );
}
export default About;


