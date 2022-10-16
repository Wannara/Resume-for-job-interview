import styles from './styles.module.css'
import { FaBars, FaHome, FaUserGraduate, FaPhoneAlt, FaFile, FaScrewdriver } from 'react-icons/fa'
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
              <span className={styles.anchor}>
                <FaHome />
              </span>
              Home
            </a>
            <a
              href="#education"
              onClick={() => {
                setIsOpen(!isOpen)
              }}
            >
              <span className={styles.anchor}>
                <FaUserGraduate />
              </span>
              Education
            </a>
            <a
              href="#experiences"
              onClick={() => {
                setIsOpen(!isOpen)
              }}
            >
              <span className={styles.anchor}>
                <FaFile />
              </span>
              Experiences
            </a>
            <a
              href="#skills"
              onClick={() => {
                setIsOpen(!isOpen)
              }}
            >
              <span className={styles.anchor}>
                <FaScrewdriver />
              </span>
              Skills
            </a>
            <a
              href="#ContactMe"
              onClick={() => {
                setIsOpen(!isOpen)
              }}
            >
              <span className={styles.anchor}>
                <FaPhoneAlt />
              </span>
              Contact Me
            </a>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar
