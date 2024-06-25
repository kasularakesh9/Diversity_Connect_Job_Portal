import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { AppUrl } from '../../Constants'


export default class ServicesAcademia extends Component {
    render() {
        return (
            <div>
                <div className="about_container">
                    <section className="aboutin">
                        <div className="about">
                            <div className="about-content">
                                <h2 style={{textAlign:'center'}}>Academia</h2>
                                <p>Our platform offers you the ability to post job details effortlessly. Upon completing the
                                    registration process, you gain access to connect with potential candidates who are interested in
                                    the positions you have available. You'll have the convenience of viewing their profiles and
                                    saving them for future reference, making the hiring process smoother and more efficient. In
                                    addition to the aforementioned features, our platform also empowers you with the ability to
                                    provide feedback to the candidates you have hired or contacted. We understand the significance
                                    of constructive communication throughout the hiring process, and this functionality allows you
                                    to share valuable insights with candidates, fostering a transparent and meaningful interaction
                                    for both parties involved.</p>
                            </div>
                            <div className="acad-img"></div>
                            <div className="button-container">
                                <Link to={AppUrl.AcademicInstitutionRegistreation} className="button">Register</Link>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        )
    }
}
