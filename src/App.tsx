import { useEffect } from "react";
import GradientBackground from "./components/GradientBackground";
import About from "./sections/About";
import Experience from "./sections/Experience";
import Footer from "./sections/Footer";
import Header from "./sections/Header";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";
import Summary from "./sections/Summary";

function App() {
    useEffect(() => {
        // Update document title
        document.title = "Shubhanshu Tiwari | Developer & Creative";
    }, []);

    return (
        <div className="font-sans bg-background text-neutral-800">
            <GradientBackground />
            <Header />
            <About />
            <Summary />
            <Projects />
            <Experience />
            <Skills />
            <Footer />
        </div>
    );
}

export default App;
