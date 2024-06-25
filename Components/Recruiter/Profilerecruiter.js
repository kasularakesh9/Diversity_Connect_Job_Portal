import React, { Component } from 'react'
import Footer from '../Footer/Footer'
import { Link } from 'react-router-dom'; 
import { AppUrl } from '../../Constants';   

export default class Profilerecruiter extends Component {
    handleSubmit = (event) => {
        event.preventDefault();
        const rname = event.target.rname.value;
        const rdesc = event.target.rdesc.value;
        const agency = event.target.agency.value;
        const client = event.target.client.value;
        const positions = event.target.postions.value;
        const email = event.target.username.value;
        const message = `Name: ${rname}\nDescription: ${rdesc}\nAgency: ${agency}\nClient: ${client}\nPositions: ${positions}\nEmail: ${email}`;
        alert(message);
      };
    render() {
    return (
      <div>
        <h1 className="dashhead">Recruiter Dashboard</h1>

<div className="container">
    <section className="card">
        <form onSubmit={this.handleSubmit}> <br/>
        <h2> Recruiter Profile</h2>
            <table className="form-group">
                <tbody>
                <tr>
                    <th><label htmlFor="rname"><b>Name</b></label></th>
                    <td> <input type="text" name="" id="rname" placeholder="Enter your name "
                            defaultValue="vervali pvt. ltd."/></td>
                </tr>
                <tr>
                    <th><label htmlFor="rdesc"><b>Description</b></label></th>
                    <td> <textarea rows="4" cols="57" id="rdesc"
                            placeholder="Enter your company description" defaultValue="UVWXYZ"/></td>
                </tr>
                <tr>
                    <th><label htmlFor="agency"><b>Agency</b></label></th>
                    <td> <input type="text" name="" id="agency" placeholder="Enter your agency name"
                            defaultValue="chartwells"/></td>
                </tr>
                <tr>
                    <th><label htmlFor="client"><b>Client</b></label></th>
                    <td> <input type="text" name="" id="client" placeholder="Enter your client name"
                            defaultValue="Connections Jdc"/></td>
                </tr>
                <tr>
                    <th><label htmlFor="postions"><b>Postions</b></label></th>
                    <td><input type="text" name="" id="postions" placeholder="Enter positions"
                            defaultValue="Research Assistant"/> </td>
                </tr>
                <tr>
                    <th><label htmlFor="username"><b>Email</b></label></th>
                    <td><input type="email" name="" id="username" placeholder="Enter email"
                            defaultValue="vervali@gmail.com" required/> </td>
                </tr>
                <tr>
                    <td colSpan="2">
                        <div className="button-container">
                            <button type="Submit" className="button">Save</button>

                        </div>
                        <br/>
                    </td>
                </tr>
                </tbody>
            </table>

        </form> <br />
        <div className="button-container">
        <Link to={AppUrl.Recruiterdashboard} className="button"> Back to Dashboard</Link>
        </div>
    </section>

    <Footer/>


</div>

      </div>
    )
  }
}
