import React, { useState, useEffect } from 'react'
import Footer from '../Footer/Footer'
import { Link } from 'react-router-dom'
import { AppUrl } from '../../Constants'
import AcademicService from '../../Services/AcademicService';
import { useParams } from 'react-router-dom';
import { withRouter } from '../../withRouter';
import { role } from '../../Constants'


function Viewurmcandidate(){

	const { id } = useParams();
	const [searchDetails, setSearchDetails] = useState({
		uname: '',
		location: '',
		education: '',
	  });
	
	  const handleSearch = (event) => {
		event.preventDefault();
		const { uname, location, education } = searchDetails;
		
		const checknullUname = uname ? uname : '';
		const checknullLocation = location ? location : '';
		const checknullEducation = education ? education : '';
		console.log(searchDetails);
			/*const resdata = {                    
				"role": role.GetURMCandidate,
				"uname": uname,
				"location":location,
				"education":education,
			};*/


			AcademicService.getURMCandidate(checknullUname,checknullLocation,checknullEducation)
			.then((response)=>{
				console.log(response);
				setSearchDetails(response.data.phpresult);
			}).catch((error) => {
				alert("error " + error);
			});

	  };
	  
	 const handleBookmark = (uid,id) => {
				const resdata = {                    
				"role": role.Academiabookmark,
				"uid": uid,
				"id":id
			};
			AcademicService.academiaBookmark(resdata)
			.then((response)=>{
				console.log(response);
				alert(`You saved candidate ${uid} for future reference.`);
			}).catch((error) => {
				alert("error " + error);
			});
	  };

    return (
      <div>
        <h1 className="dashhead">Academia Dashboard</h1>
	<div className="container">
    <h2> View URM Candidate </h2>
		<section className="card">
		 	<form onSubmit={handleSearch}>	
				<table>
					<tbody>
						<tr>
							<th><label htmlFor="uname"><b> Name</b></label></th>
							
							<td> <input type="text" name="uname" id="uname" value={searchDetails.uname} 
							onChange={(e) => setSearchDetails({ ...searchDetails, uname: e.target.value })} required /></td>
           
							
						</tr>
						<tr>
							<th><label htmlFor="location"><b> Location</b></label></th>
							<td> <input type="text" name="location" id="location" value={searchDetails.location} 
							onChange={(e) => setSearchDetails({ ...searchDetails, location: e.target.value })} required/></td>
           
						</tr>
						<tr>
							<th><label htmlFor="education"><b>Education</b></label></th>
							<td><input type="text" name="education" id="education" value={searchDetails.education} 
							onChange={(e) => setSearchDetails({ ...searchDetails, education: e.target.value })} required/></td>
           
						</tr>
						<tr>
							<td colSpan="2">
								<div className="form-group">
								<button type="submit" className="button" >Search</button>	
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
					<th> Candidate Id</th>
						<th> Name</th>
						<th>Phone number</th>
						<th>Nationality</th>
						<th>Location</th>
						<th>Ethnicity</th>
						<th>Education</th>
						<th>Research Experience</th>
						<th>Publications</th>
						<th>Postions</th>
						<th>Bookmark </th>
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
									<td>
									
									<div className="">
										<button className="button" onClick={()=>handleBookmark(rs.UId,id)}>Bookmark</button>  
										</div>
									
									</td>
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
			</div>
							<Link to={`/Academiadashboard/${id}`} className="button">Back to Dashboard</Link>

		</section>
		<Footer/>

	</div>
      </div>
    )
  }
  export default withRouter(Viewurmcandidate);
