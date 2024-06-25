import React, { Component } from 'react'
import Footer from '../Footer/Footer'
import { Link } from 'react-router-dom'
import AdminSideMenu from './AdminSideMenu'
import { AppUrl } from '../../Constants'

export default class Adminviewrecruiters extends Component {
    handleDelete = (name) => {
		alert(`You deleted  ${name} recruiter.`);
	  };
    render() {
    return (
      <div>
        <h1 className="dashhead">Admin Dashboard</h1>

<div className="secondarycontent">
    <AdminSideMenu/>

    <div className="container">
        <section className="card">
        <h2> Recruiters</h2>
            <table className="ftable">
                    <thead> 
                        <tr>
                            <th> Name</th>
                            <th>Description</th>
                            <th>Agency</th>
                            <th>Client</th>
                            <th>Postions</th>
                            <th> Delete </th>
                            <th> update </th>
                        </tr>
                    </thead>
                <tbody>
                <tr>
                    <td> Recruiters1 </td>
                    <td> Description </td>
                    <td> XYZ </td>
                    <td> Abacus </td>
                    <td>Post doc </td>
                    <td>
                    <div className="">   <button className="button" onClick={() => this.handleDelete('Recruiter1')}>   Delete   </button>  </div>
                    </td>
                    <td>
                        <div className=""> <Link to={AppUrl.Adminupdaterecruiters} className="button">Update</Link> </div>
                    </td>
                </tr>
                <tr>
                    <td> Recruiters2 </td>
                    <td> Description </td>
                    <td> XYZ </td>
                    <td> Abacus </td>
                    <td>PhD </td>
                    <td>
                    <div className="">   <button className="button" onClick={() => this.handleDelete('Recruiter2')}>   Delete   </button>  </div>
                    </td>
                    <td>
                        <div className=""> <Link to={AppUrl.Adminupdaterecruiters} className="button">Update</Link> </div>
                    </td>
                </tr>
                <tr>
                    <td> Recruiters3 </td>
                    <td> Description </td>
                    <td> XYZ </td>
                    <td> Abacus </td>
                    <td>Faculty</td>
                    <td>
                    <div className="">   <button className="button" onClick={() => this.handleDelete('Recruiter3')}>   Delete   </button>  </div>
                    </td>
                    <td>
                        <div className=""> <Link to={AppUrl.Adminupdaterecruiters} className="button">Update</Link> </div>
                    </td>
                </tr>

                </tbody>
            </table>
            <div className="button-container"> 
            <Link to={AppUrl.Adminrecruiterregistration} className="button">Create new Recruiter</Link>
            </div>
        </section>

        <Footer/>
    </div>
      </div>
      </div>
    )
  }
}
