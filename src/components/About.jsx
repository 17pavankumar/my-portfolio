import React from "react";

const About = () => {
  return (
    <section className="about section" id="about">
      <h2 className="section__title">About Me</h2>
      <span className="section__subtitle">My introduction</span>

      <div className="about__container container grid">
        <div className="about__data">
          <p className="about__description">
            I am a self-motivated B.E. graduate from Sir M Visvesvaraya
            Institute of Technology (2021-2025). <br />
            <br />I have hands-on experience in developing scalable web
            applications using{" "}
            <strong>Python, Django, React.js, and SQL</strong>. My passion lies
            in completing full development lifecycle projects, from design to
            deployment, solving complex problems with innovative software
            solutions.
          </p>

          <div className="about__info">
            <div>
              <span className="about__info-title">Internship</span>
              <span className="about__info-name">
                Full Stack Dev <br /> @ Varcons
              </span>
            </div>
            <div>
              <span className="about__info-title">03+</span>
              <span class="about__info-name">
                Completed <br /> Projects
              </span>
            </div>
            <div>
              <span className="about__info-title">CGPA</span>
              <span class="about__info-name">
                7.76 <br /> / 10
              </span>
            </div>
          </div>

          <div className="about__buttons" style={{ display: "flex", gap: "1rem" }}>
            <a
              href="/assets/Pavan_Kumar_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="button button--ghost"
            >
              View Resume{" "}
              <i className="fa-regular fa-file-lines button__icon"></i>
            </a>
            <a href="/assets/Pavan_Kumar_Resume.pdf" download="Pavan_Kumar_Resume.pdf" className="button button--ghost">
              Download <i className="fa-solid fa-download button__icon"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
