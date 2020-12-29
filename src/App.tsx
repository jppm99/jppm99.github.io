import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './components/home/Home';
import CV from './components/cv/CV';
import Skills from './components/skils/Skills';
import Projects from './components/projects/Projects';
import Contact from './components/contact/Contact';

import './App.css';

function App() {
    return (
        <Router forceRefresh>
            <Route exact path="/" component={Home} />
            <Route exact path="/CV" component={CV} />
            <Route exact path="/Skills" component={Skills} />
            <Route exact path="/Projects" component={Projects} />
            <Route exact path="/Contact" component={Contact} />
        </Router>
    );
}

export default App;
