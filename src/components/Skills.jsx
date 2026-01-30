import React from 'react';

const Skills = () => {
    return (
        <section className="skills section" id="skills">
            <h2 className="section__title">Skills</h2>
            <span className="section__subtitle">My technical level</span>

            <div className="skills__container container grid">

                {/* Frontend */}
                <div className="skills__content">
                    <h3 className="skills__title">Frontend Development</h3>
                    <div className="skills__box">
                        <div className="skills__group">
                            <div className="skills__data">
                                <i className="fa-brands fa-html5"></i>
                                <div>
                                    <h3 className="skills__name">HTML5</h3>
                                    <span className="skills__level">Advanced</span>
                                </div>
                            </div>
                            <div className="skills__data">
                                <i className="fa-brands fa-css3-alt"></i>
                                <div>
                                    <h3 className="skills__name">CSS3</h3>
                                    <span className="skills__level">Advanced</span>
                                </div>
                            </div>
                            <div className="skills__data">
                                <i className="fa-brands fa-js"></i>
                                <div>
                                    <h3 className="skills__name">JavaScript</h3>
                                    <span className="skills__level">Intermediate</span>
                                </div>
                            </div>
                        </div>
                        <div className="skills__group">
                            <div className="skills__data">
                                <i className="fa-brands fa-react"></i>
                                <div>
                                    <h3 className="skills__name">React.js</h3>
                                    <span className="skills__level">Intermediate</span>
                                </div>
                            </div>
                            <div className="skills__data">
                                <i className="fa-brands fa-bootstrap"></i>
                                <div>
                                    <h3 className="skills__name">Bootstrap</h3>
                                    <span className="skills__level">Intermediate</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Backend */}
                <div className="skills__content">
                    <h3 className="skills__title">Backend & Tools</h3>
                    <div className="skills__box">
                        <div className="skills__group">
                            <div className="skills__data">
                                <i className="fa-brands fa-python"></i>
                                <div>
                                    <h3 className="skills__name">Python</h3>
                                    <span className="skills__level">Intermediate</span>
                                </div>
                            </div>
                            <div className="skills__data">
                                <i className="fa-solid fa-server"></i>
                                <div>
                                    <h3 className="skills__name">Django</h3>
                                    <span className="skills__level">Intermediate</span>
                                </div>
                            </div>
                            <div className="skills__data">
                                <i className="fa-solid fa-database"></i>
                                <div>
                                    <h3 className="skills__name">SQL / MySQL</h3>
                                    <span className="skills__level">Intermediate</span>
                                </div>
                            </div>
                        </div>
                        <div className="skills__group">
                            <div className="skills__data">
                                <i className="fa-brands fa-git-alt"></i>
                                <div>
                                    <h3 className="skills__name">Git & GitHub</h3>
                                    <span className="skills__level">Intermediate</span>
                                </div>
                            </div>
                            <div className="skills__data">
                                <i className="fa-regular fa-lightbulb"></i>
                                <div>
                                    <h3 className="skills__name">Problem Solving</h3>
                                    <span className="skills__level">Soft Skill</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
