import React, { Component } from 'react'
import Footer from '../Footer/Footer'
import { Link } from 'react-router-dom'
import AdminSideMenu from './AdminSideMenu'
import { role, AppUrl } from '../../Constants'
import AdminService from '../../Services/AdminService';


export default class Adminviewurm extends Component {
    constructor(props) {
                super(props);
                this.state = {
                    urmDetails: []
                };
            }
            componentDidMount() {
                // Fetch personal information and faculty details
            // this.fetchPersonalInfo();
            
                    
                this.showURM();
            }
            showURM(){
                AdminService.fetchURM()
                .then((response)=>{
                    console.log(response);
                this.setState({ urmDetails: response.data.phpresult});
                }).catch((error) => {
                    alert("error " + error);
                });
            }

            
            handleDeleteURM=(uid)=>{
                alert(`You deleted  ${uid} position.`);
                const resdata = {                    
                    "role": role.Deleteurm,
                    "uid": uid
                };
                AdminService.deleteURM(resdata)
                .then((response)=>{
                    console.log(response);
                }).catch((error) => {
                    alert("error " + error);
                });

    }
    render() {
        const { urmDetails } = this.state;
    return (
      <div>
        <h1 className="dashhead">Admin Dashboard</h1>

    <AdminSideMenu/>

    <div className="admincontainer">
        <section className="admincard">
        <h2> URM Candidate</h2>
            <table className="ftable">
                    <thead>
                        <tr>
                             <th> URM ID</th>
                            <th> Name</th>
                            <th>Phone number</th>                          
                            <th>Location</th>
                            <th>Nationality</th>
                            <th>Ethnicity</th>
                            <th>Education</th>
                            <th>Research Experience</th>
                            <th>Publications</th>
                            <th>Postions</th>
                            <th>Delete</th>
                            <th>Update</th>
                        </tr>
                    </thead>
                <tbody>
                {urmDetails.map((rs)=>
                                            <tr key={rs.UId}>
                                                <td>{rs.UId}</td>
                                                <td>{rs.Uname}</td>
                                                <td>{rs.Phone_no}</td>
                                                <td>{rs.Location}</td>
                                                <td>{rs.Nationality}</td>
                                                <td>{rs.Ethinicity}</td>
                                                <td>{rs.Education}</td>
                                                <td>{rs.Res_exp}</td>
                                                <td>{rs.Publications}</td>
                                                <td>{rs.Positions}</td>
                                               
                                                <td>
                                                    <div className="">
                                                        <a className="button" onClick={()=>this.handleDeleteURM(rs.UId)}>
                                                            Delete
                                                        </a>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="">
                                                    <Link to={`/Adminupdateurm/${rs.UId}`} className="button">Update</Link>

                                                    </div>
                                                </td>
                                            </tr>
                                        )}
                
                

                </tbody>
            </table>
            
        </section><br/><br/>
        <div className="button-container"> 
                <Link to={AppUrl.Adminurmregistration} className="button">Create new URM Candidate</Link> 
            </div>
      

    </div>
    <Footer/>
    </div>
 
    )
  }
}
