import React, { useState, useEffect} from 'react'
import Footer from '../Footer/Footer'
import { Link } from 'react-router-dom'
import AdminSideMenu from './AdminSideMenu'
import { useParams } from 'react-router-dom';
import AdminService from '../../Services/AdminService';
import { role } from '../../Constants';

export default function Adminupdateacademia(){
    const { id } = useParams();
    const [academiaDetails, setAcademiaDetails] = useState({
        aname: "",
        adesc: "",
        reserachfocus: "",
        postions: "", 
        
   });
    
   useEffect(() => {
    // Fetch the job details and update the state using the AdminService
    AdminService.updateAcademia(id)
        .then((response) => {
            console.log(response);
            const jobData = response.data.phpresult[0]; // Extract the object from the array
            setAcademiaDetails({
                aname: jobData.Aname,
                adesc: jobData.A_Desc,
                reserachfocus: jobData.Research_focus,
                postions: jobData.Positions
                
            });
            console.log("academiaDetails", academiaDetails);
        })
        .catch((error) => {
            alert("error " + error);
        });
}, [id]); 



    const handleChange = (event) => {
        const { name, value } = event.target;
        setAcademiaDetails((prevAcademiaDetails) => ({
            ...prevAcademiaDetails,
            [name]: value,
        }));
    };
    
const  handleSubmit=(e)=>{
    e.preventDefault();
    const {  aname, adesc, reserachfocus, postions} = academiaDetails;
    console.log(academiaDetails);
    
    
    const respData = {
        "id":id,
        "aname": aname,
        "adesc": adesc,
        "reserachfocus": reserachfocus,
        "postions": postions,           
        "role": role.Academiachange
        
    };

   AdminService.changedetailsofAcademia(respData)
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
            <h2> Update Academic Institution Details</h2>
                <table className="form-group">
                    <tbody>
                    <tr>
                        <th><label htmlFor="aname"><b>Institution Name</b></label></th>
                        <td> <input type="text" name="aname" id="aname" value={academiaDetails.aname} onChange={handleChange } /></td>
                    </tr>
                    <tr>
                        <th><label htmlFor="adesc"><b>Description</b></label></th>
                        <td>
                            <textarea rows="4" cols="57" id="adesc" name="adesc"
                                placeholder="Enter your institution description" 
                                value={academiaDetails.adesc} onChange={handleChange }/></td>
                    </tr>
                    <tr>
                        <th><label htmlFor="reserachfocus"><b>Research Area</b></label></th>
                        <td><input type="text" name="reserachfocus" id="reserachfocus" placeholder="Enter research area"
                                value={academiaDetails.reserachfocus} onChange={handleChange } />
                        </td>
                    </tr>
                    <tr>
                        <th><label htmlFor="postions"><b>Postions</b></label></th>
                        <td><input type="text" name="postions" id="postions" placeholder="Enter positions" value={academiaDetails.postions} onChange={handleChange } />
                        </td>
                    </tr>                    

                    <tr>
                        <td colSpan="2">
                            <div className="button-container">
                                <button type="submit" className="button">Save</button>

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

