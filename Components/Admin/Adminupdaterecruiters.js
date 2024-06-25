import React, { Component } from 'react'
import Footer from '../Footer/Footer'
import { Link } from 'react-router-dom'
import AdminSideMenu from './AdminSideMenu'

export default class Adminupdaterecruiters extends Component {
    handleSubmit = (event) => {
        event.preventDefault();
        const rname = event.target.rname.value;
        const rdesc = event.target.rdesc.value;
        const agency = event.target.agency.value;
        const client = event.target.client.value;
        const positions = event.target.postions.value;
        const message = `Name: ${rname}\nDescription: ${rdesc}\nAgency: ${agency}\nClient: ${client}\nPositions: ${positions}\n`;
        alert(message);
        event.target.reset();
      };
    render() {
    return (
      <div>
        <h1 className="dashhead">Admin Dashboard</h1>

    <AdminSideMenu/>

    <div className="container">
        <section className="card">
        <h2> Update Recruiters Details</h2>
            <form onSubmit={this.handleSubmit}> <br/>

                <table className="form-group">
                    <tbody>
                    
                    <tr>
                        <th><label htmlFor="rname"><b>Name</b></label></th>
                        <td> <input type="text" name="" id="rname" defaultValue="Recruiter1"/></td>
                    </tr>
                    <tr>
                        <th><label htmlFor="rdesc"><b>Description</b></label></th>
                        <td>
                            <textarea rows="4" cols="57" id="rdesc"
                                placeholder="Enter description" defaultValue="Description"/>
                        </td>
                    </tr>
                    <tr>
                        <th><label htmlFor="agency"><b>Agency</b></label></th>
                        <td><input type="text" name="" id="agency" placeholder="Enter agency" defaultValue="XYZ"/>
                        </td>
                    </tr>
                    <tr>
                        <th><label htmlFor="client"><b>Client</b></label></th>
                        <td><input type="text" name="" id="client" placeholder="Enter client" defaultValue="Abacus"/>
                        </td>
                    </tr>
                    <tr>
                        <th><label htmlFor="postions"><b>Postions</b></label></th>
                        <td><input type="text" name="" id="postions" placeholder="Enter positions" defaultValue="Faculty"/>
                        </td>
                    </tr>

                    <tr>
                        <td colSpan="2">
                            <div className="button-container">
                                <button type='submit' className="button">Save</button>

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
}
