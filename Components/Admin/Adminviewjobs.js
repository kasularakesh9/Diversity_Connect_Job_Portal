import React, { Component } from 'react'
import Footer from '../Footer/Footer'
import { Link } from 'react-router-dom'
import AdminSideMenu from './AdminSideMenu'
import { role, AppUrl } from '../../Constants'
import AdminService from '../../Services/AdminService';


export default class Adminviewjobs extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            jobPostedDetails: []
        };
    }
    componentDidMount() {
        // Fetch personal information and faculty details
       // this.fetchPersonalInfo();
       
            
        this.showJobs();
      }
      showJobs(){
        AdminService.fetchJobs()
        .then((response)=>{
            console.log(response);
           this.setState({ jobPostedDetails: response.data.phpresult});
        }).catch((error) => {
            alert("error " + error);
        });
    }

    
    handleDeleteJobPost=(id)=>{
        alert(`You deleted  ${id} position.`);
        const resdata = {                    
            "role": role.Deletejobs,
              "jid": id
        };
        AdminService.deleteJobs(resdata)
        .then((response)=>{
            console.log(response);
        }).catch((error) => {
            alert("error " + error);
        });

    }
    render() {
   const { jobPostedDetails } = this.state;
    return (
            <div>
              <h1 className="dashhead">Admin Dashboard</h1>

                    <AdminSideMenu />

                    <div className="container">
                        <section className="card">
                            <h2> Jobs Posted</h2>
                            <table className="ftable">
                                <thead>
                                    <tr>
                                        <th>Job Id</th>
                                        <th>Position</th>
                                        <th>Job Description</th>
                                        <th>  Date  </th>
                                        <th>Location</th>
                                        <th>Active</th>
                                        <th> Delete </th>
                                        <th> update </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {jobPostedDetails.map((rs)=>
                                            <tr key={rs.JID}>
                                                <td>{rs.JID}</td>
                                                <td>{rs.JOB_POSITIONS}</td>
                                                <td>{rs.J_DESC}</td>
                                                <td>{rs.DATE}</td>
                                                <td>{rs.LOCATION}</td>
                                                <td>{rs.ACTIVE}</td>
                                                <td>
                                                    <div className="">
                                                        <a className="button" onClick={()=>this.handleDeleteJobPost(rs.JID)}>
                                                            Delete
                                                        </a>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="">
                                                    <Link to={`/Adminupdatejobs/${rs.JID}`} className="button">Update</Link>

                                                    </div>
                                                </td>
                                            </tr>
                                        )}
                                </tbody>
                            </table>
                            <div className="button-container">
                                <Link to={AppUrl.Adminpostjob} className="button">Create new Job Posting</Link>
                            </div>
                        </section>

                        <Footer />
                    </div>
                </div>
          
        )
    }
}
