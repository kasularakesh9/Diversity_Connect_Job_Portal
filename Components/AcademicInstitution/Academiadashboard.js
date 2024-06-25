import React, { useState, useEffect } from 'react'
import Footer from '../Footer/Footer'
import { Link } from 'react-router-dom'
import { academiaPersonalInfo,academiaFacultyDetails, AppUrl } from '../../Constants'
import AcademicService from '../../Services/AcademicService';
import { useParams } from 'react-router-dom';

export default function Academiadashboard(){
   
  
       
    const [facultyDetails, setFacultyDetails] = useState([]);
    const [jobDetails, setJobDetails] = useState([]);
        const { id } = useParams();
        const [userDetails, setUserDetails] = useState({
            institution_name:"",
            email:"",
            research_focus_area:"",
            position:"",
        });
        useEffect(() => {
            // Fetch the job details and update the state using the AdminService
            AcademicService.getProfileDatails(id)
                .then((response) => {
                    console.log(response);
                    const userData = response.data.phpresult[0]; // Extract the object from the array
                    if (userData) {
                        setUserDetails({
                            institution_name: userData.Aname,
                            email: userData.EMAIL,
                            research_focus_area: userData.Research_focus,
                            position: userData.Positions,
                        });
                        console.log("userDetails inside useEffect", userDetails); 
                    } else {
                        // Handle the case where the array is empty or undefined
                        console.error("Profile data not found");
                    }
                    console.log("userDetails", userDetails);
                })
                .catch((error) => {
                    alert("error " + error);
                });
        }, [id]);
  
            useEffect(() => {
                // Fetch faculty details and update the state using the AcademicService
                AcademicService.getfaculty(id)
                  .then((response) => {
                    console.log(response);
                    setFacultyDetails(response.data.phpresult);
                  })
                  .catch((error) => {
                    alert("error " + error);
                  });
              }, []);
      
              useEffect(() => {
                // Fetch faculty details and update the state using the AcademicService
                AcademicService.academiafetchJobs(id)
                    .then((response)=>{
                        console.log(response);
                        setJobDetails(response.data.phpresult);
                    }).catch((error) => {
                        alert("error " + error);
                    });
              }, []);
      
                    
            const JobPostItem = ({ rs }) => {
                return (
                <div>
                    <h3>{rs.JOB_POSITIONS}</h3>
                    <div className="noinfo">
                    <label>No of candidates applied:</label>
                    <input type="text" defaultValue="14" readOnly />
                    </div>
                    <Link to={`/Applicantsacademia/${id}/${rs.JID}`} className="button">See all Applicants</Link>
                    <Link to={`/Academiajobview/${id}/${rs.JID}`} className="button">Details</Link>
                </div>
                );
            };
   
        return (
            <div>
                <h1 className="dashhead">Academia Dashboard</h1>
                <div className="content">

                    <div className="left-side">
                        <Link to={`/Profileacademia/${id}`} className="button">Edit Profile</Link>
                        <Link to={`/Bookmarkedcandidates/${id}`} className="button">Bookmarked Candidates</Link>
                        <Link to={`/Viewurmcandidate/${id}`} className="button">Search</Link>
                        <h2>
                            <p>Personal Information</p>
                        </h2>
                        <div className="perinfo">
                            <label>Institution Name:</label>
                            <input type="text"  value={userDetails.institution_name} readOnly />
                                <label>Research focus area:</label>
                                <input type="text" value={userDetails.research_focus_area} readOnly />
                                    <label>Email:</label>
                                    <input type="text" value={userDetails.email} readOnly />
                                        <label>Positions Offered:</label>
                                        <input type="text" value={userDetails.position} readOnly />
                                        </div>
                                        <br />
                                            <div className="Facultysec">
                                                <h2>Faculty</h2>
                                                <Link to={`/Addfaculty/${id}`} className="button">Add Faculty</Link>
                                            </div>
                                            <table className="ftable">
                                                <thead>
                                                    <tr>
                                                        <th>ID</th>
                                                        <th>Name</th>
                                                        <th>Subject</th>
                                                        <th>Class</th>
                                                        <th>Hours</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                {facultyDetails.map((rs) => (
                                                            <tr key={rs.FID}>
                                                                <td>{rs.FID}</td>
                                                                <td>{rs.FNAME}</td>
                                                                <td>{rs.FSUBJECT}</td>
                                                                <td>{rs.CLASS}</td>
                                                                <td>{rs.HOURS}</td>
                                                            </tr>
                                                        ))
                                                   }
                                                </tbody>

                                            </table>
                                        </div>
                                        <div className="right-side">
                                            <Link to={`/Jobposts/${id}`} className="button">Post Jobs</Link>
                                            
                                            <div className="joblist">
                                                <div className="job-posting">
                                                    
                                                {jobDetails.map((rs) => (
                                                    <JobPostItem key={rs.JID} rs={rs} /> // Use the new component and pass the data as props
                                                    ))} 
                                            </div>
                                        </div>
                                    </div>
                                    <div className="chatbutton chatbutton button">
                                    <a href='http://127.0.0.1:8080/?name=Academia'>Chat</a>
                                    </div>
                                   
                                </div>
                                <Footer />
                                </div>
                                )
                               
  
}
