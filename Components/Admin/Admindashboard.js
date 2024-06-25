import React, { Component } from 'react'
import Footer from '../Footer/Footer'
import { Link } from 'react-router-dom'
import {
    PieChart,
    Pie,
    Tooltip,
    BarChart,
    XAxis,
    YAxis,
    Legend,
    CartesianGrid,
    Bar,
  } from "recharts";

  import AdminService from '../../Services/AdminService';



export default class Admindashboard extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
      data:[],
      totalUsers:0,
      totalJobPosts:0,
      totalApplication:0,
      id:null
      
    }
  }

  componentDidMount(){
   
    AdminService.getAdminDashboardData().then(
      (response)=>{
        console.log(response);
        this.setState({data:response.data});
    }).catch((err)=>{
      alert("err : "+err);
    });
    
    AdminService.getAdminHeaderData().then((resp)=>{ 
      this.setState(
        {
          totalUsers:resp.data[0].count,
          totalJobPosts:resp.data[1].count,
          totalApplication:resp.data[2].count
        })
    }).catch((error)=>{
      alert(error);
    });
  }
   
  render() {
    //const { id } = this.props.match.params;
    //this.setState({ id });
    // const data = [
    //     { name: "Academia", users: 245 },
    //     { name: "DEI Officers", users: 128 },
    //     { name: "URM Candidates", users: 900 },
    //     { name: "Recruiters", users: 108 },
    //   ];
    return (
      <div>
        <h1 className="dashhead">Admin Dashboard</h1>

<div className="secondarycontent">
    <div className="center">
        <div className="wrapper">
            <div className="sidenav">
                <Link to="/Admindashboard"> Dashboard</Link>
                <Link to="/Adminapplicationstatus"> Application Status</Link>
                <Link to="/Adminviewjobs"> Job posted</Link>
                <Link to="/Adminviewurm"> URM Candidates</Link>
                <Link to="/Adminviewrecruiters"> Recruiters</Link>
                <Link to="/Adminviewdei"> DEI Officers</Link>
                <Link to="/Adminviewacademia"> Academic Institution</Link>
                <Link to="/Admincontactus"> Contact Us Questions</Link>
                    
            </div>
            <div className="tile-container">
                <div className="box ">
                    Total Number of user: {this.state.totalUsers}
                </div>
                <div className="box ">
                    Total number of jobs posted: {this.state.totalJobPosts}
                </div>
                <div className="box ">
                    Total number of application submitted for the jobs: {this.state.totalApplication}
                </div>
            </div>
        </div>
    </div>


    <div className="parent">
    <div style={{ textAlign: "center" }}>
      <h2>Users Analysis</h2>
      <div className="Repo">
        <PieChart width={350} height={450}>
          <Pie
            dataKey="users"
            isAnimationActive={true}
            data={this.state.data}
            cx={200}
            cy={200}
            outerRadius={100}
            fill="#80FF44"
            label
          />
          <Tooltip />
        </PieChart>
        <BarChart isAnimationActive={true} width={600} height={400}
          data={this.state.data}
          margin={{
            top: 10,
            right: 25,
            left: 90,
            bottom: 5,
          }}
          barSize={21}
        >
          <XAxis
            dataKey="name"
            scale="point"
            padding={{ left: 10, right: 10 }}
          />
          <YAxis />
          <Tooltip />
          <Legend />
          <CartesianGrid strokeDasharray="3 3" />
          <Bar dataKey="users" fill="#80FF44" background={{ fill: "#eee" }} />
        </BarChart>
      </div>
    </div>
    </div>


</div>
<div className="chatbutton">
<a href='http://127.0.0.1:8080?name=Admin'>Chat</a>
</div>
<Footer/>
 </div>
    )
  }
}
