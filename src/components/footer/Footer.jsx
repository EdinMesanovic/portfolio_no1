import React from 'react'
import './footer.css'
import CV from "../../assets/Edin-Mesanovic-CV-eng.pdf"

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer__container container">
            <h1 className="footer__title">Edin</h1>

            <ul className="footer__list">
                <li>
                    <a href="#about" className="footer__link">About</a>
                </li>

                <li>
                    <a download='' href={CV} className="footer__link" target='_blank'>Portfolio</a>
                </li>

                <li>
                    <a href="#projects" className="footer__link">Projects</a>
                </li>
            </ul>

            <div className="footer__social">
                <a href="https://www.instagram.com/edo_mesanovic/" className="footer__social-link" target='_blank'>
                    <i className="uil uil-instagram"></i>
                </a>

                <a href="https://github.com/EdinMesanovic" className="footer__social-link" target='_blank'>
                    <i className="uil uil-github"></i>
                </a>

                <a href="https://www.linkedin.com/in/edin-mesanovic-966b941b0/" className="footer__social-link" target='_blank'>
                    <i className="uil uil-linkedin"></i>
                </a>                
            </div>

            <span className='footer__copy'>&#169; Edin Mesanovic. All rights reserved</span>
        </div>
    </footer>
  )
}

export default Footer