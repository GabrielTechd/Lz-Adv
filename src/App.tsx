import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { PracticeAreas } from "./components/PracticeAreas";
import { Team } from "./components/Team";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Stats } from "./components/Stats";
import { Differentials } from "./components/Differentials";
import { Process } from "./components/Process";
import { Testimonials } from "./components/Testimonials";
import { FAQ } from "./components/FAQ";
import { Blog } from "./components/Blog";
import { FloatingWhatsApp } from "./components/FloatingWhatsApp";

export default function App() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      <Header />
      <Hero />
      <Stats />
      <About />
      <Differentials />
      <PracticeAreas />
      <Team />
      <Process />
      <Testimonials />
      <FAQ />
      <Blog />
      <Contact />
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}