import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './App.css';

function App() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <Hero />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <footer className="bg-slate-950 py-8 border-t border-slate-900 text-center">
        <p className="text-slate-500 font-medium tracking-wide">
          © {new Date().getFullYear()} Akash.dev. All rights reserved.
        </p>
      </footer>
    </>
  );
}

export default App;
