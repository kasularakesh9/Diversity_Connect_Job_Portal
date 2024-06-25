import React, { Component } from 'react'
import Footer from '../Footer/Footer'
import { Link } from 'react-router-dom'
import AdminSideMenu from './AdminSideMenu'
import RegisterService from '../../Services/RegisterService';
import { role,backendUrl } from '../../Constants';


export default class Admindeiregister extends Component {
    constructor(props) {
        super(props)

        this.state = {
            dname: "",
            ddesc: "",
            organization: "",
            goal :"",
            initiatives :"",
            event :"", 
            postions: "",
            username: "",
            password: "",
            role: role.Dei
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
        const { dname, ddesc, organization, goal, initiatives, event, postions, username, password } = this.state;
        if (!this.isPasswordValid(password)) {
            this.setState({ passwordError: "Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, one number, and one special character." });
            return;
        }
        console.log(this.state);
        const respData = {
            "dei_name": dname,
            "name": dname,
            "desc": ddesc,
            "organization": organization,
            "goal": goal,
            "initiatives" :initiatives,
            "event": event,
            "positions": postions,
            "email": username,
            "password": password,
            "role": role.Dei
        };

        RegisterService.register(respData)
        .then((response)=>{
            console.log(response);
            alert(response.data);
            this.setState({//reset form after success
                dname: "",
                ddesc: "",
                organization: "",
                goal :"",
                initiatives :"",
                event :"", 
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
            <form onSubmit={this.registerBtnClick}> <br/>
            <h2> DEI Officer Registration Form</h2>
                <table className="form-group">
                    <tbody>
                    <tr>
                                            <th><label htmlFor="dname"><b>Name</b></label></th>
                                            <td> <input type="text" name="dname" id="dname" placeholder="Enter your name " 
                                             value={this.state.dname}
                                             onChange={this.handleInputChange} required /></td>
                                        </tr>
                                        <tr>
                                            <th><label htmlFor="ddesc"><b>Description</b></label></th>
                                            <td> <textarea rows="3" cols="57" id="ddesc" name="ddesc"
                                            placeholder="Enter description"
                                            value={this.state.ddesc}
                                            onChange={this.handleInputChange} required></textarea></td>
                                        </tr>
                                        <tr>
                                            <th><label htmlFor="role"><b>Role</b></label></th>
                                            <td> <input type="text" name="role" id="role" placeholder="Enter role" 
                                            value={this.state.role}
                                            onChange={this.handleInputChange} required/></td>
                                        </tr>
                                        <tr>
                                            <th><label htmlFor="organization"><b>Organization</b></label></th>
                                            <td> <input type="text" name="organization" id="organization" placeholder="Enter your organization" 
                                            value={this.state.organization}
                                            onChange={this.handleInputChange} required/></td>
                                        </tr>
                                        <tr>
                                            <th><label htmlFor="goal"><b>Goals</b></label></th>
                                            <td> <input type="text" name="goal" id="goal" placeholder="Enter goals" 
                                            value={this.state.goal}
                                            onChange={this.handleInputChange} required/></td>
                                        </tr>
                                        <tr>
                                            <th><label htmlFor="initiatives"><b>Initiatives</b></label></th>
                                            <td> <input type="text" name="initiatives" id="initiatives" placeholder="Enter Initiatives" 
                                            value={this.state.initiatives}
                                            onChange={this.handleInputChange} required/></td>
                                        </tr>
                                        <tr>
                                            <th><label htmlFor="event"><b>New Initiatives/Events</b></label></th>
                                            <td> <input type="text" name="event" id="event" placeholder="Enter new Initiatives or Events" 
                                            value={this.state.event}
                                            onChange={this.handleInputChange} required/></td>
                                        </tr>
                                        <tr>
                                            <th><label htmlFor="postions"><b>Postions</b></label></th>
                                            <td><input type="text" name="postions" id="postions" placeholder="Enter positions" 
                                            value={this.state.postions}
                                            onChange={this.handleInputChange} required/> </td>
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
                                            onChange={this.handleInputChange} required  /><br />
                                              {this.state.passwordError && <p class="pvalid">{this.state.passwordError}</p>} 
                                            </td>
                                        </tr>
                    <tr>
                        <td colSpan="2">
                            <div className="form-group">
                             <button type="submit" className="button">SignUp</button>
                            </div><br/>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </form>
        </section>

        <Footer/>

    </div>
    </div>

    )
  }
}
