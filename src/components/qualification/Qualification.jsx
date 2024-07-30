import React, { useState } from 'react'
import './qualification.css'

const Qualification = () => {

const [toggle, setToggle] = useState(1);

const toggleTab = (index) => {
    setToggle(index)
}
  return (
    <section className="qualification section">
        <h2 className="section__title">Qualification</h2>
        <span className="section__subtitle">My persona jurney</span>

        <div className="qualification__container container">
            <div className="qualification__tabs">
                <div className={toggle === 1 ? 'qualification__button  qualification__active button--flex' : 'qualification__button button--flex'} onClick={() => toggleTab(1)}>
                    <i className="uil- uil-graduation-cap qualification__icon"></i> Education
                </div>

                <div className={toggle === 2 ? 'qualification__button  qualification__active button--flex' : 'qualification__button button--flex'} onClick={() => toggleTab(2)}>
                    <i className="uil- uil-briefcase-alt qualification__icon"></i> Experience
                </div>
            </div>

            <div className="qualification__sections">
                <div className={toggle === 1 ? 'qualification__content qualification__content-active' : 'qualification__content'} >
                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">European University "Kallos" Tuzla</h3>
                            <span className="qualification__subtitle">IT Engineer</span>
                            <div className="qualification__calendar">
                                <i className="uil-calendar-alt"></i> 2018 - Present
                            </div>
                        </div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>

                    <div className="qualification__data">
                        <div></div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                        <div>
                            <h3 className="qualification__title">Mistral Paragon</h3>
                            <span className="qualification__subtitle">Web development education</span>
                            <div className="qualification__calendar">
                                <i className="uil-calendar-alt"></i> Apr 2021 - Jan 2022
                            </div>
                        </div>

                    </div>

                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">Udemy</h3>
                            <span className="qualification__subtitle">Self-Guided Learning</span>
                            <div className="qualification__calendar">
                                <i className="uil-calendar-alt"></i> 2020 - Present
                            </div>
                        </div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>
                </div>

                <div className={toggle === 2 ? 'qualification__content qualification__content-active' : 'qualification__content'} >
                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">Virgin Pulse</h3>
                            <span className="qualification__subtitle">Internship</span>
                            <div className="qualification__calendar">
                                <i className="uil-calendar-alt"></i> Sep 2021 - Jan 2022
                            </div>
                        </div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>

                    <div className="qualification__data">
                        <div></div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                        <div>
                            <h3 className="qualification__title">Imel Software</h3>
                            <span className="qualification__subtitle">Junior web developer</span>
                            <div className="qualification__calendar">
                                <i className="uil-calendar-alt"></i> Apr 2022 - Apr 2024
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </section>
    
  )
}

export default Qualification