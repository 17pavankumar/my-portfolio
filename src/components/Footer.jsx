import React from 'react';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__container container">
                <h1 className="footer__title">Pavan</h1>

                <ul className="footer__list">
                    <li>
                        <a href="#about" className="footer__link">About</a>
                    </li>
                    <li>
                        <a href="#projects" className="footer__link">Projects</a>
                    </li>
                    <li>
                        <a href="#skills" className="footer__link">Skills</a>
                    </li>
                </ul>

                <div className="footer__social">
                    <a href="https://facebook.com/" className="footer__social-link" target="_blank" rel="noreferrer">
                        <i className="fa-brands fa-facebook"></i>
                    </a>
                    <a href="https://instagram.com/" className="footer__social-link" target="_blank" rel="noreferrer">
                        <i className="fa-brands fa-instagram"></i>
                    </a>
                    <a href="https://twitter.com/" className="footer__social-link" target="_blank" rel="noreferrer">
                        <i className="fa-brands fa-twitter"></i>
                    </a>
                </div>

                <span className="footer__copy">
                    &#169; Pavan Kumar N. All rights reserved.
                </span>
            </div>
        </footer>
    );
};

export default Footer;
