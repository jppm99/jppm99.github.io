import React from 'react'
import { HashRouter } from 'react-router-dom';

import './App.css';

import Navbar from './components/common/Navbar';
import Home from './components/home/Home';
import Skills from './components/skils/Skills';
import Contact from './components/contact/Contact';

const CV = React.lazy(() => import('./components/cv/CV'));
const Projects = React.lazy(() => import('./components/projects/Projects'));

function App() {
    console.warn("Hello fellow engineer");
    return (
        <HashRouter>
            <div id="body">
                <div className="home-background">
                    <Navbar />
                    <Home />
                </div>

                <Skills />
                
                <React.Suspense fallback={<div className="projects-background">loading..</div>} >
                    <Projects />
                </React.Suspense>

                <React.Suspense fallback={<div className="cv-background">loading..</div>} >
                    <CV />
                </React.Suspense>

                <Contact />
            </div>
        </HashRouter>
    );
}

export default App;
