import React, { Component } from 'react'
import Footer from '../Footer/Footer'
import { Link } from 'react-router-dom';   
import { AppUrl } from '../../Constants'; 

export default class Applicantrecruiter extends Component {
  render() {
    return (
      <div>
        <h1 className="dashhead">Recruiter Dashboard</h1>
      <div className="container">
    <section className="card">
    <h2> Recruiters Application Status</h2>
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
        <tr>
          <td>1000</td>
          <td>4590</td>
          <td>Applied</td>
          <td>5550</td>
        </tr>
        <tr>
          <td>1000</td>
          <td>4591</td>
          <td>Pending</td>
          <td>1550</td>
        </tr>
        <tr>
          <td>1000</td>
          <td>4596</td>
          <td>Pending</td>
          <td>2650</td>
        </tr>
        <tr>
          <td>1000</td>
          <td>3590</td>
          <td>Selected</td>
          <td>1200</td>
        </tr>
      </tbody>
      </table>
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
