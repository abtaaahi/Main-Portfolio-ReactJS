import React, { useState, useEffect } from 'react';

const Home = () => {
  const [showScrollButton, setShowScrollButton] = useState(false);

  // Effect to show scroll-to-top button on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShowScrollButton(true);
      } else {
        setShowScrollButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Function to scroll to top smoothly
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="container">
      <div className="main">
        <div className="namediv">
          <h1 id="name">Abtahi Md. Mahib Uddin</h1>
          <h3 id="sde" className="typewriter">Software Developer</h3>
          <div className="icon">
            <a href="https://github.com/abtaaahi" target="_blank" className="tooltip" data-tooltip="GitHub" rel="noopener noreferrer">
              <i className="devicon-github-original"></i>
            </a>
            <a href="https://www.linkedin.com/in/abtahi-md-mahib-uddin-6739aa236/" target="_blank" className="tooltip" data-tooltip="LinkedIn" rel="noopener noreferrer">
              <i className="devicon-linkedin-plain"></i>
            </a>
            <a href="https://www.facebook.com/abtaaahi/" target="_blank" className="tooltip" data-tooltip="Facebook" rel="noopener noreferrer">
              <i className="devicon-facebook-plain"></i>
            </a>
            <a href="mailto:abtahimahib@gmail.com" className="tooltip" data-tooltip="Email">
              <i className="ri-mail-open-fill"></i>
            </a>
            <a href="https://drive.google.com/file/d/1DOorma2s8d61vUcYHL7fUs1uQgi8DmZQ/view?usp=sharing" target="_blank" className="tooltip" data-tooltip="Resume" rel="noopener noreferrer">
              <i className="ri-code-s-slash-line"></i>
            </a>
          </div>
        </div>
        <div className="firstdiv">
          <h1><a href="#experience">Experience</a></h1>
          <h1><a href="#education">Education</a></h1>
          <h1><a href="#skills">Skills</a></h1>
          <h1><a href="#projects">Projects</a></h1>
          <h1><a href="#certificates">Certificates</a></h1>
          <h1><a href="#achievement">Achievement</a></h1>
        </div>
      </div>
      {showScrollButton && (
        <button className="scroll-to-top" onClick={scrollToTop}>
          <i className="ri-arrow-up-double-fill"></i>
        </button>
      )}
    </div>
  );
};

export default Home;
