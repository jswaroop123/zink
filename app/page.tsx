// zink-portfolio/app/page.tsx
import About from "./components/About";
import Services from "./components/Services";
import Skills from "./components/Skills";
import Contact from "./contact/page";

export default function Home() {
  return (
    <div className="space-y-10">
      <About />
      <Services />
      <Skills />
      <Contact />
    </div>
  );
}

