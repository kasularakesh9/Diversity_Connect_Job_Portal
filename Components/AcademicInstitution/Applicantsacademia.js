import React, { useState, useEffect } from 'react'
import Footer from '../Footer/Footer'
import { Link } from 'react-router-dom'
import AcademicService from '../../Services/AcademicService';
import { useParams } from 'react-router-dom';
import { withRouter } from '../../withRouter';
import { role } from '../../Constants'


function Applicantsacademia(){  
  const { id,jid } = useParams();

  
  const [applicantsDetails, setapplicantsDetails] = useState([]);
      
  useEffect(() => {
    // Fetch faculty details and update the state using the AcademicService
    AcademicService.getApplicants(jid)
      .then((response) => {
        console.log(response); // Check the structure of the response
        setapplicantsDetails(response.data.phpresult);
        /*const applicantsData = response.data.phpresult[0];
        const myArray = Object.entries(applicantsData);
      
        console.log("applicantsData",applicantsData);
                    if (myArray) {
                      setapplicantsDetails(myArray);
                        console.log("userDetails inside useEffect", myArray); 
                    } else {
                        // Handle the case where the array is empty or undefined
                        console.error("Profile data not found");
                    }*/
         
          
        
      }).catch((error) => {
        alert("error " + error);
      });
  }, []);




   const handleBookmark = (uid,id) => {
		//
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
          <section className="card">
            <table className="ftable">
              <thead>
                <tr>
                  <th>Job Id</th>
                  <th>Application Id</th>
                  <th>Status</th>
                  <th>Candidate Id</th>
                  <th>Flag</th>
                </tr>
              </thead>
              <tbody>
              {applicantsDetails.map((rs) => (
              <tr key={rs.App_Id}>
                <td>{rs.JID}</td>
                <td>{rs.App_Id}</td>
                <td>{rs.STATUS}</td>
                <td>{rs.UID}</td>
                <td>
                  <div className="">
                  <div className="">
                    <button className="button" onClick={()=>handleBookmark(rs.UID,id)}>Bookmark</button>  
                    </div>
                  </div>
                </td>
              </tr>
            ))
          }
                
              </tbody>
            </table>
            <div className="button-container">
             <Link to={`/Academiadashboard/${id}`} className="button">Back to Dashboard</Link>
            </div>
          </section>

          <Footer />
        </div>
      </div>
    );
  }
  export default withRouter(Applicantsacademia)