import styles from './styles.module.css'
function Home() {
  return (
    <>
      <div id="home" className={styles.containerHome}>
        <div className={styles.content}>
          <h1 className={styles.topic}>Hi, I’m Wannarat</h1>
          <h3 className={styles.detailDescription}>
            I am a graduated from Department of Computer science Faculty of science Chiangmai University. I am looking
            for a job in Front-End developer position, using my skills and knowledge to great effect for your company.
          </h3>
        </div>
        <div className={styles.profile}>
          <img className={styles.imgProfile} src={require('../../asset/wannart-image.jpg')} alt="wannarat=pic" />
        </div>
      </div>
    </>
  )
}

export default Home
