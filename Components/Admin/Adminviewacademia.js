import React, { Component } from 'react'
import Footer from '../Footer/Footer'
import { Link } from 'react-router-dom'
import AdminSideMenu from './AdminSideMenu'
import { role, AppUrl } from '../../Constants'
import AdminService from '../../Services/AdminService';

export default class Adminviewacademia extends Component {
   
    constructor(props) {
        super(props);
        this.state = {
            academiaDetails: []
        };
    }
    componentDidMount() {
        
        this.showAcademia();
      }
      showAcademia(){
        AdminService.fetchAcademia()
        .then((response)=>{
            console.log(response);
           this.setState({ academiaDetails: response.data.phpresult});
        }).catch((error) => {
            alert("error " + error);
        });
    }

    
    handleDeleteAcademia=(aid)=>{
        alert(`You deleted  ${aid} position.`);
        const resdata = {                    
            "role": role.Deleteacademia,
              "aid": aid
        };
        AdminService.deleteAcademia(resdata)
        .then((response)=>{
            console.log(response);
        }).catch((error) => {
            alert("error " + error);
        });

    }
    render() {
        const { academiaDetails } = this.state;
    return (
      <div>
        <h1 className="dashhead">Admin Dashboard</h1>

    <AdminSideMenu/>

    <div className="container">
        <section className="card">
        <h2>Academic Institution </h2>
            <table className="ftable">
                    <thead>
                        <tr>
                        <th>Institution ID</th>
                            <th>Institution</th>
                            <th>Description</th>
                            <th>Research Area</th>
                            <th>Postions</th>
                            <th>Delete </th>
                            <th>Update </th>
                        </tr>
                    </thead>
                <tbody>
                {academiaDetails.map((rs)=>
                                            <tr key={rs.AId}>
                                                <td>{rs.AId}</td>
                                                <td>{rs.Aname}</td>
                                                <td>{rs.A_Desc}</td>
                                                <td>{rs.Research_focus}</td>
                                                <td>{rs.Positions}</td>
                                               
                                                <td>
                                                    <div className="">
                                                        <a className="button" onClick={()=>this.handleDeleteAcademia(rs.AId)}>
                                                            Delete
                                                        </a>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="">
                                                    <Link to={`/Adminupdateacademia/${rs.AId}`} className="button">Update</Link>

                                                    </div>
                                                </td>
                                            </tr>
                                        )}

                </tbody>
            </table>
           
        </section>
        <div className="button-container"> 
            <Link to={AppUrl.Adminacademiaregistration} className="button">Create new Academic Institution</Link>
            </div>
        <Footer/>

    </div>
      </div>

    )
  }
}
