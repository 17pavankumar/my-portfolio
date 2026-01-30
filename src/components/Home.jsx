import React from 'react';

const Home = () => {
    return (
        <section className="home section" id="home">
            <div className="home__container container grid">
                <div className="home__content grid">
                    <div className="home__social">
                        <a href="https://github.com/17pavankumar" className="home__social-icon" target="_blank" rel="noreferrer">
                            <i className="fa-brands fa-github"></i>
                        </a>
                        <a href="https://www.linkedin.com/in/pavan-kumar-n-135b3825b/" className="home__social-icon" target="_blank" rel="noreferrer">
                            <i className="fa-brands fa-linkedin-in"></i>
                        </a>
                        <a href="mailto:17pavankumarn@gmail.com" className="home__social-icon">
                            <i className="fa-solid fa-envelope"></i>
                        </a>
                    </div>

                    <div className="home__img-wrapper">
                        <div className="home__blob">
                            <img src="/assets/profile.jpg" alt="Pavan Kumar N" className="home__img" />
                        </div>
                    </div>

                    <div className="home__data">
                        <h1 className="home__title">Hi, I'm <br /> Pavan Kumar N</h1>
                        <h3 className="home__subtitle">Full Stack Python Developer</h3>
                        <p className="home__description">
                            Building scalable web applications with Python, Django, and React.js.
                            Turning ideas into seamless digital experiences.
                        </p>
                        <a href="#contact" className="button button--flex">
                            Contact Me <i className="fa-regular fa-paper-plane button__icon"></i>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Home;
