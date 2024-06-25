import React, { Component } from 'react'
import Footer from '../Footer/Footer'

export default class About extends Component {
    render() {
        return (
            <div>
                <div className="about_container">
                    <section className="aboutin">
                        <div className="about">
                            <div className="about-content">
                                <h2 style={{ textAlign: 'center' }}>ABOUT US</h2>
                                <p>Greetings from the URM Portal! We are committed to strengthening people of color who are underrepresented
                                    in society by giving them access to scholarships, a supportive community, useful tools, and networking
                                    opportunities. Our goal is to promote inclusivity, diversity, and fair chances for all. Join us as we work
                                    to build a more just society on this journey of empowerment and constructive change.</p>
                                <div className="icons">
                                    <img src="Pictures/facebook.png" />
                                    <img src="Pictures/instagram.png" />
                                    <img src="Pictures/threads.png" />
                                    <img src="Pictures/twitter.png" />
                                </div>
                            </div>
                            <div className="about-img"></div>
                        </div>

                    </section>

                </div>
                <Footer/>
            </div>
        )
    }
}
