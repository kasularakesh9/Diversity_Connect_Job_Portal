import React, { Component } from 'react'
import Footer from '../Footer/Footer'
import { Link } from 'react-router-dom'
import { AppUrl } from '../../Constants'


export default class Role extends Component {
    render() {
        return (
            <div>
                <div className="container">
                    <header className="header">
                    </header>
                    <section>
                        <div className="center">
                            <h2>Select your role</h2>
                        </div>

                        <br />
                        <div className="links">
                            <Link to={AppUrl.URMCandidateRegistreation}>URM Candidate</Link>
                            <Link to={AppUrl.AcademicInstitutionRegistreation}>Academic Institution</Link>
                            <Link to={AppUrl.RecruiterRegistreation}>Recruiter</Link>
                            <Link to={AppUrl.DEIOfficerRegistreation}>DEI Officer</Link>
                        </div>
                    </section>
                </div>

                <Footer />
            </div>
        )
    }
}
