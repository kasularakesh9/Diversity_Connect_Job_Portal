import React, { useState, useEffect } from 'react'
import Footer from '../Footer/Footer'
import { Link } from 'react-router-dom'
import { AppUrl } from '../../Constants'
import DEIService from '../../Services/DEIService';
import { useParams } from 'react-router-dom';
import { withRouter } from '../../withRouter';
import { role } from '../../Constants'



export default function Deiviewurmcandidate(){
	const { id } = useParams();
	const [searchDetails, setSearchDetails] = useState({	
		location: '',
		positions: '',
	  });
	
	  const handleSearch = (event) => {
		event.preventDefault();
		const {  location, positions } = searchDetails;
		
		
		const checknullLocation = location ? location : '';
		const checknullPosition = positions ? positions : '';
		console.log(searchDetails);
			/*const resdata = {                    
				"role": role.GetURMCandidate,
				"uname": uname,
				"location":location,
				"education":education,
			};*/


			/*DEIService.getURMCandidateforDEI(checknullLocation,checknullPosition)
			.then((response)=>{
				console.log(response);
				setSearchDetails(response.data.phpresult);
			}).catch((error) => {
				alert("error " + error);
			});*/
			DEIService.getURMCandidateforDEI(checknullLocation, checknullPosition)
			.then((response) => {
			  console.log(response);
			  if (response.data && response.data.phpresult && Array.isArray(response.data.phpresult)) {
				setSearchDetails(response.data.phpresult);
			  } else {
				console.error('Invalid response format.');
				setSearchDetails([]);
			  }
			})
			.catch((error) => {
			  alert('error ' + error);
			});

	  };
	
	 

    return (
      <div>
        <h1 className="dashhead">DEI Officer Dashboard</h1>
	  <div className="container">
		<section className="card">
        <h2> Search URM Candidate </h2>
			<form onSubmit={handleSearch}>	
				<table className="center">
					<tbody>
					<tr>
						<th><label htmlFor="positions"><b> Position</b></label></th>
						<td> <input type="text" name="positions" id="positions" value={searchDetails.positions} 
							onChange={(e) => setSearchDetails({ ...searchDetails, positions: e.target.value })} required/></td>
           
					</tr>
					<tr>
						<th><label htmlFor="location"><b>Location</b></label></th>
						<td><input type="text" name="location" id="location" value={searchDetails.location} 
							onChange={(e) => setSearchDetails({ ...searchDetails, location: e.target.value })} required/></td>
           
					</tr>
					<tr>
						<td colSpan="2">
							<div className="form-group">
								<button type="submit" className="button">   Search URM Candidate  </button>
								
							</div><br/>
						</td>
					</tr>
					</tbody>
				</table>
				<br/>
			</form>

			<table className="ftable">
				<thead>
					<tr>
					<th> Candidate ID</th>
						<th> Name</th>
						<th>Phone number</th>
						<th>Nationality</th>
						<th>Location</th>
						<th>Ethnicity</th>
						<th>Education</th>
						<th>Research Experience</th>
						<th>Publications</th>
						<th>Postions</th>
					</tr>
				</thead>
				<tbody>
				{searchDetails.length > 0 ? (
					
					searchDetails.map((rs) => (
						<tr key={rs.UId}>
							<td>{rs.UId}</td>
							<td>{rs.Uname}</td>
							<td>{rs.Phone_no}</td>
							<td>{rs.Nationality}</td>
							<td>{rs.Location}</td>
							<td>{rs.Enthinicity}</td>
							<td>{rs.Education}</td>
							<td>{rs.Res_exp}</td>
							<td>{rs.Publications}</td>
							<td>{rs.Positions}</td>							
						</tr>
						))
				
				) : (
				<tr>
					<td colSpan="10">No data available</td>
				</tr>
				)}
		{
			}
				</tbody>
			</table>
			<div className="button-container">
            <Link to= {`/Deidashboard/${id}`}className="button">Back to Dashboard</Link>
			</div>

		</section>
		<Footer/>

	</div>
    </div>
    )
  }
