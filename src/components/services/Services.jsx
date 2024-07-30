import React, { useState } from 'react'
import './services.css'

const Services = () => {
  const [toggle, setToggle] = useState(0);

  const toggleTab = (index) => {
    setToggle(index)
  }

  return (
    <section className="services section" id='services'>
        <h2 className="section__title">Services</h2>
        <span className="section__subtitle">What i offer</span>

        <div className="services__container container grid">
          <div className="services__content">
            <div>
              <i className="uil uil-web-grid services__icon"></i>
              <h3 className="service__title">Web <br /> Development</h3>
            </div>

            <span className="services__button" onClick={() => toggleTab(1)}>View More
              <i className="uil uil-arrow-right services__button-icon"></i>
            </span>

            <div className={toggle === 1 ? 'services__modal active-modal' : 'services__modal'}>
              <div className="services__modal-content">
                <i className="uil uil-times services__modal-close" onClick={() => toggleTab(0)}></i>

                <h3 className="services__modal-title">Web Development</h3>
                <p className="services__modal-description">I specialize in creating end-to-end web applications using modern technologies.</p>

                <ul className="services__modal-services grid">
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">Responsive web design using HTML, CSS, and JavaScript.</p>
                  </li>

                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">Development with modern frameworks.</p>
                  </li>

                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">Database management with MongoDB, MySQL.</p>
                  </li>

                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">User-friendly interfaces and engaging user experiences.</p>
                  </li>

                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">Server-side development with Node.js and Express.</p>
                  </li>

                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">End-to-end application development.</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="services__content">
            <div>
              <i className="uil uil-arrow services__icon"></i>
              <h3 className="service__title">Deployment <br/> Hosting</h3>
            </div>

            <span className="services__button" onClick={() => toggleTab(2)}>View More
              <i className="uil uil-arrow-right services__button-icon"></i>
            </span>

            <div className={toggle === 2 ? 'services__modal active-modal' : 'services__modal'}>
              <div className="services__modal-content">
                <i className="uil uil-times services__modal-close" onClick={() => toggleTab(0)}></i>

                <h3 className="services__modal-title">Deployment and Hosting</h3>
                <p className="services__modal-description">Seamlessly deploy, manage, and scale your applications, ensuring optimal performance and reliability.</p>

                <ul className="services__modal-services grid">
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">Setting up continuous integration/continuous deployment (CI/CD) pipelines</p>
                  </li>

                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">Automating deployment processes with tools like GitHub Actions.</p>
                  </li>

                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">Configuring and managing production environments.</p>
                  </li>

                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">Ensuring application scalability and performance.</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="services__content">
            <div>
              <i className="uil uil-edit services__icon"></i>
              <h3 className="service__title">Maintenance <br/> Support</h3>
            </div>

            <span className="services__button" onClick={() => toggleTab(3)}>View More
              <i className="uil uil-arrow-right services__button-icon"></i>
            </span>

            <div className={toggle === 3 ? 'services__modal active-modal' : 'services__modal'}>
              <div className="services__modal-content">
                <i className="uil uil-times services__modal-close" onClick={() => toggleTab(0)}></i>

                <h3 className="services__modal-title">Maintenance and Support</h3>
                <p className="services__modal-description">Keep your applications running smoothly with my proactive maintenance and reliable support services.</p>

                <ul className="services__modal-services grid">
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">Bug fixes and troubleshooting.</p>
                  </li>

                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">Performance monitoring and optimization.</p>
                  </li>

                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">Configuration and environment management.</p>
                  </li>

                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">Technical documentation and user guides.</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
    </section>
  )
}

export default Services