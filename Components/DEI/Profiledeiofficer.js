import React, { useState, useEffect } from 'react'
import Footer from '../Footer/Footer'
import { Link, Navigate } from 'react-router-dom'
import { withRouter } from '../../withRouter';
import { useParams } from 'react-router-dom';
import DEIService from '../../Services/DEIService';
import { role } from "../../Constants";

export default function  Profiledeiofficer(){
	const { id } = useParams();
	const [deiDetails, setDeiDetails] = useState({
		dname: "",
		ddesc: "",
		role1: "",
		organization: "", 
		goal:"",
		initiatives:"",
		new_events:"",
		postions:"",
		email:"",
		password:"",
   });
   
   useEffect(() => {
	   // Fetch the job details and update the state using the AdminService
	   DEIService.updateDEIProfile(id)
		   .then((response) => {
			   console.log(response);
			   const jobData = response.data.phpresult[0]; // Extract the object from the array
			   setDeiDetails({
					dname: jobData.DNAME,
					ddesc: jobData.D_DESC,
					role1: jobData.DROLE,
					organization: jobData.ORGANIZATION,
					goal:jobData.GOALS,
					initiatives:jobData.INITIATIVES,
					new_events:jobData.NEW_EVENTS,
					postions:jobData.POSITIONS,
					email:jobData.EMAIL,
					password:jobData.PASSWORD
			   });
			   console.log("deiDetails", deiDetails);
		   })
		   .catch((error) => {
			   alert("error " + error);
		   });
   }, [id]); 
  
  

	   const handleChange = (event) => {
		   const { name, value } = event.target;
		   setDeiDetails((prevDeiDetails) => ({
			   ...prevDeiDetails,
			   [name]: value,
		   }));
	   };
	   
   const  handleSubmit=(e)=>{
	   e.preventDefault();
	   const {  dname, ddesc, role1, organization,goal,initiatives,new_events,postions,email,password} = deiDetails;
	   console.log(deiDetails);
	   
	   
	   const respData = {
		   "id":id,
		   "dname": dname,
		   "ddesc": ddesc,
		   "role1": role1,
		   "organization": organization,           
		   "role": role.DEIchangeprofile,
			"goal":goal,
			"initiatives":initiatives,
			"new_events":new_events,
			"postions":postions,
			"email":email,
			"password":password
	   };

	   DEIService.changedetailsDEIProfile(respData)
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
        <h2> DEI Officer Profile</h2>
			<form onSubmit={handleSubmit}> <br/>

				<table className="form-group">
                    <tbody>
					<tr>
                        <th><label htmlFor="dname"><b>Name</b></label></th>
                        <td> <input type="text" name="dname" id="dname" placeholder="Enter your name " value={deiDetails.dname} onChange={handleChange }/></td>
                    </tr>
                    <tr>
                        <th><label htmlFor="ddesc"><b>Description</b></label></th>
                        <td> <textarea rows="3" cols="57" id="ddesc" name="ddesc"
                                placeholder="Enter description"value={deiDetails.ddesc} onChange={handleChange }/></td>
                    </tr>
                    <tr>
                        <th><label htmlFor="role1"><b>Role</b></label></th>
                        <td> <input type="text" name="role1" id="role1" placeholder="Enter role" value={deiDetails.role1} onChange={handleChange }/></td>
                    </tr>
                    <tr>
                        <th><label htmlFor="organization"><b>Organization</b></label></th>
                        <td> <input type="text" name="organization" id="organization" placeholder="Enter your organization"
                                value={deiDetails.organization} onChange={handleChange }/></td>
                    </tr>
                    <tr>
                        <th><label htmlFor="goal"><b>Goals</b></label></th>
                        <td> <input type="text" name="goal" id="goal" placeholder="Enter goals" value={deiDetails.goal} onChange={handleChange }/>
                        </td>
                    </tr>
                    <tr>
                        <th><label htmlFor="initiatives"><b>Initiatives</b></label></th>
                        <td> <input type="text" name="initiatives" id="initiatives" placeholder="Enter Initiatives"
                                value={deiDetails.initiatives} onChange={handleChange }/></td>
                    </tr>
                    <tr>
                        <th><label htmlFor="new_events"><b>new Initiatives/Events</b></label></th>
                        <td> <input type="text" name="new_events" id="new_events" placeholder="Enter new Initiatives or Events"
                                value={deiDetails.new_events} onChange={handleChange }/></td>
                    </tr>
                    <tr>
                        <th><label htmlFor="postions"><b>Postions</b></label></th>
                        <td><input type="text" name="postions" id="postions" placeholder="Enter positions" value={deiDetails.postions} onChange={handleChange }/>
                        </td>
                    </tr>
					<tr>
						<th><label htmlFor="email"><b>Email</b></label></th>
						<td><input type="text" name="email" id="email" placeholder="Enter email" value={deiDetails.email} onChange={handleChange } required />
						</td>
					</tr>
					<tr>
						<th><label htmlFor="password"><b>Password</b></label></th>
						<td><input type="password" name="password" id="password" placeholder="Enter password" value={deiDetails.password} onChange={handleChange }  required/>
						</td>
					</tr>
					<tr>
						<td colSpan="2">
							<div className="button-container">
							<button  className="button">   Save  </button>
							</div>
							<br/>
						</td>
					</tr>
                    </tbody>
				</table>

			</form> <br />
			<div className="button-container">
            <Link to={`/Deidashboard/${id}`} className="button">Back to Dashboard</Link>
			</div>
		</section>
		<Footer/>


	</div>
    </div>
    )
  }

