/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useRef } from "react"
import '../contact/contact.css'
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaGithub, FaWhatsapp, FaEnvelope } from 'react-icons/fa';

function Contact() {
  const nameRef = useRef()
  const subjectRef = useRef()
  const mailRef = useRef()
  const messageRef = useRef()

  const submit = (event) => {
    event.preventDefault()
    const formData = {
      name: nameRef.current.value,
      subject: subjectRef.current.value,
      message: messageRef.current.value,
      mail: mailRef.current.value
    }
    console.log(formData,'formData');
    
  }

  return (
    <>
      <section className="contact-section">
        <h2 className="contact-title">Contact</h2>
        <p className="contact-subtitle">
          Feel free to reach out to me for any questions or opportunities!
        </p>

        <form className="contact-form" >
          <h3 className="form-heading">Email Me 🚀</h3>
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            ref={mailRef}
            required
          />
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            ref={nameRef}
            required
          />
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            ref={subjectRef}
            required
          />
          <textarea
            name="message"
            placeholder="Message"
            rows="5"
            ref={messageRef}
            required
          ></textarea>
          <button type="submit" onClick={submit}>Send</button>
        </form>
      </section>
      <footer className="footer-section">
        <h3 className="footer-name">Sujith Sukumar</h3>
        <nav className="footer-nav">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#education">Education</a>
        </nav>
        <div className="footer-socials">
          <a href=""><FaFacebookF /></a>
          <a href="https://github.com/sujith-sukumar" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/sujith-sukumar" target="_blank" rel="noopener noreferrer">
            <FaLinkedinIn />
          </a>
          <a href="https://www.instagram.com/_sujiith_" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
          <a href="https://wa.me/8086445263" target="_blank" rel="noopener noreferrer">
            <FaWhatsapp />
          </a>
          <a href="mailto:sujithsukumar@gmail.com" target="_blank" rel="noopener noreferrer">
            <FaEnvelope />
          </a>
        </div>
      </footer>
    </>
  )
}
export default Contact