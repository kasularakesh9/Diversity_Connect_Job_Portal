import React, { useState,useEffect } from 'react'
import Footer from '../Footer/Footer'
import { Link } from 'react-router-dom'
import { AppUrl } from '../../Constants'
import AcademicService from '../../Services/AcademicService';
import { useParams } from 'react-router-dom';
import { role } from '../../Constants';


export default function Jobviewurm(){
	const { id,jid } = useParams();
	const [jobDetails, setJobDetails] = useState({
		jobposition:"",
		jdesc:"",
		date:"",
		location:"",
	});
		useEffect(() => {
		  // Fetch the job details and update the state using the AdminService
		  AcademicService.academiaupdateJobs(jid)
			  .then((response) => {
				  console.log(response);
				  const jobData = response.data.phpresult[0]; // Extract the object from the array
				  setJobDetails({
					  jobposition: jobData.JOB_POSITIONS,
					  jdesc: jobData.J_DESC,
					  date: jobData.DATE,
					  location: jobData.LOCATION,
				  });
				  console.log("jobDetails", jobDetails);
			  })
			  .catch((error) => {
				  alert("error " + error);
			  });
	  }, []); 
    return (
      <div>
        <h1 className="dashhead">URM Candidate Dashboard</h1>
	<div className="container">
		<section className="card">
        <h2> View Job Posting</h2>
			<form action="" method="post"> <br/>

				<table className="form-group">
					<tbody>
					<tr>
						<th><label htmlFor="jobposition"><b>Position</b></label></th>
						<td> <input type="text" name="" id="jobposition" placeholder="Enter position"
								value={jobDetails.jobposition} readOnly /></td>
					</tr>
					<tr>
						<th><label htmlFor="jdesc"><b>Job Description</b></label></th>
						<td>
							<textarea rows="4" cols="57" id="jdesc" placeholder="Enter your institution description"
								readOnly  value={jobDetails.jdesc}/>
						</td>
					</tr>
					<tr>
						<th><label htmlFor="date"><b>Date</b></label></th>
						<td><input type="date" name="" id="date"value={jobDetails.date}  readOnly/>
						</td>
					</tr>
					<tr>
						<th><label htmlFor="location"><b>Location</b></label></th>
						<td><input type="text" name="" id="location" placeholder="Enter location" value={jobDetails.location} readOnly/>
						</td>
					</tr>
					<tr>
					<td colSpan="2">
						<div className="button-container">

                        <Link to={`/Urmdashboard/${id}`} className="button">Back to Dashboard</Link>
						</div>
						<br/>
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

