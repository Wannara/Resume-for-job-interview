import styles from './styles.module.css'
function Education() {
  return (
    <>
      <div id="education" className={styles.containerEducation}>
        <h1 className={styles.topicEducation}>Education</h1>
        <div className={styles.contentEducation}>
          <div className={styles.timeLine}>
            <div className={styles.textContent}>
              <h3 className={styles.textYear}>
                2017 - 2021 <br />
                Chiang Mai University
                <br />
                GPAX 3.21
              </h3>
            </div>

            <div className={styles.pipe}>
              <div className={styles.circle}></div>
              <div className={styles.line}></div>
            </div>

            <div className={styles.textContent}>
              <h3 className={styles.textStudy}>
                Bachelor of Science in <span className={styles.whiteSpace}>Computer Science </span>
                <br />
                Minor in Data Science
              </h3>
            </div>
          </div>

          <div className={styles.timeLine}>
            <div className={styles.textContent}>
              <h3 className={styles.textYear}>
                2013 - 2015 <br />
                Fakkwan Wittayakom School
                <br />
                GPAX 3.86
              </h3>
            </div>

            <div className={styles.pipe}>
              <div className={styles.circle}></div>
              <div className={styles.line}></div>
            </div>

            <div className={styles.textContent}>
              <h3 className={styles.textStudy}>Science - Mathematics Program</h3>
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
                2017 - 2021 <br />
                Chiang Mai University
                <br />
                GPAX 3.21
              </h3>

              <h3 className={styles.textStudy}>
                Bachelor of Science in <span className={styles.whiteSpace}>Computer Science </span>
                <br />
                Minor in Data Science
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
                2017 - 2021 <br />
                Chiang Mai University
                <br />
                GPAX 3.21
              </h3>

              <h3 className={styles.textStudy}>
                Bachelor of Science in <span className={styles.whiteSpace}>Computer Science </span>
                <br />
                Minor in Data Science
              </h3>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Education
