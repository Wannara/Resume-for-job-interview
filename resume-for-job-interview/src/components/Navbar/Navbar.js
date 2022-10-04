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
            <a
              href="#home"
              onClick={() => {
                setIsOpen(!isOpen)
              }}
            >
              <FaHome />
              Home
            </a>
            <a
              href="#education"
              onClick={() => {
                setIsOpen(!isOpen)
              }}
            >
              <FaUserGraduate />
              Education
            </a>
            <a
              href="#experiences"
              onClick={() => {
                setIsOpen(!isOpen)
              }}
            >
              <FaUserGraduate />
              Experiences
            </a>
            <a
              href="#skills"
              onClick={() => {
                setIsOpen(!isOpen)
              }}
            >
              <FaUserGraduate />
              Skills
            </a>
            <a
              href="#Contact Me"
              onClick={() => {
                setIsOpen(!isOpen)
              }}
            >
              <FaUserGraduate />
              Contact Me
            </a>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar
