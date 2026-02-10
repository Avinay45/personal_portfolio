function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <h3>Vinay</h3>
        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
          <a
            href="https://lively-curiosity-production-ffca.up.railway.app/resume"
            target="_blank"
          >
            Resume
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
