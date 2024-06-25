import React, { Component } from 'react'
import Footer from '../Footer/Footer'
import ContactusService from '../../Services/ContactusService';

export default class ContactUs extends Component {
    constructor(props) {
        super(props)

        this.state = {            
            dname: "",
            phoneno: "",
            adesc: "",
            username: ""
        }
    }
    
    isPhoneNumberValid = (number) => {
        const phoneNumberRegex = /^\d{10}$/; // Assuming phone numbers should be exactly 10 digits
       
        return phoneNumberRegex.test(number);
      };
    
    handleInputChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        });
        
    };
     
    
        handleSubmit = (e) => {
            e.preventDefault();
            const { dname, phoneno, adesc, username } = this.state;
            if (!this.isPhoneNumberValid(phoneno)) {
                alert('Please enter a valid 10-digit phone number');
                return;
            }
            console.log(this.state);
            const respData = {
                "dname": dname,
                "phoneno": phoneno,
                "adesc": adesc,
                "username": username
            };
    
            ContactusService.contact(respData)
            .then((response)=>{
                console.log(response);
                this.setState({//reset form after success
                    dname: "",
                    phoneno: "",
                    adesc: "",
                    username: ""
                });
                alert("Your question sent successfully.");
            }).catch((error) => {
                alert("error " + error);
            });
    
    
        }
    
    render() {
        return (
            <div>
                <div className="container">
                    <section className="card">
                        <form  onSubmit={this.handleSubmit}> <br />
                        <h2> Contact Us</h2>
                            <table className="form-group">
                            <tbody>
                                        
                                        <tr>
                                            <th><label htmlFor="dname"><b>Name</b></label></th>
                                            <td> <input type="text" name="dname" id="dname" placeholder="Enter your name " required  value={this.state.dname}
                                                onChange={this.handleInputChange} /></td>
                                        </tr>
                                        <tr>
                                            <th><label htmlFor="phoneno"><b>Phone number</b></label></th>
                                            <td>
                                                <input type="text" name="phoneno" id="phoneno" placeholder="Enter your phone number" required  value={this.state.phoneno}
                                                onChange={this.handleInputChange} />
                                            </td>
                                        </tr>
                                        <tr>
                                            <th><label htmlFor="adesc"><b>Comments</b></label></th>
                                            <td>
                                                <textarea rows="4" cols="57" id="adesc" name="adesc" placeholder="Enter your Comments" value={this.state.adesc}
                                                onChange={this.handleInputChange} required ></textarea>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th><label htmlFor="username"><b>Email</b></label></th>
                                            <td><input type="email" name="username" id="username" placeholder="Enter email" required  value={this.state.username}
                                                onChange={this.handleInputChange} /> </td>
                                        </tr>
                                        <tr>
                                            <td colSpan="2">
                                                <div className="form-group">

                                                    <input type="submit" value="submit" />
                                                </div><br />
                                            </td>
                                        </tr>
                                   </tbody>
                            </table>
                        </form>
                    </section>
                    <section className="card">
                        <h3> Reach out to:</h3>
                        <p>Phone: <a href="mobile: 6822869981">(682)-286-9981</a><br />
                            Mail to us at: <a href="mailto:diversityconnect@gmail.com">diversityconnect@gmail.com</a></p><br /><br />
                    </section>
                    <Footer />
                </div>
            </div>
        )
    }
}
