import React, { useState, useEffect } from 'react'
import Footer from '../Footer/Footer'
import { Link, Navigate } from 'react-router-dom'
import { withRouter } from '../../withRouter';
import { useParams } from 'react-router-dom';
import URMService from '../../Services/URMService';
import { role } from "../../Constants";

export default function Profileurm(){
	
        
	  const { id } = useParams();
	  const [userDetails, setUserDetails] = useState({
		uname:"",
		phoneno:"",
		nationality:"",
		 location:"",  
		 ethinicity:"",
		 education:"",
		 resexp:"",
		 publication:"",
		 postions:"",
		 email:"",
		 password:""
	  });
	  
	  useEffect(() => {
		  // Fetch the job details and update the state using the AdminService
		  URMService.updateURMProfile(id)
				  .then((response) => {
					  console.log(response);
					  const jobData = response.data.phpresult[0];
					  setUserDetails({
						uname: jobData.Uname,
						phoneno: jobData.Phone_no,
						nationality: jobData.Nationality,
						location: jobData.Location,
						ethinicity:jobData.Ethinicity,
						education:jobData.Education,
						resexp:jobData.Res_exp,
						publication:jobData.Publications,
						postions:jobData.Positions,
						email:jobData.EMAIL,
						password:jobData.PASSWORD
					  });
					  console.log("userDetails", userDetails);
				  })
				  .catch((error) => {
					  alert("error " + error);
				  });
		  }, [id]); 
  
		  const handleChange = (event) => {
			  const { name, value } = event.target;
			  setUserDetails((prevProfileDetails) => ({
				  ...prevProfileDetails,
				  [name]: value,
			  }));
		  };
		  
		 const handleSubmit=(e)=>{
			  e.preventDefault();
			  const {  uname, phoneno, nationality, location,ethinicity,education,resexp,publication,postions,email,password } = userDetails;
			  console.log(userDetails);
			  
			  
			  const respData = {				
				"uname": uname,
				"phoneno": phoneno,
				"nationality": nationality,
				"location": location, 
				"ethinicity":ethinicity,
				 "education":education,
				 "resexp":resexp,
				 "publication":publication,
				 "postions":postions,  
				 "email":email,
				 "password":password,                 
				  "role": role.URMProfilechange,
				   "id":id
			  };
	  
			  URMService.changedetailsofURMProfile(respData)
				  .then((response)=>{
					  console.log(response);
					  alert(response.data);
					  
				  }).catch((error) => {
					  alert("error " + error);
				  });  
	  
		  }
	  

    return (
      <div>
        <h1 className="dashhead">URM Candidate Dashboard</h1>
	<div className="container">
		<header className="header">


		</header>

		<section className="card">
			<form onSubmit={handleSubmit}> <br/>
            <h2> URM Candidate Profile</h2>
				<table className="form-group">
					<tbody>
					<tr>
                        <th><label htmlFor="uname"><b> Name</b></label></th>
                        <td> <input type="text" name="uname" id="uname" placeholder="Enter your name"value={userDetails.uname} onChange={handleChange }/></td>
                    </tr>
                    <tr>
                        <th><label htmlFor="phoneno"><b>Phone number</b></label></th>
                        <td>
                            <input type="text" name="phoneno" id="phoneno" placeholder="Enter your phone number"
                                value={userDetails.phoneno} onChange={handleChange }/>
                        </td>
                    </tr>
                    <tr>
                        <th><label htmlFor="nationality"><b>Nationality</b></label></th>
                        <td><input type="text" name="nationality" id="nationality" placeholder="Enter nationality"
                                 value={userDetails.nationality} onChange={handleChange }/>
                        </td>
                    </tr>
                    <tr>
                        <th><label htmlFor="location"><b>Location</b></label></th>
                        <td><input type="text" name="location" id="location" placeholder="Enter location"  value={userDetails.location} onChange={handleChange }/>
                        </td>
                    </tr>
                    <tr>
                        <th><label htmlFor="ethinicity"><b>Ethnicity</b></label></th>
                        <td><input type="text" name="ethinicity" id="ethinicity" placeholder="Enter ethinicity"  value={userDetails.ethinicity} onChange={handleChange }/>
                        </td>
                    </tr>
                    <tr>
                        <th><label htmlFor="education"><b>Education</b></label></th>
                        <td><input type="text" name="education" id="education" placeholder="Enter education"  value={userDetails.education} onChange={handleChange }/>
                        </td>
                    </tr>
                    <tr>
                        <th><label htmlFor="resexp"><b>Research Experience</b></label></th>
                        <td><input type="text" name="resexp" id="resexp" placeholder="Enter research experience"
                                 value={userDetails.resexp} onChange={handleChange }/>
                        </td>
                    </tr>
                    <tr>
                        <th><label htmlFor="publication"><b>Publications</b></label></th>
                        <td><input type="text" name="publication" id="publication" placeholder="Enter publication"  value={userDetails.publication} onChange={handleChange }/>
                        </td>
                    </tr>
                    <tr>
                        <th><label htmlFor="postions"><b>Postions</b></label></th>
                        <td><input type="text" name="postions" id="postions" placeholder="Enter positions"  value={userDetails.postions} onChange={handleChange }/>
                        </td>
                    </tr>
					<tr>
                        <th><label htmlFor="email"><b>Email</b></label></th>
                        <td><input type="text" name="email" id="email" placeholder="Enter email"  value={userDetails.email} onChange={handleChange }/>
                        </td>
                    </tr>
					<tr>
                        <th><label htmlFor="password"><b>Password</b></label></th>
                        <td><input type="password" name="password" id="password" placeholder="Enter password"  value={userDetails.password} onChange={handleChange }/>
                        </td>
                    </tr>
					<tr>
						<td colSpan="2">
							<div className="button-container">
							<button type="submit" className="button" >Save</button>								
							</div>
							<br/>
						</td>
					</tr>
                    </tbody>
				</table>

			</form><br />
			<div className="button-container">
            <Link to={`/Urmdashboard/${id}`}  className="button">Back to Dashboard</Link>
			</div>
		</section>

		<Footer/>
	</div>
      </div>
    )
  }

