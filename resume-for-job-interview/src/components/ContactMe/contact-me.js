import './styles.css'
import { AiFillGithub, AiFillPhone } from 'react-icons/ai'
import { HiMail, HiLocationMarker } from 'react-icons/hi'

function ContactMe() {
  return (
    <div className="container-contact">
      <h1 className="topic-education">Contact Me</h1>
      <div className="content-contact">
        <div className="contact">
          <HiLocationMarker size={50} />
          <h3 className="text-contact">
            290/27 Mu Baan Rungthana3, Village No.3,
            <br />
            San Pu Loei Sub-district, Doi Saket district, Chiang Mai, 50220
          </h3>
        </div>

        <div className="contact">
          <HiMail size={50} />
          <h3 className="text-contact">wannarat.boonwong@gmail.com</h3>
        </div>

        <div className="contact">
          <AiFillPhone size={50} />
          <h3 className="text-contact">061-3426-963</h3>
        </div>

        <div className="contact">
          <AiFillGithub size={50} />
          <h3 className="text-contact">github.com/Wannara</h3>
        </div>
      </div>
    </div>
  )
}

export default ContactMe
