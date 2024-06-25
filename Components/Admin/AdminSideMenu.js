import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { AppUrl } from '../../Constants'


export default class AdminSideMenu extends Component {
    render() {
        return (
            <>
                <div className="center">
                    <div className="wrapper">
                        <div className="sidenav">
                            <Link to={AppUrl.Admindashboard}> Dashboard</Link>
                            <Link to={AppUrl.Adminapplicationstatus}> Application Status</Link>
                            <Link to={AppUrl.Adminviewjobs}> Job posted</Link>
                            <Link to={AppUrl.Adminviewurm}> URM Candidates</Link>
                            <Link to={AppUrl.Adminviewrecruiters}> Recruiters</Link>
                            <Link to={AppUrl.Adminviewdei}> DEI Officers</Link>
                            <Link to={AppUrl.Adminviewacademia}> Academic Institution</Link>
                            <Link to={AppUrl.Admincontactus}> Contact Us Questions</Link>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
