import styles from './styles.module.css'

function Skills() {
  return (
    <div id="skills" className={styles.containerSkills}>
      <h1 className={styles.topicSkills}>Skills</h1>

      <div className={styles.contentSkills}>
        <h2 className={styles.topicHead}>HARD SKILL</h2>

        <h3 className={styles.topicSkill}>Languages</h3>
        <h3 className={styles.languages}>Python, JAVA, C/C++, JavaScript, TypeScript, PHP, HTML, CSS, SQL</h3>

        <h3 className={styles.topicSkill}>Frameworks</h3>
        <h3 className={styles.languages}>Angular, React, Node.js</h3>

        <h3 className={styles.topicSkill}>Tools</h3>
        <h3 className={styles.languages}>Draw.io, Adobe XD, Figma, Adobe Photoshop, Trello, Jira</h3>
      </div>
    </div>
  )
}

export default Skills
