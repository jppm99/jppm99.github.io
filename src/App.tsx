import React from 'react'
import { HashRouter } from 'react-router-dom';

import './App.css';

import Navbar from './components/common/Navbar';
import Home from './components/home/Home';
import Skills from './components/skils/Skills';

const Projects = React.lazy(() => import('./components/projects/Projects'));
const Contact = React.lazy(() => import('./components/contact/Contact'));


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

                <React.Suspense fallback={<div className="contact-background">loading..</div>} >
                    <Contact />
                </React.Suspense>
            </div>
        </HashRouter>
    );
}

export default App;
