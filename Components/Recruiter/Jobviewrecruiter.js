import React, { Component } from 'react'
import Footer from '../Footer/Footer'
import { Link } from 'react-router-dom'; 
import { AppUrl } from '../../Constants'; 

export default class Jobviewrecruiter extends Component {
	handleSubmit = (event) => {
        event.preventDefault();
        const jobposition = event.target.jobposition.value;
        const description = event.target.jdesc.value;
        const date = event.target.date.value;
        const location = event.target.location.value;
        const message = `Position: ${jobposition}\nDescription: ${description}\nDate: ${date}\nLocation: ${location}`;
        alert(message);
      };
	render() {
    return (
      <div>
        <h1 className="dashhead">Recruiter Dashboard</h1>
	    <div className="container">
		<section className="card">
			<form onSubmit={this.handleSubmit}> <br/>
            <h2> View Job Posting</h2>
				<table className="form-group">
					<tbody>
					<tr>
						<th><label htmlFor="jobposition"><b>Position</b></label></th>
						<td> <input type="text" name="" id="jobposition" placeholder="Enter position"
								defaultValue="Backend Developer"/></td>
					</tr>
					<tr>
						<th><label htmlFor="jdesc"><b>Job Description</b></label></th>
						<td>
							<textarea rows="4" cols="57" id="jdesc"
								placeholder="Enter your institution description" defaultValue="A software developer with a focus on web application development and server-side, or database-side, programming is known as a back-end developer. The code that the website visitor cannot see is handled by back-end developers, but they are also in charge of making sure that the front end, or what the visitor sees and interacts with, is fully working as a whole"/>
						</td>
					</tr>
					<tr>
						<th><label htmlFor="date"><b>Date</b></label></th>
						<td><input type="date" name="" id="date" defaultValue="2020-01-01"/>
						</td>
					</tr>
					<tr>
						<th><label htmlFor="location"><b>Location</b></label></th>
						<td><input type="text" name="" id="location" placeholder="Enter location" defaultValue="USA"/> </td>
					</tr>
                    <tr>
					<td colSpan="2">
						<div className="button-container">
							<button type="Submit" className="button">Save</button>
						</div>
						<br/>
					</td>
					</tr>
                    </tbody>
				</table>

			</form> <br />
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
