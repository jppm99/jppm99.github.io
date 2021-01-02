import { HashRouter } from 'react-router-dom';

import Navbar from './components/common/Navbar';
import Home from './components/home/Home';
import CV from './components/cv/CV';
import Skills from './components/skils/Skills';
import Projects from './components/projects/Projects';
import Contact from './components/contact/Contact';

import './App.css';

function App() {
    return (
        <HashRouter>
            <div id="body">
                <div className="home-background">
                    <Navbar />
                    <Home />
                </div>

                <CV />
                <Skills />
                <Projects />
                <Contact />
            </div>
        </HashRouter>
    );
}

export default App;
