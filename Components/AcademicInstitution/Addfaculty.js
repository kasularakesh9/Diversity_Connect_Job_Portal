import React, { useState,useEffect } from 'react'
import Footer from '../Footer/Footer'
import { Link } from 'react-router-dom'
import { AppUrl, academiaFacultyDetails } from '../../Constants'
import { withRouter } from '../../withRouter';
import AcademicService from '../../Services/AcademicService';
import { role,backendUrl } from '../../Constants';
import { useParams } from 'react-router-dom';


function Addfaculty(){
    const { id } = useParams();
    const [facultyDetails, setFacultyDetails] = useState({
        facultyName:"",
        subject:"",
        classtype:"",
        hours:"",
    });
    
      
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFacultyDetails((prevProfileDetails) => ({
                ...prevProfileDetails,
                [name]: value,
            }));        
    };

  
    const  addFacultyClick=(e)=>{
                e.preventDefault();
                const {  facultyName, subject, classtype, hours } = facultyDetails;
                console.log(facultyDetails);
                
                
                const respData = {
                    "facultyName": facultyName,
                    "subject": subject,
                    "classtype": classtype,
                    "hours": hours,           
                    "role": role.Addfaculty,
                    "id":id
                };
                console.log("methodaddfaculty",respData);
            AcademicService.register(respData)
                .then((response)=>{
                    console.log(response);
                    alert(response.data);
                    setFacultyDetails({//reset form after success
                        facultyName:"",
                        subject:"",
                        classtype:"",
                        hours:""

                    });
                }).catch((error) => {
                    alert("error " + error);
                });

                }
            
   
    
        return (
            <div>
                <h1 className="dashhead">Academia Dashboard</h1>
                <div className="container">
                    <section className="card">
                        <form onSubmit={addFacultyClick}>
                        
                            <h2> Add Faculty</h2>
                            <table className="form-group">
                                
                                <tbody>
                                    <tr>
                                        <th><label htmlFor="facultyName"><b>Faculty Name</b></label></th>
                                        <td><input type="text" name="facultyName" id="facultyName" placeholder="Enter faculty name" required 
                                        value={setFacultyDetails.facultyName}
                                        onChange={handleInputChange}/></td>
                                    </tr>
                                    <tr>
                                        <th><label htmlFor="subject"><b>Subject</b></label></th>
                                        <td><input type="text" name="subject" id="subject" placeholder="Enter subject" 
                                        value={setFacultyDetails.subject}
                                        onChange={handleInputChange}/></td>
                                    </tr>
                                    <tr>
                                        <th><label htmlFor="classtype"><b>Class</b></label></th>
                                        <td><input type="text" name="classtype" id="classtype" placeholder="Enter class" 
                                        value={setFacultyDetails.classtype}
                                        onChange={handleInputChange}/></td>
                                    </tr>
                                    <tr>
                                        <th><label htmlFor="hours"><b>Hours</b></label></th>
                                        <td><input type="text" name="hours" id="hours" placeholder="Enter hours" required 
                                        value={setFacultyDetails.hours}
                                        onChange={handleInputChange}/></td>
                                    </tr>
                                    <tr>
                                    <td colSpan="2">
                                        <div className="form-group">
                                            <button type="submit" className="button" >Add</button>	
                                        </div><br/>
                                    </td>
                                        
                                    </tr>
                                    
                                </tbody>
                                
                            </table>
                        </form>
                        <br />
                        <div className="button-container">
                            <Link to={`/Academiadashboard/${id}`} className="button">Back to Dashboard</Link>
                        </div>
                    </section>
                    <Footer />
                </div>
            </div>
        );
    }



export default withRouter(Addfaculty);