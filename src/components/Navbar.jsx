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
          <a href="http://127.0.0.1:8000/resume" target="_blank">
            Resume
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
