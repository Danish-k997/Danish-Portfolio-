import Navbar from "../app/Components/Navbar";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import Service from "./Components/Service";
import Contact from "./Components/Contact";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero/>
      <About/>
      <Skills/>
      <Projects/>
      <Service/>
      <Contact/>
    </div>
  );
}
