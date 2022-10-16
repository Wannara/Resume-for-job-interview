import styles from './styles.module.css'
import { FaEnvelope, FaGithubSquare, FaLinkedin } from 'react-icons/fa'

function ContactMe() {
  return (
    <div id="ContactMe" className={styles.containerContact}>
      <h1 className={styles.topicContact}>Contact Me</h1>
      <div className={styles.contentContactMe}>
        <div className={styles.contentContact}>
          <div className={styles.contact}>
            <div className={styles.picture}>
              <FaEnvelope size={30} />
            </div>
            <h3 className={styles.textContact}>wannarat.boonwong@gmail.com</h3>
          </div>

          <div className={styles.contact}>
            <div className={styles.picture}>
              <FaLinkedin size={30} />
            </div>
            <a
              href="https://www.linkedin.com/in/wannarat-boonwong-a44478236
"
            >
              <h3 className={styles.textContact}>Wannarat Boonwong</h3>
            </a>
          </div>

          <div className={styles.contact}>
            <div className={styles.picture}>
              <FaGithubSquare size={30} />
            </div>
            <a href="https://github.com/Wannara">
              <h3 className={styles.textContact}>github.com/Wannara</h3>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactMe
