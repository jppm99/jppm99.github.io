import { HashRouter } from 'react-router-dom';

import Navbar from './components/common/Navbar';
import Home from './components/home/Home';
import Skills from './components/skils/Skills';
import Projects from './components/projects/Projects';
import CV from './components/cv/CV';
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

                <Skills />
                <Projects />
                <CV />
                <Contact />
            </div>
        </HashRouter>
    );
}

export default App;
