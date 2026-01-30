import React from 'react';

const Projects = () => {
    return (
        <section className="projects section" id="projects">
            <h2 className="section__title">Projects</h2>
            <span className="section__subtitle">Most recent work</span>

            <div className="projects__container container grid">
                {/* Project 1 */}
                <div className="project__card">
                    <div className="project__img-box">
                        <div className="project__icon-wrapper">
                            <i className="fa-solid fa-paw"></i>
                        </div>
                    </div>
                    <div className="project__content">
                        <h3 className="project__title">Animal Adoption System</h3>
                        <p className="project__description">
                            Web-based platform enabling users to view, filter, and adopt pets using Django, HTML/CSS, and MySQL. Includes admin workflows and user role management.
                        </p>
                        <div className="project__tech">
                            <span>Django</span>
                            <span>MySQL</span>
                            <span>HTML/CSS</span>
                        </div>
                        <a href="https://github.com/17pavankumar/animal_adoption" target="_blank" rel="noreferrer" className="button button--small button--link">
                            View Code <i className="fa-brands fa-github"></i>
                        </a>
                    </div>
                </div>

                {/* Project 2 */}
                <div className="project__card">
                    <div className="project__img-box">
                        <div className="project__icon-wrapper">
                            <i className="fa-solid fa-camera"></i>
                        </div>
                    </div>
                    <div className="project__content">
                        <h3 className="project__title">Ecommerce Website</h3>
                        <p className="project__description">
                            Dynamic e-commerce site for cameras and earbuds. Optimized listing and checkout process. Built with Django, Python, and JS for scalability.
                        </p>
                        <div className="project__tech">
                            <span>Django</span>
                            <span>JS</span>
                            <span>Responsive</span>
                        </div>
                        <a href="https://github.com/17pavankumar/ecommerce" target="_blank" rel="noreferrer" className="button button--small button--link">
                            View Code <i className="fa-brands fa-github"></i>
                        </a>
                    </div>
                </div>

                {/* Project 3 */}
                <div className="project__card">
                    <div className="project__img-box">
                        <div className="project__icon-wrapper">
                            <i className="fa-solid fa-cow"></i>
                        </div>
                    </div>
                    <div className="project__content">
                        <h3 className="project__title">Dairy Product Ecommerce</h3>
                        <p className="project__description">
                            E-commerce platform for dairy products with advanced search, filtering, and inventory management features.
                        </p>
                        <div className="project__tech">
                            <span>Django</span>
                            <span>Python</span>
                            <span>Security</span>
                        </div>
                        <a href="https://github.com/17pavankumar/eccom-dairy" target="_blank" rel="noreferrer" className="button button--small button--link">
                            View Code <i className="fa-brands fa-github"></i>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Projects;
