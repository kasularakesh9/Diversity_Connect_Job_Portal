import React, { Component } from 'react'
import Footer from '../Footer/Footer'
import AdminSideMenu from './AdminSideMenu'
import { withRouter } from '../../withRouter';
import { role } from '../../Constants';
import AdminService from '../../Services/AdminService';

class Adminpostjob extends Component {
    constructor(props) {
		super(props)
	  
		this.state = {
		  jobposition:"",
		  jdesc:"",
		  date:"",
		  location:"",
		  role: role.Jobposted
  
		}
	  }
  
	  handleInputChange = (event) => {
		  this.setState({
			[event.target.name]: event.target.value,
		  });
	  };
  
	  postJobSumbit=(e)=>{
		  e.preventDefault();
		  const {  jobposition, jdesc, date, location } = this.state;
		  console.log(this.state);
		  
		  
		  const respData = {
			  "jobposition": jobposition,
			  "jdesc": jdesc,
			  "date": date,
			  "location": location,           
			  "role": role.Jobposted
		  };
  
		 AdminService.register(respData)
		  .then((response)=>{
			  console.log(response);
			  alert(response.data);
			  this.setState({//reset form after success
				jobposition:"",
				jdesc:"",
				date:"",
				location:""
  
			  });
		  }).catch((error) => {
			  alert("error " + error);
		  });  
  
	  }
	  

    render() {
        return (
            <div>
                <h1 className="dashhead">Admin Dashboard</h1>

                    <AdminSideMenu />

                    <div className="container">
                        <section className="card">
                            <form onSubmit={this.postJobSumbit}> <br />
                                <h2> Job Posting Form</h2>
                                                    <table className="form-group">
                                        <tbody>
                                        <tr>
                                            <th><label htmlFor="jobposition"><b>Position</b></label></th>
                                            <td> <input type="text" name="jobposition" id="jobposition" placeholder="Enter position" required  value={this.state.jobposition}
                                                            onChange={this.handleInputChange}/></td>
                                        </tr>
                                        <tr>
                                            <th><label htmlFor="jdesc"><b>Job Description</b></label></th>
                                            <td>
                                                <textarea rows="4" cols="57" id="jdesc" name="jdesc"
                                                    placeholder="Enter your institution description"  value={this.state.jdesc}
                                                    onChange={this.handleInputChange}></textarea>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th><label htmlFor="date"><b>Date</b></label></th>
                                            <td><input type="date" name="date" id="date"  value={this.state.date}
                                                            onChange={this.handleInputChange} />
                                            </td>
                                        </tr>
                                        <tr>
                                            <th><label htmlFor="location"><b>Location</b></label></th>
                                            <td><input type="text" name="location" id="location" placeholder="Enter location"  value={this.state.location}
                                                            onChange={this.handleInputChange} /> </td>
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

                        <Footer />

                    </div>
                </div>
        )
    }
}

export default withRouter(Adminpostjob);
