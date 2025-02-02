import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Education from "./components/Education";
// import Testimonials from "./components/Testimonials";

export default function App() {
    return (
        <main>
            <Navbar/>
            <About/>
            <Education/>
            <Projects/>
            <Skills/>
            <Contact/>
        </main>
    );
}

