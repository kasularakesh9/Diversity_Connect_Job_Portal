import React, { Component } from 'react'
import Footer from '../Footer/Footer'
import { Link } from 'react-router-dom'
import AdminSideMenu from './AdminSideMenu'
import { role } from '../../Constants'
import RegisterService from '../../Services/RegisterService'


export default class Adminurmregistration extends Component {
    constructor(props) {
        super(props)
      
        this.state = {
         uname:"",  
         phoneno:"",
         nationality:"",
         location:"",
         ethnicity:"",
         education:"",
         resexp:"",
         publication:"",
         postions:"",
         resume:null,
         coverletter:null,
         username:"",
         password:"",
         role:role.Candidate
        }
      }
      isPhoneNumberValid = (number) => {
          const phoneNumberRegex = /^\d{10}$/; 
         
          return phoneNumberRegex.test(number);
        };
      
        isPasswordValid = (password) => {
          const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
          return passwordPattern.test(password);
        };
  
      handleInputChange = (event) => {
          this.setState({
              [event.target.name]: event.target.value,
          });
      };
  
      handleFileChange = (event) => {
          this.setState({
            [event.target.name]: event.target.files[0],
          });
        };
  
      registerBtnClick=(e)=>{
          e.preventDefault();
          if (!this.isPhoneNumberValid(this.state.phoneno)) {
              alert( "Please enter a valid 10-digit phone number");        
              return;
          }
          if (!this.isPasswordValid(this.state.password)) {
              alert( "Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, one number, and one special character." );
              return;
          }
      
          const formData = new FormData();
          formData.append('uname', this.state.uname);
          formData.append('name', this.state.uname);
          formData.append('phoneno', this.state.phoneno);
          formData.append('nationality', this.state.nationality);
          formData.append('location', this.state.location);
          formData.append('ethnicity', this.state.ethnicity);
          formData.append('education', this.state.education);
          formData.append('resexp', this.state.resexp);
          formData.append('publication', this.state.publication);
          formData.append('postions', this.state.postions);
          formData.append('resume', this.state.resume);
          formData.append('coverletter', this.state.coverletter);
          formData.append('email', this.state.username);
          formData.append('password', this.state.password);
          formData.append('role', role.Candidate);
          
          RegisterService.registerURM(formData)
          .then((respose)=>{
              console.log(respose);
              alert(respose.data);
          }).catch((error) => {
              alert("error " + error);
          });
      }
  
  
    render() {
    return (
      <div>
        <h1 className="dashhead">Admin Dashboard</h1>

<div className="secondarycontent">
    <AdminSideMenu/>

    <div className="container">
        <section className="card">
            <form onSubmit={this.registerBtnClick}> <br/>
             <h2> URM Candidate Registration Form</h2>
                <table className="form-group">
                    <tbody>
                      <tr>
                                            <th><label htmlFor="uname"><b> Name</b></label></th>
                                            <td> <input type="text" name="uname" id="uname" placeholder="Enter your name" required 
                                            value={this.state.uname}
                                            onChange={this.handleInputChange}/></td>
                                        </tr>
                                        <tr>
                                            <th><label htmlFor="phoneno"><b>Phone number</b></label></th>
                                            <td>
                                                <input type="text" name="phoneno" id="phoneno" placeholder="Enter your phone number" required 
                                                value={this.state.phoneno}
                                                onChange={this.handleInputChange}/><br/>
                                            </td>
                                        </tr>
                                     
                                        <tr>
                                            <th><label htmlFor="nationality"><b>Nationality</b></label></th>
                                            <td><input type="text" name="nationality" id="nationality" placeholder="Enter nationality"
                                            value={this.state.nationality}
                                            onChange={this.handleInputChange} />
                                            </td>
                                        </tr>
                                        <tr>
                                            <th><label htmlFor="location"><b>Location</b></label></th>
                                            <td><input type="text" name="location" id="location" placeholder="Enter location" 
                                            value={this.state.location}
                                            onChange={this.handleInputChange}/>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th><label htmlFor="ethnicity"><b>Ethnicity</b></label></th>
                                            <td><input type="text" name="ethnicity" id="ethnicity" placeholder="Enter ethnicity" 
                                            value={this.state.ethnicity}
                                            onChange={this.handleInputChange}/>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th><label htmlFor="education"><b>Education</b></label></th>
                                            <td><input type="text" name="education" id="education" placeholder="Enter education" 
                                            value={this.state.education}
                                            onChange={this.handleInputChange}/>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th><label htmlFor="resexp"><b>Research Experience</b></label></th>
                                            <td><input type="text" name="resexp" id="resexp" placeholder="Enter research experience" 
                                            value={this.state.resexp}
                                            onChange={this.handleInputChange}/>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th><label htmlFor="publication"><b>Publications</b></label></th>
                                            <td><input type="text" name="publication" id="publication" placeholder="Enter publication" 
                                            value={this.state.publication}
                                            onChange={this.handleInputChange}/>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th><label htmlFor="postions"><b>Postions</b></label></th>
                                            <td><input type="text" name="postions" id="postions" placeholder="Enter positions" 
                                            value={this.state.postions}
                                            onChange={this.handleInputChange}/> </td>
                                        </tr>
                                        <tr>
                                            <th><label htmlFor="resume"><b>Resume</b></label></th>
                                            <td><input type="file" id="resume" name="resume" 
                                            // value={this.state.resume}
                                            onChange={this.handleFileChange} required/>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th><label htmlFor="coverletter"><b>Cover Letter</b></label></th>
                                            <td><input type="file" id="coverletter" name="coverletter" 
                                            // value={this.state.coverletter}
                                            onChange={this.handleFileChange} required/>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th><label htmlFor="username"><b>Email</b></label></th>
                                            <td><input type="email" name="username" id="username" placeholder="Enter email" required 
                                            value={this.state.username}
                                            onChange={this.handleInputChange}/> </td>
                                        </tr>
                                        <tr>
                                            <th><label htmlFor="password"><b>Password</b></label></th>
                                            <td><input type="password" name="password" id="password" placeholder="Enter Password" required 
                                            value={this.state.password}
                                            onChange={this.handleInputChange}
                                            /><br />
                                              
                                            </td>
                                        </tr>
                                        <tr>
                                            <td colSpan="2">
                                                <div className="form-group">
                                                <button className="button"   type="submit"  >   SignUp   </button>  
                                                
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
    </div>
    )
  }
}
