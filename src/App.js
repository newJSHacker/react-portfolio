import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './contents/Home'
import About from './contents/About'
import Education from './contents/Education'
import Skills from './contents/Skills'
import Contact from './contents/Contact'

function App(){
    return(
        <Router>
            <div className="App">
                <Navbar />
                <Route exact path="/react-portfolio">
                    <Home />
                </Route>
                <Route path="/react-portfolio/about">
                    <About />
                </Route>
                <Route path="/react-portfolio/education">
                    <Education/>
                </Route>
                <Route path="/react-portfolio/skills">
                    <Skills/>
                </Route>
                <Route path="/react-portfolio/contact">
                    <Contact />
                </Route>
            </div>
        </Router>
    )
}

export default App