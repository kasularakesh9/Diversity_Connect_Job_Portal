import React, { useState, useEffect } from 'react'
import Footer from '../Footer/Footer'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom';
import DEIService from '../../Services/DEIService';


export default function Deidashboard (){
    const [jobDetails, setJobDetails] = useState([]);

    const { id } = useParams();

    const [userDetails, setUserDetails] = useState({
        dname: "",
        ddesc: "",
        role1: "",
        organization: "", 
        goal:"",
        initiatives:"",
        new_events:"",
        postions:"",
        email:"",
        password:""
    });

    useEffect(() => {
        // Fetch the job details and update the state using the AdminService
        DEIService.getDEIProfileDatails(id)
            .then((response) => {
                console.log(response);
                const userData = response.data.phpresult[0]; // Extract the object from the array
                console.log(userData);
                if (userData) {
                    setUserDetails({
                        dname: userData.DNAME,
                        ddesc: userData.D_DESC,
                        role1: userData.DROLE,
                        organization: userData.ORGANIZATION,
                        goal:userData.GOALS,
                        initiatives:userData.INITIATIVES,
                        new_events:userData.NEW_EVENTS,
                        postions:userData.POSITIONS,
                        email: userData.EMAIL,
                        password:userData.PASSWORD,
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
        DEIService.DEIDashboardfetchJobs(id)
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
            <Link to={`/Deiapplicant/${id}/${rs.JID}`} className="button">See all Applicants</Link>
            <Link to={`/Deijobview/${id}/${rs.JID}`} className="button">Details</Link>
        </div>
        );
    };

    return (
      <div>
        <h1 className="dashhead">DEI Officer Dashboard</h1>
    <div className="content">

        <div className="left-side">
            <Link to={`/Profiledeiofficer/${id}`} className="dashbutton">Edit Profile</Link>
            <Link to={`/Deiofficerreport/${id}`} className="dashbutton">Report</Link>
            <Link to={`/Deiviewurmcandidate/${id}`} className="dashbutton">Search URM Candidate</Link>
            <h2>
                <p>Personal Information</p>
            </h2>
            <div className="perinfo">
                <label> Name:</label>
                <input type="text" value={userDetails.dname} readOnly />
                <label>Organization:</label>
                <input type="text" value={userDetails.ddesc} readOnly />
                <label>Goals:</label>
                <input type="text" value={userDetails.goal} readOnly />
                <label>Initiatives:</label>
                <input type="text" value={userDetails.initiatives} readOnly />
                <label>New Initiatives or Events:</label>
                <input type="text" value={userDetails.new_events} readOnly />
                <label>Email:</label>
                <input type="text" value={userDetails.email} readOnly />
                <label>Positions Offered:</label>
                <input type="text"value={userDetails.postions}readOnly />
            </div>



        </div>
        <div className="right-side">
           
                                            <Link to={`/Deipostjobs/${id}`} className="button">Create Jobs</Link>
                                            <Link to={`/Deiapprovepostjobs/${id}`} className="button">Approve Jobs</Link>
                                            <div className="joblist">
                                                <div className="job-posting">
                                                    
                                                {jobDetails.map((rs) => (
                                                    <JobPostItem key={rs.JID} rs={rs} /> 
                                                    ))} 
                                            </div>
                                        </div>
                                    </div>


        
    </div>
    <div className="chatbutton chatbutton button">
            <a href='http://127.0.0.1:8080/?name=DEI'>Chat</a>
    </div>
   <Footer/>
    </div>
    )
  }

