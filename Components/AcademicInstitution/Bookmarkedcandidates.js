import React, { useState, useEffect } from 'react'
import Footer from '../Footer/Footer'
import { Link } from 'react-router-dom'
import { AppUrl } from '../../Constants'
import AcademicService from '../../Services/AcademicService';
import { useParams } from 'react-router-dom';
import { withRouter } from '../../withRouter';

function Bookmarkedcandidates(){
    const { id } = useParams();

    const [fetchflagcandidateDetails, setfetchflagcandidateDetails] = useState([]);
      
    
        useEffect(() => {
            // Fetch faculty details and update the state using the AcademicService
                    AcademicService.getFlagCandidate(id)
                .then((response)=>{
                    console.log(response);
                    setfetchflagcandidateDetails(response.data.phpresult);
                }).catch((error) => {
                    alert("error " + error);
                });
          }, []);

     

   
      
        return (
            <div>
                <h1 className="dashhead">Academia Dashboard</h1>
                <div className="container">
                    <section className="card">
                        <h2>Bookmarked Candidates</h2>
                        <table className="ftable">
                            <thead>
                                <tr>
                                    <th>Student Id</th>
                                    <th>Name</th>
                                    <th>Nationality</th>
                                    <th>Ethnicity</th>
                                    <th>Research topic</th>
                                    <th>Education</th>
                                </tr>
                            </thead>
                            <tbody>
                            {fetchflagcandidateDetails.map(
                                        (rs) => <tr key={rs.UID}>
                                            <td >{rs.UID}</td>
                                            <td>{rs.Uname}</td>
                                            <td>{rs.Nationality}</td>
                                            <td>{rs.Ethinicity}</td>
                                            <td>{rs.Res_exp}</td>
                                            <td>{rs.Education}</td>
                                        </tr>)}
                            </tbody>
                        </table>
                        <div className="button-container">
                            <Link to={`/Academiadashboard/${id}`} className="button">Back to Dashboard</Link>
                        </div>
                    </section>

                    <Footer />
                </div>
            </div>
        )
    }
 export default withRouter(Bookmarkedcandidates);