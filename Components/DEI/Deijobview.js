import React, { useState,useEffect } from 'react'
import Footer from '../Footer/Footer'
import { Link } from 'react-router-dom'
import { withRouter } from '../../withRouter';
import AcademicService from '../../Services/AcademicService';
import { useParams } from 'react-router-dom';
import { role } from '../../Constants';

export default function Deijobview(){
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

    
    const handleChange = (event) => {
      const { name, value } = event.target;
      setJobDetails((prevJobDetails) => ({
          ...prevJobDetails,
          [name]: value,
      }));
  };

    const  handleSubmit=(e)=>{
      e.preventDefault();
      const {  jobposition, jdesc, date, location } = jobDetails;
      console.log(jobDetails);
      
      
      const respData = {
          "jobposition": jobposition,
          "jdesc": jdesc,
          "date": date,
          "location": location,           
          "role": role.AcademiaJobdetailsupdate,
           "jid":jid
      };

      AcademicService.academicchangedetailsofJobs(respData)
      .then((response)=>{
          console.log(response);
          alert(response.data);
          
      }).catch((error) => {
          alert("error " + error);
      });  

  }
 
    return (
      <div>
        <h1 className="dashhead">DEI Officer Dashboard</h1>
	<div className="container">
		<section className="card">
        <h2> View Job Posting</h2>
			<form onSubmit={handleSubmit}> <br/>

				<table className="form-group">
					<tbody>
				    <tr>
                  <th><label htmlFor="jobposition"><b>Position</b></label></th>
                  <td>
                    <input type="text" name="jobposition" id="jobposition" placeholder="Enter position" value={jobDetails.jobposition} onChange={handleChange }/>
                  </td>
                </tr>
                <tr>
                  <th><label htmlFor="jdesc"><b>Job Description</b></label></th>
                  <td>
                    <textarea rows="4" cols="57" id="jdesc" placeholder="Enter your institution description"
                   value={jobDetails.jdesc} onChange={handleChange }/></td>
                </tr>
                <tr>
                  <th><label htmlFor="date"><b>Date</b></label></th>
                  <td>
                    <input type="date" name="date" id="date" value={jobDetails.date} onChange={handleChange }/>
                  </td>
                </tr>
                <tr>
                  <th><label htmlFor="location"><b>Location</b></label></th>
                  <td>
                    <input type="text" name="location" id="location" placeholder="Enter location" value={jobDetails.location} onChange={handleChange }/>
                  </td>
                </tr>
                    <tr>
					<td colSpan="2">
						<div className="button-container">
							<button type="submit" className="button">Save</button>
						</div>
						<br/>
					</td>
                    </tr>
					</tbody>
				</table>

			</form> <br />
			<div className="button-container">
              <Link to= {`/Deidashboard/${id}`} className="button">Back to Dashboard</Link>
			</div>
		</section>

		<Footer/>

	</div>
      </div>
    )
  }

