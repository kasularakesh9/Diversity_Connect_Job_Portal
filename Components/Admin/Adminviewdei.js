import React, { Component } from 'react'
import Footer from '../Footer/Footer'
import { Link } from 'react-router-dom'
import AdminSideMenu from './AdminSideMenu'
import { role, AppUrl } from '../../Constants'
import AdminService from '../../Services/AdminService';


export default class Adminviewdei extends Component {
     
    constructor(props) {
        super(props);
        this.state = {
            deiDetails: []
        };
    }
    componentDidMount() {
        
        this.showDEI();
      }
      showDEI(){
        AdminService.fetchDEI()
        .then((response)=>{
            console.log(response);
           this.setState({ deiDetails: response.data.phpresult});
        }).catch((error) => {
            alert("error " + error);
        });
    }

    
    handleDeleteDEI=(did)=>{
        alert(`You deleted  ${did} position.`);
        const resdata = {                    
            "role": role.Deletedei,
              "did": did
        };
        AdminService.deletedei(resdata)
        .then((response)=>{
            console.log(response);
        }).catch((error) => {
            alert("error " + error);
        });

    }
    render() {
        const { deiDetails } = this.state;
    return (
      <div>
        <h1 className="dashhead">Admin Dashboard</h1>

                    <AdminSideMenu />


    <div className="container">
        <section className="card">
        <h2> DEI Officers</h2>
            <table className="ftable">
                    <thead>
                        <tr>
                        <th> ID</th>
                            <th> Name</th>
                            <th>Description</th>
                            <th>Role</th>
                            <th>Organization</th>
                            <th>Goals</th>
                            <th>Initiatives</th>
                            <th>New Initiatives or Events</th>
                            <th>Postions</th>
                            <th> Delete </th>
                            <th> update </th>
                        </tr>
                    </thead>
                <tbody>
                {deiDetails.map((rs)=>
                                            <tr key={rs.DID}>
                                                <td>{rs.DID}</td>
                                                <td>{rs.DNAME}</td>
                                                <td>{rs.D_DESC}</td>
                                                <td>{rs.DROLE}</td>
                                                <td>{rs.ORGANIZATION}</td>
                                                <td>{rs.GOALS}</td>
                                                <td>{rs.INITIATIVES}</td>
                                                <td>{rs.NEW_EVENTS}</td>
                                                <td>{rs.POSITIONS}</td>
                                                <td>
                                                    <div className="">
                                                        <a className="button" onClick={()=>this.handleDeleteDEI(rs.DID)}>
                                                            Delete
                                                        </a>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="">
                                                    <Link to={`/Adminupdatedei/${rs.DID}`} className="button">Update</Link>

                                                    </div>
                                                </td>
                                            </tr>
                                        )}
           </tbody>
            </table>
            
        </section><br/><br/>

        <div className="button-container"> 
        <Link to={AppUrl.Admindeiregister} className="button">Create New DEI Officers</Link>
            </div>

    </div>
    <Footer/>
    </div>

    )
  }
}
