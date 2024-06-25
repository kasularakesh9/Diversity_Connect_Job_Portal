import React, { useState,useEffect } from 'react'
import Footer from '../Footer/Footer'
import { Link } from 'react-router-dom'
import {
    ResponsiveContainer,
	LineChart,
	Line,
	XAxis,
	YAxis,
	Legend,
	Tooltip
  } from "recharts";
  import AdminService from '../../Services/AdminService';
  import { useParams } from 'react-router-dom';



export default function Deiofficerreport () {
	const { id } = useParams();
	
	const [data, setdataDetails] = useState([]);
	
		useEffect(() => {
		AdminService.getAdminDashboardData().then(
		  (response)=>{
			console.log(response);
			setdataDetails(response.data);
		}).catch((err)=>{
		  alert("err : "+err);
		}).catch((error)=>{
		  alert(error);
		});
	}, []); 

  
    return (
      <div>
        <h1 className="dashhead">DEI Officer Dashboard</h1>
	    <div className="container">
		
			<h2>Report</h2>
			
			<div className='Deirepo'>
			<ResponsiveContainer className='linechart' width={800} height={90}aspect={3} margin={{top: 5, right:300, left:10 , bottom:10}}>
			<LineChart data={data}>
				<XAxis dataKey="name" />
				<YAxis /><Tooltip  className="Tooltip" contentStyle={{backgroundColor: 'black'}}/><Legend/>
				<Line  type='monotoneX'dataKey="users" strokeWidth={3} stroke='#80FF44'/>
				
			</LineChart>
			</ResponsiveContainer>
			</div>
			<br /><br />

			<div className="button-container">
            <Link to={`/Deidashboard/${id}`} className="button">Back to Dashboard</Link>
			</div>

		
		<Footer/>

	</div>

    </div>
    )
  }

