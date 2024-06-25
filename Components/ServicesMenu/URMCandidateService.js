import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { AppUrl } from '../../Constants'


export default class URMCandidateService extends Component {
    render() {
        return (
            <div>
                <div className="about_container">
                    <section className="aboutin">
                        <div className="about">
                            <div className="about-content">
                                <h2 style={{textAlign: 'center'}}>Candidates</h2>
                                <p>On this platform, you'll find various avenues for pursuing a PhD, postdoctoral research, and
                                    faculty positions. Once you've completed the registration process, you can proceed to apply for
                                    desired positions and engage in conversations with the institution, recruiters, and DEI officers
                                    to address any questions or concerns you may have.</p>
                            </div>
                            <div className="urm-img"></div>
                            <div className="button-container">
                                <Link to={AppUrl.URMCandidateRegistreation} className="button">Register</Link>
                            </div>
                        </div>

                    </section>
                </div>
            </div>
        )
    }
}
