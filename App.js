import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Login from './Components/Login/login';
import Home from './Components/Home/Home';
import Role from './Components/Register/Role';
import URMCandidateService from './Components/ServicesMenu/URMCandidateService';
import ServicesAcademia from './Components/ServicesMenu/ServicesAcademia';
import ServicesDEI from './Components/ServicesMenu/ServicesDEI';
import ServicesRecruiter from './Components/ServicesMenu/ServicesRecruiter';
import AcademicInstitutionRegistration from './Components/Register/AcademicInstitutionRegistration';
import DEIOfficerRegistration from './Components/Register/DEIOfficerRegistration';
import RecruiterRegistration from './Components/Register/RecruiterRegistration';
import URMCandidateRegistration from './Components/Register/URMCandidateRegistration';
import { AppUrl, academiaPersonalInfo } from './Constants';
import About from './Components/AboutUs/About';
import ContactUs from './Components/ContactUs/ContactUs';
import ForgetPassword from './Components/ForgetPassword/ForgetPassword';
import Academiadashboard from './Components/AcademicInstitution/Academiadashboard';
import Addfaculty from './Components/AcademicInstitution/Addfaculty';
import Applicantsacademia from './Components/AcademicInstitution/Applicantsacademia';
import Bookmarkedcandidates from './Components/AcademicInstitution/Bookmarkedcandidates';
import Chatacademia from './Components/AcademicInstitution/Chatacademia';
import Academiajobview from './Components/AcademicInstitution/Academiajobview';
import Jobposts from './Components/AcademicInstitution/Jobposts';
import Profileacademia from './Components/AcademicInstitution/Profileacademia';
import Viewurmcandidate from './Components/AcademicInstitution/Viewurmcandidate';
import Urmdashboard from './Components/URMcandidate/Urmdashboard';
import Profileurm from './Components/URMcandidate/Profileurm';
import Applicanturm from './Components/URMcandidate/Applicanturm';
import Jobviewurm from './Components/URMcandidate/Jobviewurm';
import Urmcheckjobroles from './Components/URMcandidate/Urmcheckjobroles';
import Chaturm from './Components/URMcandidate/Chaturm';
import Deidashboard from './Components/DEI/Deidashboard';
import Chatdei from './Components/DEI/Chatdei';
import Deiapplicant from './Components/DEI/Deiapplicant';
import Deiapprovepostjobs from './Components/DEI/Deiapprovepostjobs';
import Deijobview from './Components/DEI/Deijobview';
import Deiofficerreport from './Components/DEI/Deiofficerreport';
import Deiviewurmcandidate from './Components/DEI/Deiviewurmcandidate';
import Deipostjobs from './Components/DEI/Deipostjobs';
import Profiledeiofficer from './Components/DEI/Profiledeiofficer';
import Admindashboard from './Components/Admin/Admindashboard';
import Adminacademiaregistration from './Components/Admin/Adminacademiaregistration';
import Adminviewacademia from './Components/Admin/Adminviewacademia';
import Adminviewdei from './Components/Admin/Adminviewdei';
import Adminviewjobs from './Components/Admin/Adminviewjobs';
import Adminviewurm from './Components/Admin/Adminviewurm';
import Adminviewrecruiters from './Components/Admin/Adminviewrecruiters';
import Chatadmin from './Components/Admin/Chatadmin';
import Adminupdateacademia from './Components/Admin/Adminupdateacademia';
import Adminupdatedei from './Components/Admin/Adminupdatedei';
import Adminupdatejobs from './Components/Admin/Adminupdatejobs';
import Adminupdaterecruiters from './Components/Admin/Adminupdaterecruiters';
import Adminupdateurm from './Components/Admin/Adminupdateurm';
import Admincontactus from './Components/Admin/Admincontactus';
import Adminapplicationstatus from './Components/Admin/Adminapplicationstatus';
import Adminrecruiterregistration from './Components/Admin/Adminrecruiterregistration';
import Adminurmregistration from './Components/Admin/Adminurmregistration';
import Admindeiregister from './Components/Admin/Admindeiregister';
import Recruiterdashboard from './Components/Recruiter/Recruiterdashboard';
import Applicantrecruiter from './Components/Recruiter/Applicantrecruiter';
import Chatrecruiter from './Components/Recruiter/Chatrecruiter';
import Jobviewrecruiter from './Components/Recruiter/Jobviewrecruiter';
import Postjobsrecruiter from './Components/Recruiter/Postjobsrecruiter';
import Profilerecruiter from './Components/Recruiter/Profilerecruiter';
import Viewurmrecruiter from './Components/Recruiter/Viewurmrecruiter';
import Adminpostjob from './Components/Admin/Adminpostjob';
import Logout from './Components/Logout/logout';

class App extends Component{
  constructor(props) {
    super(props)
  
    this.state = {
       isLogin:false,
    }
    this.handleIsLogin =this.handleIsLogin.bind();
  }

  componentDidMount() {
    // Retrieve the state from localStorage on component mount
    const storedState = localStorage.getItem('myComponentState');
    if (storedState) {
      this.setState(JSON.parse(storedState));
    }
  }

