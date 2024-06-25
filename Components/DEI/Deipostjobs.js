import React, { useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import Footer from '../Footer/Footer'
import { Link } from 'react-router-dom'
import { AppUrl } from '../../Constants'
import DEIService from '../../Services/DEIService';
import { role,backendUrl } from '../../Constants';
import { withRouter } from '../../withRouter';


export default function Deipostjobs() {
	const { id } = useParams();
	  const [jobDetails, setJobDetails] = useState({
        jobposition:"",
        jdesc:"",
        date:"",
        location:"",
    });

	const handleInputChange = (event) => {
		const { name, value } = event.target;
		setJobDetails((prevJobDetails) => ({
			...prevJobDetails,
			[name]: value,
		}));
	};
  
	  const handleSubmit=(e)=>{
		e.preventDefault();
        const {  jobposition, jdesc, date, location } = jobDetails;
        
        
        
        const respData = {
            "jobposition": jobposition,
            "jdesc": jdesc,
            "date": date,
            "location": location,           
            "role": role.Jobposteddei,
             "id":id
        };

        
		DEIService.registerjob(respData)
		  .then((response)=>{
			  console.log(response);
			  alert(response.data);
			  setJobDetails({//reset form after success
				jobposition:"",
				jdesc:"",
				date:"",
				location:""
  
			  });
		  }).catch((error) => {
			  alert("error " + error);
		  });  
  
	  }
	  
  
	
    return (
      <div>
        <h1 className="dashhead">DEI Officer Dashboard</h1>
	<div className="container">
		<section className="card">
        <h2> Job Posting Form</h2>
			<form onSubmit={handleSubmit}> <br/>
				<table className="form-group">
				<tbody>
					<tr>
						<th><label htmlFor="jobposition"><b>Position</b></label></th>
						<td> <input type="text" name="jobposition" id="jobposition" placeholder="Enter position" required  value={setJobDetails.jobposition}
                                        onChange={handleInputChange}/></td>
					</tr>
					<tr>
						<th><label htmlFor="jdesc"><b>Job Description</b></label></th>
						<td>
							<textarea rows="4" cols="57" id="jdesc" name="jdesc"
								placeholder="Enter your institution description"  value={setJobDetails.jdesc}
								onChange={handleInputChange}></textarea>
						</td>
					</tr>
					<tr>
						<th><label htmlFor="date"><b>Date</b></label></th>
						<td><input type="date" name="date" id="date"  value={setJobDetails.date}
                                        onChange={handleInputChange} />
						</td>
					</tr>
					<tr>
						<th><label htmlFor="location"><b>Location</b></label></th>
						<td><input type="text" name="location" id="location" placeholder="Enter location"  value={setJobDetails.location}
                                        onChange={handleInputChange} /> </td>
					</tr>
					<tr>
						<td colSpan="2">
							<div className="form-group">
								<button type="submit" className="button" >Post Job</button>	
							</div><br/>
						</td>
					</tr>
					</tbody>
				</table>

			</form>
		</section>
		<br /><br />
		<div className="button-container">
        <Link to={`/Deidashboard/${id}`} className="button">Back to Dashboard</Link>
		</div>

	</div>

	<Footer/>
      </div>
    )
  }

