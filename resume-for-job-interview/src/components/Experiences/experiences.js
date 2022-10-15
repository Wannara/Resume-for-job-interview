import styles from '../Education/styles.module.css'
function Experiences() {
  return (
    <>
      <div id="experiences" className={styles.containerEducation}>
        <h1 className={styles.topicEducation}>Experiences</h1>
        <div className={styles.contentEducation}>
          <div className={styles.timeLine}>
            <div className={styles.textContent}>
              <h3 className={styles.textYear}>
                June - August 2022 <br />
                Developer
              </h3>
            </div>

            <div className={styles.pipe}>
              <div className={styles.circle}></div>
              <div className={styles.line}></div>
            </div>

            <div className={styles.textContent}>
              <h3 className={styles.textStudy}>
                Tradition Asia <br />
                Junior Web Developer
              </h3>
            </div>
          </div>

          <div className={styles.timeLine}>
            <div className={styles.textContent}>
              <h3 className={styles.textYear}>
                June - Octorber 2021 <br />
                Cooperative education
              </h3>
            </div>

            <div className={styles.pipe}>
              <div className={styles.circle}></div>
              <div className={styles.line}></div>
            </div>

            <div className={styles.textContent}>
              <h3 className={styles.textStudy}>
                Manao Software Co., Ltd. <br />
                Junior Web Developer
              </h3>
            </div>
          </div>

          <div className={styles.timeLine}>
            <div className={styles.textContent}>
              <h3 className={styles.textYear}>
                May - June 2021 <br />
                Internship
              </h3>
            </div>

            <div className={styles.pipe}>
              <div className={styles.circle}></div>
              <div className={styles.line}></div>
            </div>

            <div className={styles.textContent}>
              <h3 className={styles.textStudy}>
                Manao Software Co., Ltd. <br />
                Junior Web Developer
              </h3>
            </div>
          </div>
        </div>

        <div className={styles.educationMobile}>
          <div className={styles.timeLine}>
            <div className={styles.pipe}>
              <div className={styles.circle}></div>
              <div className={styles.line}></div>
            </div>

            <div className={styles.textContent}>
              <h3 className={styles.textYear}>
                June - August 2022 <br />
                Developer
              </h3>

              <h3 className={styles.textStudy}>
                Tradition Asia <br />
                Junior Web Developer
              </h3>
            </div>
          </div>

          <div className={styles.timeLine}>
            <div className={styles.pipe}>
              <div className={styles.circle}></div>
              <div className={styles.line}></div>
            </div>

            <div className={styles.textContent}>
              <h3 className={styles.textYear}>
                June - Octorber 2021 <br />
                Cooperative education
              </h3>

              <h3 className={styles.textStudy}>
                Manao Software Co., Ltd. <br />
                Junior Web Developer
              </h3>
            </div>
          </div>

          <div className={styles.timeLine}>
            <div className={styles.pipe}>
              <div className={styles.circle}></div>
              <div className={styles.line}></div>
            </div>

            <div className={styles.textContent}>
              <h3 className={styles.textYear}>
                May - June 2021 <br />
                Internship
              </h3>

              <h3 className={styles.textStudy}>
                Manao Software Co., Ltd. <br />
                Junior Web Developer
              </h3>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Experiences
