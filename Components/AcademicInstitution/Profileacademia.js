import React, { useState, useEffect } from 'react'
import Footer from '../Footer/Footer'
import { Link, Navigate } from 'react-router-dom'
import { withRouter } from '../../withRouter';
import { useParams } from 'react-router-dom';
import AcademicService from '../../Services/AcademicService';
import { role } from "../../Constants";


function Profileacademia(){
    
    const { id } = useParams();
    const [userDetails, setUserDetails] = useState({
        institution_name:"",
        email:"",
        research_focus_area:"",
        position:"",
        desc:"",
        password:"",
    });
    
    useEffect(() => {
        // Fetch the job details and update the state using the AdminService
        AcademicService.updateAcademiaProfile(id)
                .then((response) => {
                    console.log(response);
                    const userData = response.data.phpresult[0];
                    setUserDetails({
                        institution_name:userData.Aname,
                        email:userData.EMAIL,
                        password:userData.PASSWORD,
                        research_focus_area: userData.Research_focus,
                        position: userData.Positions,
                        desc: userData.A_Desc
                    
                    });
                    console.log("userDetails", userDetails);
                })
                .catch((error) => {
                    alert("error " + error);
                });
        }, [id]); 

        const handleChange = (event) => {
            const { name, value } = event.target;
            setUserDetails((prevProfileDetails) => ({
                ...prevProfileDetails,
                [name]: value,
            }));
        };
        const  handleSubmit=(e)=>{
            e.preventDefault();
            const {  institution_name, email, research_focus_area, position,desc,password } = userDetails;
            console.log(userDetails);
            
            
            const respData = {
                "institution_name":institution_name,
                "email":email,
                "research_focus_area":research_focus_area,
                "position":position,
                "desc": desc,     
                "password":password,                    
                "role": role.AcademiaProfilechange,
                 "id":id
            };
    
            AcademicService.changedetailsofAcademiaProfile(respData)
                .then((response)=>{
                    console.log(response);
                    alert(response.data);
                    
                }).catch((error) => {
                    alert("error " + error);
                });  
    
        }
    
        return (
            <div>
                <h1 className="dashhead">Academia Dashboard</h1>

                <div className="container">
                    <section className="card">
                        <form onSubmit={handleSubmit}> <br />
                            <h2> Academia Profile</h2>
                            <table className="form-group">
                                <tbody>
                                    <tr>
                                        <th><label htmlFor="institution_name"><b>Institution Name</b></label></th>
                                        <td> <input type="text" name="institution_name" id="institution_name" value={userDetails.institution_name} 
                                        onChange={handleChange}/></td>
                                    </tr>
                                    <tr>
                                        <th><label htmlFor="desc"><b>Description</b></label></th>
                                        <td>
                                            <textarea rows="4" cols="57" id="desc" name="desc"
                                                placeholder="Enter your institution description"
                                                onChange={handleChange}
                                                value={userDetails.desc}>                                                    
                                            </textarea>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th><label htmlFor="research_focus_area"><b>Research Area</b></label></th>
                                        <td><input type="text" name="research_focus_area" id="research_focus_area" placeholder="Enter research area"
                                            value={userDetails.research_focus_area} 
                                            onChange={handleChange}/>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th><label htmlFor="position"><b>Postions</b></label></th>
                                        <td><input type="text" name="position" id="position" placeholder="Enter positions" 
                                        value={userDetails.position}
                                        onChange={handleChange} />
                                        </td>
                                    </tr>
                                    <tr>
                                        <th><label htmlFor="email"><b>Email</b></label></th>
                                        <td><input type="email" name="email" id="email" placeholder="Enter email"
                                            value={userDetails.email} 
                                            onChange={handleChange}/> </td>
                                    </tr>
                                    <tr>
                                        <th><label htmlFor="password"><b>Password</b></label></th>
                                        <td><input type="password" name="password" id="password" placeholder="Enter password"
                                            value={userDetails.password} 
                                            onChange={handleChange}/> </td>
                                    </tr>
                                    <tr>
                                        <td colSpan="2">
                                            <div className="button-container">
                                                <button type="submit" href="" className="button">save</button>
                                            </div>
                                            <br />
                                        </td>
                                    </tr>
                                </tbody>
                            </table>

                        </form> <br />
                        <div className="button-container">
                            <Link to={`/Academiadashboard/${id}`} className="button">Back to Dashboard</Link>
                        </div>
                    </section>

                    <Footer />
                </div>
            </div>
        )
    }

export default withRouter(Profileacademia);