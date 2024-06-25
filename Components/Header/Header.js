import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { AppUrl } from '../../Constants';


export default class Header extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         
      }
    }
    
    render() {
        return (
            <div>
                <div className="navbar">
                    <ul>
                        {!this.props.isLogin && <li><Link to={AppUrl.base}>HOME</Link></li>}   
                        <li><Link to="https://sxr9357.uta.cloud/">BLOG</Link></li>                     
                        <li className="dropdown">
                            <a href="#">SERVICES</a>
                            <div className="dropdown-content">
                                <Link to={AppUrl.urmCandidateService}>CANDIDATE</Link>
                                <Link to={AppUrl.servicesAcademia}>ACADEMIA</Link>
                                <Link to={AppUrl.servicesDEI}>DEI</Link>
                                <Link to={AppUrl.serviceRecruiter}>RECRUITER</Link>
                            </div>
                        </li>
                        <li><Link to={AppUrl.aboutUs}>ABOUT US</Link></li>
                        <li><Link to={AppUrl.contactUs}>CONTACT US</Link></li>
                        {this.props.isLogin && <li><Link to={AppUrl.Logout}>Log out</Link></li>}

                    </ul>
                </div>
            </div>
        )
    }
}
