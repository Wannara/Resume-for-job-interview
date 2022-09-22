import './styles.css'
function Home() {
  return (
    <>
      <div className="container-home">
        <div className="content">
          <h1 className="topic">Hi, I’m Wannarat</h1>
          <h3 className="detail-description">
            I am a graduated from Department of Computer science Faculty of
            science Chiangmai University. I am looking for a job in Front-End
            developer position, using my skills and knowledge to great effect
            for your company.
          </h3>
        </div>
        <div className="profile">
          <img
            className="img-profile"
            src={require('../../asset/wannart-image.jpg')}
            alt="wannarat=pic"
          />
        </div>
      </div>
    </>
  )
}

export default Home