  componentDidUpdate() {
    // Save the state to localStorage whenever it is updated
    localStorage.setItem('myComponentState', JSON.stringify(this.state));
  }

  
  handleIsLogin=(isLoginFromLoginComponent)=>{//trigger back handling : true return
    this.setState({isLogin:isLoginFromLoginComponent}) //true
  }
  
  render(){
  return (
    <>
    <Router>
    <Header isLogin={this.state.isLogin}/>
    <Routes>
          <Route path={AppUrl.base} element={<Home/>}></Route>
          <Route path={AppUrl.login} element={<Login onLogin={this.handleIsLogin}/>}></Route>
          <Route path={AppUrl.register} element={<Role/>}></Route>
          <Route path={AppUrl.urmCandidateService} element={<URMCandidateService/>}></Route>
          <Route path={AppUrl.servicesAcademia} element={<ServicesAcademia/>}></Route>
          <Route path={AppUrl.servicesDEI} element={<ServicesDEI/>}></Route>
          <Route path={AppUrl.serviceRecruiter} element={<ServicesRecruiter/>}></Route>
          <Route path={AppUrl.AcademicInstitutionRegistreation} element={<AcademicInstitutionRegistration/>}></Route>
          <Route path={AppUrl.DEIOfficerRegistreation} element={<DEIOfficerRegistration/>}></Route>
          <Route path={AppUrl.RecruiterRegistreation} element={<RecruiterRegistration/>}></Route>
          <Route path={AppUrl.URMCandidateRegistreation} element={<URMCandidateRegistration/>}></Route>
          <Route path={AppUrl.aboutUs} element={<About/>}></Route>
          <Route path={AppUrl.contactUs} element={<ContactUs/>}></Route>
          <Route path={AppUrl.forgetPassword} element={<ForgetPassword/>}></Route>

          <Route path="/Academiadashboard/:id" component={Academiadashboard} element={<Academiadashboard/>}></Route>
          <Route path={AppUrl.Academiadashboard} element={<Academiadashboard/>}></Route>

          <Route path="/Addfaculty/:id" component={Addfaculty} element={<Addfaculty/>}></Route>
          <Route path={AppUrl.Addfaculty} element={<Addfaculty/>}></Route>
          <Route path="/Applicantsacademia/:id/:jid" component={Applicantsacademia} element={<Applicantsacademia/>}></Route>
          <Route path={AppUrl.Applicantsacademia} element={<Applicantsacademia/>}></Route>
          <Route path="/Bookmarkedcandidates/:id" component={Bookmarkedcandidates} element={<Bookmarkedcandidates/>}></Route>
          <Route path={AppUrl.Bookmarkedcandidates} element={<Bookmarkedcandidates/>}></Route>
          <Route path={AppUrl.Chatacademia} element={<Chatacademia/>}></Route>
          <Route path="/Academiajobview/:id/:jid" component={Academiajobview} element={<Academiajobview/>}></Route>
          <Route path={AppUrl.Academiajobview} element={<Academiajobview/>}></Route>
          <Route path="/Jobposts/:id" component={Jobposts} element={<Jobposts/>}></Route>
          <Route path={AppUrl.Jobposts} element={<Jobposts/>}></Route>
          <Route path="/Profileacademia/:id" component={Profileacademia} element={<Profileacademia/>}></Route>
          <Route path={AppUrl.Profileacademia} element={<Profileacademia/>}></Route>
          <Route path="/Viewurmcandidate/:id" component={Viewurmcandidate} element={<Viewurmcandidate/>}></Route>
          <Route path={AppUrl.Viewurmcandidate} element={<Viewurmcandidate/>}></Route>

          <Route path="/Urmdashboard/:id" component={Urmdashboard} element={<Urmdashboard/>}></Route>
          <Route path={AppUrl.Urmdashboard} element={<Urmdashboard/>}></Route>
          <Route path="/Profileurm/:id" component={Profileurm} element={<Profileurm/>}></Route>
          <Route path={AppUrl.Profileurm} element={<Profileurm/>}></Route>
          <Route path="/Applicanturm/:id/:jid" component={Applicanturm} element={<Applicanturm/>}></Route>
          <Route path={AppUrl.Applicanturm} element={<Applicanturm/>}></Route>
          <Route path="/Jobviewurm/:id/:jid" component={Jobviewurm} element={<Jobviewurm/>}></Route>
          <Route path={AppUrl.Jobviewurm} element={<Jobviewurm/>}></Route>
          <Route path="/Urmcheckjobroles/:id" component={Urmcheckjobroles} element={<Urmcheckjobroles/>}></Route>
          <Route path={AppUrl.Urmcheckjobroles} element={<Urmcheckjobroles/>}></Route>
          <Route path={AppUrl.Chaturm} element={<Chaturm/>}></Route>

          <Route path="/Deidashboard/:id" component={Deidashboard} element={<Deidashboard/>}></Route>
          <Route path={AppUrl.Deidashboard} element={<Deidashboard/>}></Route>
          <Route path={AppUrl.Chatdei} element={<Chatdei/>}></Route>
          
          <Route path="/Deiapplicant/:id/:jid" component={Deiapplicant} element={<Deiapplicant/>}></Route>
          <Route path={AppUrl.Deiapplicant} element={<Deiapplicant/>}></Route>

          <Route path="/Deiapprovepostjobs/:id" component={Deiapprovepostjobs} element={<Deiapprovepostjobs/>}></Route>
          <Route path={AppUrl.Deiapprovepostjobs} element={<Deiapprovepostjobs/>}></Route>

          <Route path="/Deijobview/:id/:jid" component={Deijobview} element={<Deijobview/>}></Route>
          <Route path={AppUrl.Deijobview} element={<Deijobview/>}></Route>

          <Route path="/Deiofficerreport/:id" component={Deiofficerreport} element={<Deiofficerreport/>}></Route>
          <Route path={AppUrl.Deiofficerreport} element={<Deiofficerreport/>}></Route>
          <Route path="/Deiviewurmcandidate/:id" component={Deiviewurmcandidate} element={<Deiviewurmcandidate/>}></Route>
          <Route path={AppUrl.Deiviewurmcandidate} element={<Deiviewurmcandidate/>}></Route>
          <Route path="/Deipostjobs/:id" component={Deipostjobs} element={<Deipostjobs/>}></Route>
          <Route path={AppUrl.Deipostjobs} element={<Deipostjobs/>}></Route>
          <Route path="/Profiledeiofficer/:id" component={Profiledeiofficer} element={<Profiledeiofficer/>}></Route>
          <Route path={AppUrl.Profiledeiofficer} element={<Profiledeiofficer/>}></Route>

          <Route path="/Admindashboard/:id" component={Admindashboard} element={<Admindashboard/>} />
          <Route path={AppUrl.Admindashboard} element={<Admindashboard/>}></Route>
          <Route path={AppUrl.Adminviewacademia} element={<Adminviewacademia/>}></Route>
          <Route path={AppUrl.Adminacademiaregistration} element={<Adminacademiaregistration/>}></Route>
          <Route path={AppUrl.Adminviewdei} element={<Adminviewdei/>}></Route>
          <Route path={AppUrl.Adminviewjobs} element={<Adminviewjobs/>}></Route>
          <Route path={AppUrl.Adminviewurm} element={<Adminviewurm/>}></Route>
          <Route path={AppUrl.Adminviewrecruiters} element={<Adminviewrecruiters/>}></Route>
          <Route path={AppUrl.Chatadmin} element={<Chatadmin/>}></Route>
          <Route path="/Adminupdateacademia/:id" component={Adminupdateacademia} element={<Adminupdateacademia/>}></Route>
          <Route path={AppUrl.Adminupdateacademia} element={<Adminupdateacademia/>}></Route>
          <Route path="/Adminupdatedei/:id" component={Adminupdatedei} element={<Adminupdatedei/>}></Route>
          <Route path={AppUrl.Adminupdatedei} element={<Adminupdatedei/>}></Route>
          
          <Route path="/Adminupdatejobs/:id" component={Adminupdatejobs} element={<Adminupdatejobs/>}></Route>
          <Route path={AppUrl.Adminupdatejobs} element={<Adminupdatejobs/>}></Route>
          <Route path={AppUrl.Adminupdaterecruiters} element={<Adminupdaterecruiters/>}></Route>
          <Route path="/Adminupdateurm/:id" component={Adminupdateurm} element={<Adminupdateurm/>}></Route>
          <Route path={AppUrl.Adminupdateurm} element={<Adminupdateurm/>}></Route>
          <Route path={AppUrl.Admincontactus} element={<Admincontactus/>}></Route>
          <Route path={AppUrl.Adminapplicationstatus} element={<Adminapplicationstatus/>}></Route>
          <Route path={AppUrl.Adminrecruiterregistration} element={<Adminrecruiterregistration/>}></Route>
          <Route path={AppUrl.Adminurmregistration} element={<Adminurmregistration/>}></Route>
          <Route path={AppUrl.Admindeiregister} element={<Admindeiregister/>}></Route>
          <Route path={AppUrl.Recruiterdashboard} element={<Recruiterdashboard/>}></Route>
          <Route path={AppUrl.Applicantrecruiter} element={<Applicantrecruiter/>}></Route>
          <Route path={AppUrl.Chatrecruiter} element={<Chatrecruiter/>}></Route>
          <Route path={AppUrl.Jobviewrecruiter} element={<Jobviewrecruiter/>}></Route>
          <Route path={AppUrl.Postjobsrecruiter} element={<Postjobsrecruiter/>}></Route>
          <Route path={AppUrl.Profilerecruiter} element={<Profilerecruiter/>}></Route>
          <Route path={AppUrl.Viewurmrecruiter} element={<Viewurmrecruiter/>}></Route>
          <Route path={AppUrl.Adminpostjob} element={<Adminpostjob/>}></Route>
          <Route path={AppUrl.Logout} element={<Logout onLogin={this.handleIsLogin}/>}></Route>
          {/* <Route path={AppUrl.Blog} element={<Blog />}></Route> */}
        </Routes>
    </Router>

    </>
  );
  }
}

export default App;
