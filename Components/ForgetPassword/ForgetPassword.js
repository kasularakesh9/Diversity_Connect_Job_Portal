import React, { Component } from 'react'
import Footer from '../Footer/Footer'
import { Link } from 'react-router-dom'
import { AppUrl } from '../../Constants'
import ForgotpasswordService from '../../Services/ForgotpasswordService'


export default class ForgetPassword extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        username:"",
      }
    }

    handleInputChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        });
    };

    forgetPassClick=(e)=>{
        e.preventDefault();
        const reqData={
            "email":this.state.username
        };
        ForgotpasswordService.requestForNewPassword(reqData)
        .then((resp)=>{
            console.log(JSON.stringify(resp));
            alert(resp.data.message);
            this.setState({username:''});//reset email id after success.
        }).catch((error)=>{
            alert(error);
        });
    }
    
    render() {
        return (
            <div>
                <div class="about_container">
                    <section class="aboutin">
                        <div class="about">
                            <div class="about-content">
                                <h2 style={{ textAlign: 'center' }}>Forgot Password?</h2>
                                <h2 style={{ textAlign: 'center' }}>Enter your email address. You will receive a verification email with
                                    instructions.</h2>
                                <section class="card">
                                    <form onSubmit={this.forgetPassClick}> <br />

                                        <table class="form-group">
                                            <tr>
                                                <tr>
                                                    <tr>
                                                        <th><label for="username"><b>Email</b></label></th>
                                                        <td><input type="email" name="username" id="username" placeholder="Enter email" required 
                                                        value={this.state.username}
                                                        onChange={this.handleInputChange}/> </td>
                                                    </tr>
                                                    <td colspan="2">
                                                        <div class="form-group">
                                                            <input type="submit" value="Get Code" />
                                                        </div><br />
                                                    </td>
                                                </tr>
                                            </tr>
                                        </table>

                                    </form>
                                </section>
                            </div>

                            <div class="button-container">
                                <Link to={AppUrl.register} class="button">Create a New Account? Signup</Link>
                                <Link to={AppUrl.login} class="button">Return to login</Link>

                            </div>
                        </div>

                    </section>
                </div>

                <Footer />
            </div>
        )
    }
}
