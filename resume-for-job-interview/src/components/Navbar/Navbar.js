import styles from './styles.module.css'
import { FaBars, FaHome, FaUserGraduate } from 'react-icons/fa'
import { useState } from 'react'
import clsx from 'clsx'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <nav className={styles.nav}>
        <div className={styles.containerNav}>
          <div className={styles.siteTitleLeft}>
            <a href="/">Wannarat</a>
          </div>
          <div className={styles.siteTitleRight}>
            <a href="#home">Home</a>
            <a href="#education">Education</a>
            <a href="#experiences">Experiences</a>
            <a href="#skills">Skills</a>
            <a href="#ContactMe">Contact Me</a>
          </div>
          <div
            className={styles.icon}
            onClick={() => {
              setIsOpen(!isOpen)
            }}
          >
            <FaBars />
          </div>
        </div>

        <div className={styles.containerNavMobile}>
          <div className={clsx(styles.row, !isOpen ? styles.nonActive : '')}>
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
              href="#ContactMe"
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
