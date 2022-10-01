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
            <a href="/">Home</a>
            <a href="/">Education</a>
            <a href="/">Experiences</a>
            <a href="/">Skills</a>
            <a href="/">Contact Me</a>
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
            <a href="/">
              <FaHome />
              Home
            </a>
            <a href="/">
              <FaUserGraduate />
              Education
            </a>
            <a href="/">
              <FaUserGraduate />
              Experiences
            </a>
            <a href="/">
              <FaUserGraduate />
              Skills
            </a>
            <a href="/">
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
