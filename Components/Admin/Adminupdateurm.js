import React, { useState, useEffect} from 'react'
import Footer from '../Footer/Footer'
import { Link } from 'react-router-dom'
import AdminSideMenu from './AdminSideMenu'
import { useParams } from 'react-router-dom';
import AdminService from '../../Services/AdminService';
import { role } from '../../Constants';

export default function Adminupdateurm(){
    const { id } = useParams();
    const [urmDetails, setURMDetails] = useState({
        
            uname:"",
            phoneno:"",
            nationality:"",
             location:"",  
             ethinicity:"",
             education:"",
             resexp:"",
             publication:"",
             postions:"",
    });
    
    useEffect(() => {
        // Fetch the job details and update the state using the AdminService
        AdminService.updateURM(id)
            .then((response) => {
                console.log(response);
                const jobData = response.data.phpresult[0]; // Extract the object from the array
                setURMDetails({
                    uname: jobData.Uname,
                    phoneno: jobData.Phone_no,
                    nationality: jobData.Nationality,
                    location: jobData.Location,
                    ethinicity:jobData.Ethinicity,
                    education:jobData.Education,
                    resexp:jobData.Res_exp,
                    publication:jobData.Publications,
                    postions:jobData.Positions,
                });
                console.log("urmDetails", urmDetails);
            })
            .catch((error) => {
                alert("error " + error);
            });
    }, [id]); 
   
   

        const handleChange = (event) => {
            const { name, value } = event.target;
            setURMDetails((prevURMDetails) => ({
                ...prevURMDetails,
                [name]: value,
            }));
        };
        
    const  handleSubmit=(e)=>{
        e.preventDefault();
        const {  uname, phoneno, nationality, location,ethinicity,education,resexp,publication,postions} = urmDetails;
        console.log(urmDetails);
        
        
        const respData = {
            "id":id,
            "uname": uname,
            "phoneno": phoneno,
            "nationality": nationality,
            "location": location, 
            "ethinicity":ethinicity,
             "education":education,
             "resexp":resexp,
             "publication":publication,
             "postions":postions,
             "role": role.URMchange,
        };

       AdminService.changedetailsofURM(respData)
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
            <h2> Update URM Candidate </h2>
                <table className="form-group">
                    <tbody>
                    <tr>
                        <th><label htmlFor="uname"><b> Name</b></label></th>
                        <td> <input type="text" name="uname" id="uname" placeholder="Enter your name"value={urmDetails.uname} onChange={handleChange }/></td>
                    </tr>
                    <tr>
                        <th><label htmlFor="phoneno"><b>Phone number</b></label></th>
                        <td>
                            <input type="text" name="phoneno" id="phoneno" placeholder="Enter your phone number"
                                value={urmDetails.phoneno} onChange={handleChange }/>
                        </td>
                    </tr>
                    <tr>
                        <th><label htmlFor="nationality"><b>Nationality</b></label></th>
                        <td><input type="text" name="nationality" id="nationality" placeholder="Enter nationality"
                                 value={urmDetails.nationality} onChange={handleChange }/>
                        </td>
                    </tr>
                    <tr>
                        <th><label htmlFor="location"><b>Location</b></label></th>
                        <td><input type="text" name="location" id="location" placeholder="Enter location"  value={urmDetails.location} onChange={handleChange }/>
                        </td>
                    </tr>
                    <tr>
                        <th><label htmlFor="ethinicity"><b>Ethnicity</b></label></th>
                        <td><input type="text" name="ethinicity" id="ethinicity" placeholder="Enter ethinicity"  value={urmDetails.ethinicity} onChange={handleChange }/>
                        </td>
                    </tr>
                    <tr>
                        <th><label htmlFor="education"><b>Education</b></label></th>
                        <td><input type="text" name="education" id="education" placeholder="Enter education"  value={urmDetails.education} onChange={handleChange }/>
                        </td>
                    </tr>
                    <tr>
                        <th><label htmlFor="resexp"><b>Research Experience</b></label></th>
                        <td><input type="text" name="resexp" id="resexp" placeholder="Enter research experience"
                                 value={urmDetails.resexp} onChange={handleChange }/>
                        </td>
                    </tr>
                    <tr>
                        <th><label htmlFor="publication"><b>Publications</b></label></th>
                        <td><input type="text" name="publication" id="publication" placeholder="Enter publication"  value={urmDetails.publication} onChange={handleChange }/>
                        </td>
                    </tr>
                    <tr>
                        <th><label htmlFor="postions"><b>Postions</b></label></th>
                        <td><input type="text" name="postions" id="postions" placeholder="Enter positions"  value={urmDetails.postions} onChange={handleChange }/>
                        </td>
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

            </form>
        </section>
        <Footer/>

    </div>
      </div>
 
    )
  }
