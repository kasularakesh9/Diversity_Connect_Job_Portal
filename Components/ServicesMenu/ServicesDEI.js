import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { AppUrl } from '../../Constants'


export default class ServicesDEI extends Component {
    render() {
        return (
            <div>
                <div className="about_container">
                    <section className="aboutin">
                        <div className="about">
                            <div className="about-content">
                                <h2 style={{textAlign: 'center'}}>DEI</h2>
                                <p>Diversity Connect presents a vital feature for DEI Officers, allowing them to showcase their
                                    organization's commitment to diversity, equity, and inclusion (DEI) through specific goals and
                                    initiatives. They can utilize a comprehensive search functionality to find candidates who align
                                    with their preferences and desired locations. Additionally, DEI Officers have the convenience of
                                    communicating with institutions, recruiters, and candidates directly. Moreover, they hold the
                                    authority to approve or disapprove job postings to ensure alignment with DEI objectives. With
                                    these essential tools at their disposal, DEI Officers can actively foster an inclusive and
                                    equitable academic community, promoting diversity at every step of the hiring process.</p>
                            </div>
                            <div className="dei-img"></div>
                            <div className="button-container">
                                <Link to={AppUrl.DEIOfficerRegistreation} className="button">Register</Link>
                            </div>
                        </div>

                    </section>
                </div>
            </div>
        )
    }
}
