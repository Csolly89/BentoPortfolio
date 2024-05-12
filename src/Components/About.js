import Navbar from "./Navbar";

const About = () => {
    return (
        <>
            <Navbar />
            <article>
                <section className="">
                    {/* first section*/}
                    <div className="grid grid-cols-1 sm:grid-cols-12">
                        <div className="col-span-7 place-self-center text-center sm:text-left">
                            <h1 className="text-black mb-4 text-4xl">
                                <span className="">
                                    Hello, I'm{" "}
                                </span>
                                <br></br>
                            </h1>
                            <p className=" text-black">
                                Lorem Ipsum Amet irure aute do ipsum Lorem dolore qui ullamco.
                            </p>
                        </div>
                        {/* 2nd container with Logo/img  */}
                        <div className="col-span-5 place-self-center mt-4 lg:mt-0">
                            <div className="rounded-full bg-gradient-to-br from-black to-green-700 w-[250px] h-[250px] relative lg:w-[375px] lg:h-[305px] mt-4">
                            
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    {/* 2nd section, img on left */}
                    <div className="grid grid-cols-1 sm:grid-cols-12">
                        <div className="col-span-5 place-self-center mt-4 lg:mt-0">
                            <div className="rounded-full bg-gradient-to-br from-black to-green-700 w-[250px] h-[250px] relative lg:w-[375px] lg:h-[305px] mt-4">
                            
                            </div>
                        </div>
                        {/* 2nd container with Logo/img  */}
                        <div className="col-span-7 place-self-center text-center sm:text-left">
                            <h1 className="text-black mb-4 text-4xl">
                                <span className="">
                                    Hello, I'm{" "}
                                </span>
                                <br></br>
                            </h1>
                            <p className=" text-black">
                                Lorem Ipsum Amet irure aute do ipsum Lorem dolore qui ullamco.
                            </p>
                        </div>
                    </div>
                </section>
                <section>
                    {/* Third section*/}
                    <div className="grid grid-cols-1 sm:grid-cols-12">
                        <div className="col-span-7 place-self-center text-center sm:text-left">
                            <h1 className="text-black mb-4 text-4xl ">
                                <span className="">
                                    Hello, I'm{" "}
                                </span>
                                <br></br>
                            </h1>
                            <p className=" text-black">
                                Lorem Ipsum Amet irure aute do ipsum Lorem dolore qui ullamco.
                            </p>
                        </div>
                        {/* 2nd container with Logo/img  */}
                        <div className="col-span-5 place-self-center mt-4 lg:mt-0">
                            <div className="rounded-full bg-gradient-to-br from-black to-green-700 w-[250px] h-[250px] relative lg:w-[375px] lg:h-[305px] mt-4">
                            
                            </div>
                        </div>
                    </div>
                </section>
            </article>
        </>
    );
}
export default About;


