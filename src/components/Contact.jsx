import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        // SERVICE_ID, TEMPLATE_ID, PUBLIC_KEY - You need to replace these with your actual EmailJS credentials
        // Use 'service_id' and 'template_id' from your EmailJS dashboard
        emailjs.sendForm('service_default', 'template_default', form.current, 'YOUR_PUBLIC_KEY')
            .then((result) => {
                console.log(result.text);
                alert("Message Sent Successfully!");
                e.target.reset();
            }, (error) => {
                console.log(error.text);
                alert("Failed to send message. Please try again or email directly.");
            });
    };

    return (
        <section className="contact section" id="contact">
            <h2 className="section__title">Contact Me</h2>
            <span className="section__subtitle">Get in touch</span>

            <div className="contact__container container grid">
                <div className="contact__content">
                    <h3 className="contact__title">Talk to me</h3>

                    <div className="contact__info">
                        <div className="contact__card">
                            <i className="fa-regular fa-envelope contact__card-icon"></i>
                            <h3 className="contact__card-title">Email</h3>
                            <span className="contact__card-data">17pavankumarn@gmail.com</span>
                            <a href="mailto:17pavankumarn@gmail.com" className="contact__button">
                                Write me <i className="fa-solid fa-arrow-right contact__button-icon"></i>
                            </a>
                        </div>

                        <div className="contact__card">
                            <i className="fa-brands fa-whatsapp contact__card-icon"></i>
                            <h3 className="contact__card-title">Phone</h3>
                            <span className="contact__card-data">+91-7624855779</span>
                            <a href="tel:+917624855779" className="contact__button">
                                Call me <i className="fa-solid fa-arrow-right contact__button-icon"></i>
                            </a>
                        </div>

                        <div className="contact__card">
                            <i className="fa-brands fa-linkedin-in contact__card-icon"></i>
                            <h3 className="contact__card-title">LinkedIn</h3>
                            <span className="contact__card-data">Pavan Kumar N</span>
                            <a href="https://www.linkedin.com/in/pavan-kumar-n-135b3825b/" target="_blank" rel="noreferrer" className="contact__button">
                                Connect <i className="fa-solid fa-arrow-right contact__button-icon"></i>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="contact__content">
                    <h3 className="contact__title">Write your Queries</h3>

                    <form ref={form} onSubmit={sendEmail} className="contact__form">
                        <div className="contact__form-div">
                            <label className="contact__form-tag">Name</label>
                            <input
                                type="text"
                                name="user_name"
                                placeholder="Insert your name"
                                className="contact__form-input"
                                required
                            />
                        </div>

                        <div className="contact__form-div">
                            <label className="contact__form-tag">Mail</label>
                            <input
                                type="email"
                                name="user_email"
                                placeholder="Insert your email"
                                className="contact__form-input"
                                required
                            />
                        </div>

                        <div className="contact__form-div contact__form-area">
                            <label className="contact__form-tag">Queries</label>
                            <textarea
                                name="message"
                                cols="30"
                                rows="10"
                                placeholder="Write your queries"
                                className="contact__form-input"
                                required
                            ></textarea>
                        </div>

                        <button className="button">
                            Send Message <i className="fa-regular fa-paper-plane"></i>
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
