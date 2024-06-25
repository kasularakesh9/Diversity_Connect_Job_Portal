import React, { useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import Footer from '../Footer/Footer'
import { Link } from 'react-router-dom'
import { AppUrl } from '../../Constants'
import DEIService from '../../Services/DEIService';
import { role,backendUrl } from '../../Constants';
import { withRouter } from '../../withRouter';

export default function Deiapprovepostjobs (){

	const { id } = useParams();
	const [jobDetails, setJobDetails] = useState([]);

	useEffect(() => {
		// Fetch faculty details and update the state using the AcademicService
		DEIService.fetchJobsDEI(id)
				.then((response)=>{
					console.log(response);
					setJobDetails(response.data.phpresult);
				}).catch((error) => {
					alert("error " + error);
				});
	  }, []);

	 const handleAccept=(jid)=>{
			alert('You have acceptted the job!');
					const resdata = {                    
						"role": role.acceptJobs,
						"jid": jid,
						"id": id
					};
					DEIService.AcceptJob(resdata)
					.then((response)=>{
						console.log(response);						
					}).catch((error) => {
						alert("error " + error);
					});


	  };
	 	
	  const handleDecline=(jid)=> {
		alert(`Declined job position `);
		const resdata = {                    
			"role": role.declineJobs,
			"jid": jid,
			"id": id
		};
		DEIService.DeclineJob(resdata)
		.then((response)=>{
			console.log(response);						
		}).catch((error) => {
			alert("error " + error);
		});
	  };
	
    return (
    <div>
        	<h1 className="dashhead">DEI Officer Dashboard</h1>
	<div className="container">
		<section className="card">
        <h2> Job Posted</h2>
			<table className="ftable">
					<thead>
						<tr>
						<th>Job Id</th>
							<th>Position</th>
							<th>Job Description</th>
							<th>Date</th>
							<th>Location</th>
							<th> Accept </th>
							<th> Decline </th>
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
															<button  className="button" onClick={() => handleAccept(rs.JID)}>Accept</button>	
														</div>
													</td>
													<td>
														<div className="">
															<button  className="button" onClick={() => handleDecline(rs.JID)}>Decline</button>	
														</div>
													</td>
										</tr>
                   ) )}

				
                </tbody>
			</table>
			<div className="button-container">
             <Link to={`/Deidashboard/${id}`} className="button">Back to Dashboard</Link>
			</div>
		</section>

		<Footer/>

	</div>
      </div>
    )
  }

