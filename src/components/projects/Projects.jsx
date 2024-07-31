import React from 'react'
import './projects.css'
import IcBerlin from '../../assets/ic-berlin.png'
import TiBih from '../../assets/ti-bih.png'
import Meridian from '../../assets/meridian-imel.png'

const Projects = () => {
  return (
    <section className="projects section" id='projects'>
        <h2 className="section__title">Projects</h2>
        <span className="section__subtitle">Some of my projects</span>

        <div className="projects__container container grid">
          <div className="projects__content">
            <img src={IcBerlin} alt="Project Image" className="projects__image" />

            <a href='https://www.ic-berlin.com/' className="projects__button" target='_blank'>
              <i className="uil uil-external-link-alt projects__button-icon"></i>
            </a>
          </div>

          <div className="projects__content">
            <img src={TiBih} alt="Project Image" className="projects__image" />

            <a href='https://ti-bih.org/' className="projects__button" target='_blank'>
              <i className="uil uil-external-link-alt projects__button-icon"></i>
            </a>
          </div>

          <div className="projects__content">
            <img src={Meridian} alt="Project Image" className="projects__image" />

            <a href='https://meridian.imel.cloud/app/login' className="projects__button" target='_blank'>
              <i className="uil uil-external-link-alt projects__button-icon"></i>
            </a>
          </div>
        </div>
    </section>
  )
}

export default Projects