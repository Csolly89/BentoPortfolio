import Hero from "./Components/Hero"
import Bento from "./Components/Bento"
import Bg from "./assets/blurry-gradient-haikei.png"

function App() {
  return (
    <div className="text-[#fffbfe]">
      <img className="w-full h-full sticky -z-10 top-0 object-fill" src={Bg} alt="gradient background" />
      <section className="absolute top-0 w-full"> <Hero /> </section>
      <section className="pb-28" > <Bento /> </section>
    </div>
  );
}

export default App;
