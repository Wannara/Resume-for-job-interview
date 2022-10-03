import './styles.css'
import { FaBars, FaHome, FaUserGraduate } from 'react-icons/fa'
import { useState } from 'react'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <nav className="nav">
        <div className="container-nav">
          <div className="site-title-left">
            <a href="/">Wannarat</a>
          </div>
          <div className="site-title-right">
            <a href="#home">Home</a>
            <a href="#education">Education</a>
            <a href="#experiences">Experiences</a>
            <a href="#skills">Skills</a>
            <a href="#Contact Me">Contact Me</a>
          </div>
          <div
            className="icon"
            onClick={() => {
              setIsOpen(!isOpen)
            }}
          >
            <FaBars />
          </div>
        </div>

        <div className="container-nav-mobile">
          <div className={!isOpen ? 'row non-active' : 'row'}>
            <a href="#home">
              <FaHome />
              Home
            </a>
            <a href="#education">
              <FaUserGraduate />
              Education
            </a>
            <a href="#experiences">
              <FaUserGraduate />
              Experiences
            </a>
            <a href="#skills">
              <FaUserGraduate />
              Skills
            </a>
            <a href="#Contact Me">
              <FaUserGraduate />
              Contact Me
            </a>
          </div>

          {/*<div className="row-1">*/}
          {/*  <div className="icon-nav">*/}
          {/*    <FaHome />*/}
          {/*    <a href="/">Home</a>*/}
          {/*  </div>*/}

          {/*  <div className="icon-nav">*/}
          {/*    <FaHome />*/}
          {/*    <a href="/">Education</a>*/}
          {/*  </div>*/}

          {/*  <div className="icon-nav">*/}
          {/*    <FaHome />*/}
          {/*    <a href="/">Experiences</a>*/}
          {/*  </div>*/}
          {/*</div>*/}

          {/*<div className="row-1">*/}
          {/*  <div className="icon-nav">*/}
          {/*    <FaHome />*/}
          {/*    <a href="/">Skills</a>*/}
          {/*  </div>*/}

          {/*  <div className="icon-nav">*/}
          {/*    <FaHome />*/}
          {/*    <a href="/">Contact Me</a>*/}
          {/*  </div>*/}
          {/*</div>*/}
        </div>
      </nav>
    </>
  )
}

export default Navbar
