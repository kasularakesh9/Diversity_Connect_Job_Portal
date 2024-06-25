import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { AppUrl } from '../../Constants'


export default class ServicesRecruiter extends Component {
    render() {
        return (
            <div>
                <div className="about_container">
                    <section className="aboutin">
                        <div className="about">
                            <div className="about-content">
                                <h2 style={{textAlign: 'center'}}>Recruiter</h2>
                                <p>On our website, you have the opportunity to share comprehensive details about your recruiting
                                    agency, including information about your esteemed clients and the positions you are actively
                                    recruiting for. Once registered, you gain access to a user-friendly platform where you can
                                    effortlessly post job openings and search for potential candidates to fill those roles.
                                    Moreover, we provide a seamless communication feature that allows you to engage in direct chats
                                    with candidates, institutions, and DEI officers, ensuring smooth and efficient interactions
                                    throughout the hiring process. With our comprehensive suite of tools, we aim to enhance your
                                    recruiting experience, empowering you to connect with top talent and foster successful
                                    partnerships between employers and job seekers.</p>
                            </div>
                            <div className="recr-img"></div>
                            <div className="button-container">
                                <Link to={AppUrl.RecruiterRegistreation} className="button">Register</Link>
                            </div>
                        </div>

                    </section>
                </div>
            </div>
        )
    }
}
