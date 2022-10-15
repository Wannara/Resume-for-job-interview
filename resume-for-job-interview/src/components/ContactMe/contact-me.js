import styles from './styles.module.css'
import { FaEnvelope, FaGithubSquare, FaPhoneAlt } from 'react-icons/fa'

function ContactMe() {
  return (
    <div id="ContactMe" className={styles.containerContact}>
      <h1 className={styles.topicContact}>Contact Me</h1>
      <div className={styles.contentContact}>
        <div className={styles.contact}>
          <div className={styles.picture}>
            <FaEnvelope size={30} />
          </div>
          <h3 className={styles.textContact}>wannarat.boonwong@gmail.com</h3>
        </div>

        <div className={styles.contact}>
          <div className={styles.picture}>
            <FaPhoneAlt size={30} />
          </div>
          <h3 className={styles.textContact}>061-3426-963</h3>
        </div>

        <div className={styles.contact}>
          <div className={styles.picture}>
            <FaGithubSquare size={30} />
          </div>
          <h3 className={styles.textContact}>github.com/Wannara</h3>
        </div>
      </div>
    </div>
  )
}

export default ContactMe
