import React, { Component } from 'react'
import Footer from '../Footer/Footer'

export default class RecruiterRegistration extends Component {
    handleSubmit = (event) => {
        event.preventDefault();
        const rname = event.target.rname.value;
        const rdesc = event.target.rdesc.value;
        const agency = event.target.agency.value;
        const client = event.target.client.value;
        const positions = event.target.postions.value;
        const email = event.target.username.value;
        const message = `Name: ${rname}\nDescription: ${rdesc}\nAgency: ${agency}\nClient: ${client}\nPositions: ${positions}\nEmail: ${email}`;
        alert(message);
        event.target.reset();
      };
    render() {
        return (
            <div>
                <div className="container">
                    <section className="card">
                        <form onSubmit={this.handleSubmit}> <br />
                        <h2> Recruiter Registration Form</h2>
                            <table className="form-group">
                                <tbody>
                                        <tr>
                                            <th><label htmlFor="rname"><b>Name</b></label></th>
                                            <td> <input type="text" name="" id="rname" placeholder="Enter your name " required /></td>
                                        </tr>
                                        <tr>
                                            <th><label htmlFor="rdesc"><b>Description</b></label></th>
                                            <td> <textarea rows="4" cols="57" id="rdesc"
                                                placeholder="Enter your company description"></textarea></td>
                                        </tr>
                                        <tr>
                                            <th><label htmlFor="agency"><b>Agency</b></label></th>
                                            <td> <input type="text" name="" id="agency" placeholder="Enter your agency name" /></td>
                                        </tr>
                                        <tr>
                                            <th><label htmlFor="client"><b>Client</b></label></th>
                                            <td> <input type="text" name="" id="client" placeholder="Enter your client name" /></td>
                                        </tr>
                                        <tr>
                                            <th><label htmlFor="postions"><b>Postions</b></label></th>
                                            <td><input type="text" name="" id="postions" placeholder="Enter positions" /> </td>
                                        </tr>
                                        <tr>
                                            <th><label htmlFor="username"><b>Email</b></label></th>
                                            <td><input type="email" name="" id="username" placeholder="Enter email" required /> </td>
                                        </tr>
                                        <tr>
                                            <th><label htmlFor="password"><b>Password</b></label></th>
                                            <td><input type="text" name="" id="password" placeholder="Enter Password" required 
                                             minLength={8}
                                             pattern='/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/' 
                                             title="Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one digit, and one special character (@, $, !, %, *, ?, &)."
                                         
                                             /><br /></td>
                                        </tr>
                                        <tr>
                                            <td colSpan="2">
                                                <div className="form-group">

                                                    <input type="submit" value="SignUp" />
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
