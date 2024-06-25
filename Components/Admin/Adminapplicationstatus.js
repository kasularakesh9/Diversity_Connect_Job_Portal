import React, { Component } from 'react'
import Footer from '../Footer/Footer'
import { Link } from 'react-router-dom'
import AdminSideMenu from './AdminSideMenu'
import AdminService from '../../Services/AdminService';

export default class Adminapplicationstatus extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fetchapplication: []
        };
    }
    componentDidMount() {
        // Fetch personal information and faculty details
       // this.fetchPersonalInfo();
       
            
        this.showCandidate();
      }
    showCandidate(){
        AdminService.fetchData()
        .then((response)=>{
            console.log(response);
           this.setState({ fetchapplication: response.data.phpresult});
        }).catch((error) => {
            alert("error " + error);
        });
    }

    render() {
        const { fetchapplication } = this.state;
        return (
            <div>
                <h1 className="dashhead">Admin Dashboard</h1>

                    <AdminSideMenu />
                    <div className="container">
                        <section className="card">
                            <h2> Candidates Application Status</h2>
                            <table className="ftable">
                                <thead>
                                    <tr>
                                        <th>Job Id</th>
                                        <th>Application Id</th>
                                        <th>Status</th>
                                        <th>Student Id</th>

                                    </tr>
                                </thead>
                                <tbody  >
                                    {fetchapplication.map(
                                        (candidateAppstatus) => <tr key={candidateAppstatus.APP_ID}>
                                            <td >{candidateAppstatus.JID}</td>
                                            <td>{candidateAppstatus.APP_ID}</td>
                                            <td>{candidateAppstatus.STATUS}</td>
                                            <td>{candidateAppstatus.UID}</td>
                                        </tr>)}
                                </tbody>
                            </table>

                        </section>

                        <Footer />

                </div>
            </div>
        )
    }
}
