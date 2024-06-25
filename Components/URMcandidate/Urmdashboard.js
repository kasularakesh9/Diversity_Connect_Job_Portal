import React, { useState, useEffect } from 'react'
import Footer from '../Footer/Footer'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom';
import URMService from '../../Services/URMService';

export default function Urmdashboard(){


    const [jobDetails, setJobDetails] = useState([]);

    const { id } = useParams();

    const [userDetails, setUserDetails] = useState({
        uname:"",
            phoneno:"",
            nationality:"",
             location:"",  
             ethinicity:"",
             education:"",
             resexp:"",
             publication:"",
             postions:"",
             email:""
    });

    useEffect(() => {
        // Fetch the job details and update the state using the AdminService
        URMService.getProfileDatails(id)
            .then((response) => {
                console.log(response);
                const userData = response.data.phpresult[0]; // Extract the object from the array
                console.log(userData);
                if (userData) {
                    setUserDetails({
                        uname: userData.Uname,
                        phoneno: userData.Phone_no,
                        nationality: userData.Nationality,
                        location: userData.Location,
                        ethinicity:userData.Ethinicity,
                        education:userData.Education,
                        resexp:userData.Res_exp,
                        publication:userData.Publications,
                        postions:userData.Positions,
                        email:userData.EMAIL,
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
        
        URMService.URMfetchAppliedJobs(id)
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
            <Link to={`/Applicanturm/${id}/${rs.JID}`} className="button">View Job Status</Link>
            <Link to={`/Jobviewurm/${id}/${rs.JID}`} className="button">Details</Link>
        </div>
        );
    };

    return (
      <div>
        <h1 className="dashhead">URM Candidate Dashboard</h1>
       <div className="content">

        <div className="left-side">
            <Link to={`/Profileurm/${id}`} className="button">Edit Profile</Link>
            <h2>
                <p>Personal Information</p>
            </h2>
            <div className="perinfo">
                <label>Name:</label>
                <input type="text"value={userDetails.uname} readOnly />
                <label>Phone No:</label>
                <input type="text" value={userDetails.phoneno} readOnly />
                <label>Email:</label>
                <input type="text" value={userDetails.email} readOnly />
                <label>Location:</label>
                <input type="text" value={userDetails.location} readOnly />
                <label>Nationality:</label>
                <input type="text" value={userDetails.nationality} readOnly />
                <label>Ethnicity:</label>
                <input type="text" value={userDetails.ethinicity} readOnly />
                <label>Education:</label>
                <input type="text" value={userDetails.education} readOnly />
                <label>Research focus area:</label>
                <input type="text" value={userDetails.resexp} readOnly />
                <label>Publications:</label>
                <input type="text" value={userDetails.publication} readOnly />
                <label>Positions Interested:</label>
                <input type="text" value={userDetails.postions} readOnly />
               
            </div>
            <br/>

        </div>
        <div className="right-side">
             <Link to={`/Urmcheckjobroles/${id}`} className="button">Check Available Job Roles</Link>
                                            
                                            <div className="joblist">
                                                <div className="job-posting">
                                                    
                                                {jobDetails.map((rs) => (
                                                    <JobPostItem key={rs.JID} rs={rs} /> // Use the new component and pass the data as props
                                                    ))} 
                                            </div>
                                        </div>

        </div>
        <div className="chatbutton">
        <a href='http://127.0.0.1:8080?name=URM'>Chat</a>
        </div>

    </div>
   <Footer/>
      </div>
    )
  }

