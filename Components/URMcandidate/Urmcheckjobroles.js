import React, { useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import Footer from '../Footer/Footer'
import { Link } from 'react-router-dom'
import { AppUrl } from '../../Constants'
import URMService from '../../Services/URMService';
import { role,backendUrl } from '../../Constants';
import { withRouter } from '../../withRouter';

export default function Urmcheckjobroles(){
	const { id } = useParams();
	const [jobDetails, setJobDetails] = useState([]);

	useEffect(() => {
		// Fetch faculty details and update the state using the AcademicService
				URMService.fetchJobs(id)
				.then((response)=>{
					console.log(response);
					setJobDetails(response.data.phpresult);
				}).catch((error) => {
					alert("error " + error);
				});
	  }, []);

	 const handleApplyClick=(jid)=>{
			alert('You have successfully applied for the job!');
					const resdata = {                    
						"role": role.applyJobs,
						"jid": jid,
						"id": id
					};
			URMService.ApplyJob(resdata)
					.then((response)=>{
						console.log(response);						
					}).catch((error) => {
						alert("error " + error);
					});


	  };

    return (
      <div>
        <h1 className="dashhead">URM Candidate Dashboard</h1>
	<div className="container">
		<section className="card">
        <h2> Jobs Posted</h2>
			<table className="ftable">
				<thead>
						<tr>
					    	<th>Job ID</th>
							<th>Position</th>
							<th>Job Description</th>
							<th>Date Posted</th>
							<th>Location</th>
							<th> Apply </th>
						</tr>
				</thead>
                <tbody>
				{jobDetails.map((rs) => (<tr key={rs.JID}>
                                                <td>{rs.JID}</td>
                                                <td>{rs.JOB_POSITIONS}</td>
                                                <td>{rs.J_DESC}</td>
                                                <td>{rs.DATE}</td>
                                                <td>{rs.LOCATION}</td>                                                
                                                
                                                <td>
												<div className="">
                                                        <a className="button" onClick={()=>handleApplyClick(rs.JID)}>
														Apply
                                                        </a>
                                                    </div>
                                                </td>
                                            </tr>
                   ) )}
				
                </tbody>

			</table>
            <div>
			<Link to={`/Urmdashboard/${id}`} className="button">Back to Dashboard</Link>
			</div>
		</section>

		<Footer/>

	</div>

      </div>
    )
  }

