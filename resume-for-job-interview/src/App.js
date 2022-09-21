// import logo from './logo.svg';
import {useEffect} from 'react';
import './App.css';
import Education from './components/Education/education';
import Experiences from './components/Experiences/experiences';
import Home from './components/Home/home';
import Navbar from './components/Navbar/Navbar';
import Skills from './components/Skills/skills';

function App() {

    useEffect(() => {
        document.title = "Wannarat"
    },[])
    return (
        <div className="App">
            <Navbar></Navbar>
            <div className="container">
                <Home></Home>
                <Education></Education>
                <Experiences></Experiences>
                <Skills></Skills>
            </div>
            {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
        </div>
    );
}

export default App;
