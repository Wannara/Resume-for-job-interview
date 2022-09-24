import './styles.css'
// import { AiFillGithub, AiFillPhone } from 'react-icons/ai'
// import { HiMail, HiLocationMarker } from 'react-icons/hi'
import {
  FaEnvelope,
  FaGithubSquare,
  FaMapPin,
  FaPhoneAlt,
} from 'react-icons/fa'

function ContactMe() {
  return (
    <div className="container-contact">
      <h1 className="topic-education">Contact Me</h1>
      <div className="content-contact">
        <div className="contact">
          <div className="picture">
            <FaMapPin size={30} />
          </div>
          <h3 className="text-contact">
            290/27 Mu Baan Rungthana3, Village No.3,
            <br />
            San Pu Loei Sub-district, Doi Saket district, Chiang Mai, 50220
          </h3>
        </div>

        <div className="contact">
          <div className="picture">
            <FaEnvelope size={30} />
          </div>
          <h3 className="text-contact">wannarat.boonwong@gmail.com</h3>
        </div>

        <div className="contact">
          <div className="picture">
            <FaPhoneAlt size={30} />
          </div>
          <h3 className="text-contact">061-3426-963</h3>
        </div>

        <div className="contact">
          <div className="picture">
            <FaGithubSquare size={30} />
          </div>
          <h3 className="text-contact">github.com/Wannara</h3>
        </div>
      </div>
    </div>
  )
}

export default ContactMe
