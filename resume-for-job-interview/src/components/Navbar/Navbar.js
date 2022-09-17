import './styles.css';

function Navbar(){
    return(<>
  <nav className="nav">
    <div className="container">
      <div className="site-title-left">
          <a href="/">Wannarat</a>
      </div>
      <div className="site-title-right">
          <a href="/">Home</a>
          <a href="/">Education</a>
          <a href="/">Experiences</a>
          <a href="/">Skills</a>
          <a href="/">Contact Me</a>
      </div>
    </div>
    
  </nav>
    </>)
}

export default Navbar;