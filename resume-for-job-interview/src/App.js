// import logo from './logo.svg';

import styles from './App.module.css'
import Education from './components/Education/education'
import Experiences from './components/Experiences/experiences'
import Home from './components/Home/home'
import Navbar from './components/Navbar/Navbar'
import Skills from './components/Skills/skills'
import ContactMe from './components/ContactMe/contact-me'

function App() {
  return (
    <div className={styles.App}>
      <Navbar />
      <div className={styles.container}>
        <Home></Home>
        <Education />
        <Experiences />
        <Skills />
        <ContactMe />
      </div>
      <div className={styles.footer}>© Wannarat. All right reserved</div>
    </div>
  )
}

export default App
