import profile from "../assets/profile.png";

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="container">
        <img src={profile} alt="Vinay" className="profile" />

        <h1>A Vinay Kumar</h1>
        <h3>Computer Science Engineer</h3>

        <p>
          Computer Science & Business Systems undergraduate interested in
          Artificial Intelligence, Data Analytics, and Backend Development.
        </p>

        <a
          href="http://127.0.0.1:8000/resume"
          className="btn"
          target="_blank"
          rel="noreferrer"
        >
          Download Resume
        </a>
      </div>
    </section>
  );
}

export default Hero;
