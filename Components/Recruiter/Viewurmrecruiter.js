import React, { Component } from 'react'
import Footer from '../Footer/Footer'
import { Link } from 'react-router-dom';  
import { AppUrl } from '../../Constants'; 

export default class Viewurmrecruiter extends Component {
	handleSearch = (event) => {
		event.preventDefault();
		const exp = event.target.exp.value;
		const position = event.target.position.value;
		const location = event.target.location.value;
		const message = `Research Experience: ${exp}\nPosition: ${position}\nLocation: ${location}`;
		alert(message);
		event.target.reset();
	  };
	  handleBookmark = (profile) => {
		alert(`You have approved ${profile} profile.`);
	  };
	
	render() {
    return (
      <div>
        <h1 className="dashhead">Recruiter Dashboard</h1>
	<div className="container">
    <h2> Search Matched Candidates </h2>
		<section className="card">
		<form onSubmit={this.handleSearch}>	
			<table>
				<tbody>
				<tr>
					<th><label htmlFor="exp"><b>Research Experience</b></label></th>
					<td> <input type="text" name="exp" id="exp" placeholder='Enter Research Experience'/></td>
				</tr>
				<tr>
					<th><label htmlFor="position"><b>Position</b></label></th>
					<td> <input type="text" name="position" id="position" placeholder='Enter Position' /></td>
				</tr>
				<tr>
					<th><label htmlFor="location"><b>Location</b></label></th>
					<td><input type="text" name="location" id="location" placeholder='Enter Location'/> </td>
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
			</form>
			<br/>

			<table className="ftable">
				<thead>
					<tr>
						<th> Name</th>
						<th>Phone number</th>
						<th>Nationality</th>
						<th>Location</th>
						<th>Ethnicity</th>
						<th>Education</th>
						<th>Research Experience</th>
						<th>Publications</th>
						<th>Postions</th>
						<th>Approve </th>
					</tr>
				</thead>
				<tbody>
					<tr>

						<td> Rahul </td>
						<td> 2144568745</td>
						<td> Indian </td>
						<td> Dallas </td>
						<td> Asian </td>
						<td>masters </td>
						<td> 3</td>
						<td> xyz</td>
						<td>Post doc </td>
						<td>
							<div className="">
								<button className="button" onClick={() => this.handleBookmark('Rahul')}>   Approve   </button>
							</div>
						</td>
					</tr>

					<tr>

						<td> Shax </td>
						<td> 2144568745</td>
						<td> Indian </td>
						<td> Dallas </td>
						<td> Asian </td>
						<td>masters </td>
						<td> 3</td>
						<td> ABC</td>
						<td>Post doc </td>
						<td>
							<div className="">
							<button className="button" onClick={() => this.handleBookmark('Shax')}>   Approve   </button>
							</div>
						</td>
					</tr>
				</tbody>
			</table>

			<div className="button-container">
            <Link to={AppUrl.Recruiterdashboard} className="button"> Back to Dashboard</Link>
			</div>
		</section>

		<Footer/>


	</div>
      </div>
    )
  }
}
