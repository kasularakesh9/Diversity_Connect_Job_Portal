import React, { useState,useEffect } from 'react'
import Footer from '../Footer/Footer'
import { Link } from 'react-router-dom'
import { AppUrl } from '../../Constants'
import URMService from '../../Services/URMService';
import { useParams } from 'react-router-dom';
import { role } from '../../Constants';

export default function Applicanturm(){
	
    const [jobDetails, setJobDetails] = useState([]);
        const { id, jid } = useParams();

		useEffect(() => {
			URMService.getApplicationStatus(id, jid)
			.then((response) => {
			  console.log(response);
			  setJobDetails(response.data.phpresult);
			})
			.catch((error) => {
			  alert("error " + error);
			});
		  }, []);
    return (
      <div>
        <h1 className="dashhead">URM Candidate Dashboard</h1>
	<div className="container">
    <h2> URM Application Status</h2>
		<section className="card">

			<table className="ftable">
					<thead>
						<tr>
							<th>Job Id</th>
							<th>Application Id</th>
							<th>Status</th>
							<th>Student Id</th>
							
						</tr>
					</thead>
				<tbody> {jobDetails.map((rs) => (
                <tr key={rs.App_Id}>
                  <td>{rs.JID}</td>
                  <td>{rs.App_Id}</td>
                  <td>{rs.STATUS}</td>
                  <td>{rs.UID}</td>
                </tr>
              ))}
				</tbody>

			</table>
			<div className="button-container">
            <Link to={`/Urmdashboard/${id}`} className="button">Back to Dashboard</Link>
			</div>
		</section>

		<Footer/>

	</div>
      </div>
    )
  }

