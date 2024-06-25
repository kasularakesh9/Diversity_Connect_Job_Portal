import React, { useState, useEffect} from 'react'
import Footer from '../Footer/Footer';
import AdminSideMenu from './AdminSideMenu';
import { useParams } from 'react-router-dom';
import AdminService from '../../Services/AdminService';
import { role } from '../../Constants';



export default function Adminupdatejob(){
    const { id } = useParams();
    const [jobDetails, setJobDetails] = useState({
        jobposition:"",
        jdesc:"",
        date:"",
        location:"",
    });
    
    useEffect(() => {
        // Fetch the job details and update the state using the AdminService
        AdminService.updateJobs(id)
            .then((response) => {
                console.log(response);
                const jobData = response.data.phpresult[0]; // Extract the object from the array
                setJobDetails({
                    jobposition: jobData.JOB_POSITIONS,
                    jdesc: jobData.J_DESC,
                    date: jobData.DATE,
                    location: jobData.LOCATION,
                });
                console.log("jobDetails", jobDetails);
            })
            .catch((error) => {
                alert("error " + error);
            });
    }, [id]); 
   
   

        const handleChange = (event) => {
            const { name, value } = event.target;
            setJobDetails((prevJobDetails) => ({
                ...prevJobDetails,
                [name]: value,
            }));
        };
        
    const  handleSubmit=(e)=>{
        e.preventDefault();
        const {  jobposition, jdesc, date, location } = jobDetails;
        console.log(jobDetails);
        
        
        const respData = {
            "jobposition": jobposition,
            "jdesc": jdesc,
            "date": date,
            "location": location,           
            "role": role.Jobchange,
             "id":id
        };

       AdminService.changedetailsofJobs(respData)
        .then((response)=>{
            console.log(response);
            alert(response.data);
            
        }).catch((error) => {
            alert("error " + error);
        });  

    }
              
    return (
      <div>
        <h1 className="dashhead">Admin Dashboard</h1>

    <AdminSideMenu/>

    <div className="container">
        <section className="card">
            <form onSubmit={handleSubmit}> <br/>
            <h2> Update Job </h2>
                <table className="form-group">
                    <tbody>
                    <tr>
                        <th><label htmlFor="jobposition"><b>Position</b></label></th>
                        <td> <input type="text" name="jobposition" id="jobposition"   value={jobDetails.jobposition} onChange={handleChange } /></td>
                    </tr>
                    <tr>
                        <th><label htmlFor="jdesc"><b>Description</b></label></th>
                        <td>
                            <textarea rows="4" cols="57" id="jdesc"  name="jdesc"
                                placeholder="Enter your institution description" value={jobDetails.jdesc} onChange={handleChange}/>
                        </td>
                    </tr>
                    <tr>
                        <th><label htmlFor="date"><b>Date</b></label></th>
                        <td><input type="date" name="date" id="date" value={jobDetails.date} onChange={handleChange}/>
                        </td>
                    </tr>
                    <tr>
                        <th><label htmlFor="location"><b>Location</b></label></th>
                        <td><input type="text" name="location" id="location" placeholder="Enter location" value={jobDetails.location} onChange={handleChange}/>
                        </td>
                    </tr>


                    <tr>
                        <td colSpan="2">
                            <div className="button-container">
                            <button type="submit" className="button" >Update</button>	
                            </div>
                            <br/>
                        </td>
                    </tr>
                    </tbody>
                </table>

            </form>
        </section>

        <Footer/>

      </div>
      </div>
 
    )
  }


