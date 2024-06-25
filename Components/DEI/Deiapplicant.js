import React, { useState, useEffect } from 'react'
import Footer from '../Footer/Footer'
import { Link } from 'react-router-dom'
import AcademicService from '../../Services/AcademicService';
import { useParams } from 'react-router-dom';
import { withRouter } from '../../withRouter';
import { role } from '../../Constants'


export default function Deiapplicant(){
  const { id,jid } = useParams();

  
  const [applicantsDetails, setapplicantsDetails] = useState([]);
      
  useEffect(() => {
    AcademicService.getApplicants(jid)
      .then((response) => {
        console.log(response); // Check the structure of the response
        setapplicantsDetails(response.data.phpresult);
        
         
          
        
      }).catch((error) => {
        alert("error " + error);
      });
  }, []);


    return (
      <div>
        <h1 className="dashhead">DEI Officer Dashboard</h1>
  <div className="container">
    <section className="card">
    <h2>Application Status</h2>
      <table className="ftable">
          <thead>
            <tr>
              <th>Job Id</th>
              <th>Application Id</th>
              <th>Status</th>
              <th>Student Id</th>
            </tr>
          </thead>
        <tbody>
        {applicantsDetails.map((rs) => (
              <tr key={rs.App_Id}>
                <td>{rs.JID}</td>
                <td>{rs.App_Id}</td>
                <td>{rs.STATUS}</td>
                <td>{rs.UID}</td>                
              </tr>
            ))
          }
        </tbody>

      </table>
      <div className="button-container">
      <Link to={`/Deidashboard/${id}`} className="button">Back to Dashboard</Link>
      </div>
    </section>

    <Footer/>

  </div>
      </div>
    )
  }

