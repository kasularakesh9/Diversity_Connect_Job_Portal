import React, { Component } from 'react'
import Footer from '../Footer/Footer'
import { Link } from 'react-router-dom'
import AdminSideMenu from './AdminSideMenu'
import { role, backendUrl } from '../../Constants';
import RegisterService from '../../Services/RegisterService';

export default class Adminacademiaregistration extends Component {
    constructor(props) {
        super(props)

        this.state = {
            aname: "",
            adesc: "",
            reserachfocus: "",
            postions: "",
            username: "",
            password: "",
            role: role.Academia
        }
    }

    handleInputChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        });
    };

    isPasswordValid = (password) => {
        const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        return passwordPattern.test(password);
      };

    registerBtnClick = (e) => {
        e.preventDefault();
        const { aname, adesc, reserachfocus, postions, username, password } = this.state;
        console.log(this.state);
        if (!this.isPasswordValid(password)) {
            this.setState({ passwordError: "Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, one number, and one special character." });
            return;
        }

        const respData = {
            "institution_name": aname,
            "name": aname,
            "desc": adesc,
            "researchFocus": reserachfocus,
            "positions": postions,
            "email": username,
            "password": password,
            "role": role.Academia
        };

        RegisterService.register(respData)
        .then((response)=>{
            console.log(response);
            alert(response.data);
            this.setState({//reset form after success
                aname: "",
                adesc: "",
                reserachfocus: "",
                postions: "",
                username: "",
                password: ""
            });
        }).catch((error) => {
            alert("error " + error);
        });


    }
    render() {
        return (
            <div>
                <h1 className="dashhead">Admin Dashboard</h1>

                    <AdminSideMenu/>

                    <div className="container">
                        <section className="card">
                            <form onSubmit={this.registerBtnClick}> <br />
                                <h2> Academic Institution Registration Form</h2>
                                <table className="form-group">
                                    <tbody>
                                    <tr>
                                            <th><label htmlFor="aname"><b>Institution Name</b></label></th>
                                            <td> <input type="text" name="aname" id="aname" placeholder="Enter your institution name"
                                                value={this.state.aname}
                                                onChange={this.handleInputChange} required />
                                            </td>
                                        </tr>
                                        <tr>
                                            <th><label htmlFor="adesc"><b>Description</b></label></th>
                                            <td>
                                                <textarea rows="4" cols="57" id="adesc" name='adesc'
                                                    placeholder="Enter your institution description"
                                                    value={this.state.adesc}
                                                    onChange={this.handleInputChange} ></textarea>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th><label htmlFor="reserachfocus"><b>Research Area</b></label></th>
                                            <td><input type="text" name="reserachfocus" id="reserachfocus" placeholder="Enter research area"
                                                value={this.state.reserachfocus}
                                                onChange={this.handleInputChange} />
                                            </td>
                                        </tr>
                                        <tr>
                                            <th><label htmlFor="postions"><b>Postions</b></label></th>
                                            <td><input type="text" name="postions" id="postions" placeholder="Enter positions"
                                                value={this.state.postions}
                                                onChange={this.handleInputChange} /> </td>
                                        </tr>
                                        <tr>
                                            <th><label htmlFor="username"><b>Email</b></label></th>
                                            <td><input type="email" name="username" id="username" placeholder="Enter email"
                                                value={this.state.username}
                                                onChange={this.handleInputChange} required /> </td>
                                        </tr>
                                        <tr>
                                            <th><label htmlFor="password"><b>Password</b></label></th>
                                            <td><input type="password" name="password" id="password" placeholder="Enter Password"
                                                value={this.state.password}
                                                onChange={this.handleInputChange} required /><br />
                                                       
                                            {this.state.passwordError && <p class="pvalid">{this.state.passwordError}</p>}        
                                                     </td>
                                        </tr>
                                    <tr>
                                        <td colSpan="2">
                                            <div className="form-group">
                                                <button type="submit" className="button" >SignUp</button>
                                            </div><br />
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>

                            </form>
                        </section>

                        <Footer />
                    </div>
                    </div>
               
                )
  }
}
