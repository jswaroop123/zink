// zink-portfolio/app/page.tsx
import About from "./components/About";
import Services from "./components/Services";
import Skills from "./components/Skills";


export default function Home() {
  return (
    <div className="space-y-10">
      <About />
      <Services />
      <Skills />
    </div>
  );
}

