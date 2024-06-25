import { Component } from "react"

//application url related
export const AppUrl ={
    base:"/",
    login:"/login",
    aboutUs:"/aboutUs",
    contactUs:"/contactUs",
    forgetPassword:"/forgetPassword",
    Logout:"/logout",
    //Blog:"https://sxr9357.uta.cloud/",

    // service menu related:
    urmCandidateService:"/urmCandidateService",
    servicesAcademia:"/servicesAcademia",
    servicesDEI:"/servicesDEI",
    serviceRecruiter:"/serviceRecruiter",

    //registration related:
    register:"/register",
    AcademicInstitutionRegistreation:"/AcademicInstitutionRegistreation",
    DEIOfficerRegistreation:"/DEIOfficerRegistreation",
    RecruiterRegistreation:"/RecruiterRegistreation",
    URMCandidateRegistreation:"/URMCandidateRegistreation",

    Academiadashboard:"/Academiadashboard", 
    Addfaculty:"/Addfaculty", 
    Applicantsacademia:"/Applicantsacademia", 
    Bookmarkedcandidates:"/Bookmarkedcandidates", 
    Chatacademia:"/Chatacademia", 
    Academiajobview:"/Academiajobview", 
    Jobposts:"/Jobposts", 
    Profileacademia:"/Profileacademia",

    Viewurmcandidate:"/Viewurmcandidate" ,
    Urmdashboard:"/Urmdashboard" ,
    Profileurm:"/Profileurm" ,
    Applicanturm:"/Applicanturm" ,
    Jobviewurm:"/Jobviewurm" ,
    Urmcheckjobroles:"/Urmcheckjobroles" ,
    Chaturm:"/Chaturm", 

    Deidashboard:"/Deidashboard", 
    Chatdei:"/Chatdei", 
    Deiapplicant:"/Deiapplicant", 
    Deiapprovepostjobs:"/Deiapprovepostjobs", 
    Deijobview:"/Deijobview", 
    Deiofficerreport:"/Deiofficerreport", 
    Deiviewurmcandidate:"/Deiviewurmcandidate", 
    Deipostjobs:"/Deipostjobs" ,
    Profiledeiofficer:"/Profiledeiofficer", 

    Admindashboard:"/Admindashboard", 
    Adminviewacademia:"/Adminviewacademia", 
    Adminacademiaregistration:"/Adminacademiaregistration", 
    Adminviewdei:"/Adminviewdei", 
    Adminviewjobs:"/Adminviewjobs", 
    Adminviewurm:"/Adminviewurm", 
    Adminviewrecruiters:"/Adminviewrecruiters", 
    Chatadmin:"/Chatadmin", 
    Adminupdateacademia:"/Adminupdateacademia", 
    Adminupdatedei:"/Adminupdatedei" ,
    Adminupdatejobs:"/Adminupdatejobs/:id" , 
    Adminupdaterecruiters:"/Adminupdaterecruiters", 
    Adminupdateurm:"/Adminupdateurm", 
    Admincontactus:"/Admincontactus" ,
    Adminapplicationstatus:"/Adminapplicationstatus", 
    Adminrecruiterregistration:"/Adminrecruiterregistration" ,
    Adminurmregistration:"/Adminurmregistration" ,
    Admindeiregister:"/Admindeiregister" ,
    Recruiterdashboard:"/Recruiterdashboard" ,
    Applicantrecruiter:"/Applicantrecruiter" ,
    Chatrecruiter:"/Chatrecruiter" ,
    Jobviewrecruiter:"/Jobviewrecruiter" ,
    Postjobsrecruiter:"/Postjobsrecruiter" ,
    Profilerecruiter:"/Profilerecruiter" ,
    Viewurmrecruiter:"/Viewurmrecruiter" ,
    Adminpostjob:"/Adminpostjob" ,
     
    
}

//academia related:
//academia personal information:   
export const academiaPersonalInfo={
    "institution_name": "UTA",
    "research_focus_area":"Machine learnings",
    "email":"UTA@mavs.edu.in",
    "positions_offered":"Faculty",
    "desc":"Welcome to UTA University, a renowned academic institution dedicated to empowering students with knowledge and skills to thrive in a dynamic and interconnected world. With a rich heritage of academic excellence, our institution offers a diverse range of programs and courses designed to foster intellectual curiosity, critical thinking, and real-world problem-solving abilities. Our distinguished faculty comprises experts and scholars from various fields who are committed to providing a transformative learning experience. At Global University, we emphasize holistic education, nurturing students' personal growth, and preparing them to become future leaders and global citizens. Join our vibrant campus community and unlock your potential for success and impact in an ever-evolving global society."
}

export const academiaFacultyDetails=[
    {
        "id":"1001",
        "name":"San",
        "subject":"WDM",
        "class":"CSE5335",
        "hours":"20",
    },
    {
        "id":"1002",
        "name":"Ron",
        "subject":"DAMT",
        "class":"CSE5353",
        "hours":"20",
    }
]


//Admin related data:
//Admin => candidate application status
export const candidateApplicationStats=[{
    "jobId":"1000",
    "applicationId":"4590",
    "status":"Applied",
    "studentId":"5550",
},{
    "jobId":"1000",
    "applicationId":"4591",
    "status":"Pending",
    "studentId":"1550",
},{
    "jobId":"1000",
    "applicationId":"4596",
    "status":"Pending",
    "studentId":"2650",
},{
    "jobId":"1000",
    "applicationId":"3590",
    "status":"Selected",
    "studentId":"1240",
}]

export const jobPosted=[{
    "jobId":1,
    "position":"PostDoc",
    "jobDescription":"Software",
    "date":"07/16/2023",
    "location":"Dallas"
},{
    "jobId":2,
    "position":"PhD",
    "jobDescription":"Software",
    "date":"07/16/2023",
    "location":"Dallas"
},{
    "jobId":3,
    "position":"Faculty",
    "jobDescription":"Software",
    "date":"07/16/2023",
    "location":"Dallas"
}]

export const loginReponse = [
    {
        email:"academia@gmail.com",
        pass:"12345",
        role:"Academia"
    },
    {
        email:"Candidate@gmail.com",
        pass:"12345",
        role:"Candidate"
    },
    {
        email:"DEI@gmail.com",
        pass:"12345",
        role:"Dei"
    },
    {
        email:"Recruiter@gmail.com",
        pass:"12345",
        role:"Recruiter"
    },
    {
        email:"Admin@gmail.com",
        pass:"12345",
        role:"Admin"
    }
]

export const role={
    "Academia":"Academia",
    "Candidate":"Candidate",
    "Dei":"Dei",
    "Recruiter":"Recruiter",
    "Admin":"Admin",
    "Addfaculty":"Addfaculty",
    "Jobposted":"Jobposted",
    "Fetchfaculty":"Fetchfaculty",
    "Applicationstatus": "Applicationstatus",
    "FlagCandidate": "FlagCandidate",
    "Viewjobs":"Viewjobs",
    "Deletejobs":"Deletejobs",
    "Updatejobs":"Updatejobs",
    "Jobchange":"Jobchange",
    "AcademiaProfiledetails":"AcademiaProfiledetails",
    "Updateacademiaprofile":"Updateacademiaprofile",
    "AcademiaProfilechange":"AcademiaProfilechange",
    "Academiafetchjobs":"Academiafetchjobs",
    "AcademiaupdateJobs":"AcademiaupdateJobs",
    "AcademiaJobdetailsupdate":"AcademiaJobdetailsupdate",
    "Getapplicants":"Getapplicants",
    "Academiabookmark":"Academiabookmark",
    "GetURMCandidate":"GetURMCandidate",
    "Viewdei":"Viewdei",
    "Deletedei":"Deletedei",
    "Updatedei":"Updatedei",
    "DEIchange":"DEIchange",
    "Deleteurm":"Deleteurm",
    "Viewurm":"Viewurm",
    "Updateurm":"Updateurm",
    "URMchange":"URMchange",
    "Viewacademia":"Viewacademia",
    "Updateacademia":"Updateacademia",
    "Deleteacademia":"Deleteacademia",
    "Academiachange":"Academiachange",
    "URMProfiledetails":"URMProfiledetails",
    "URMProfilechange":"URMProfilechange",
    "Updateurmprofile":"Updateurmprofile",
    "Viewjobsurm":"Viewjobsurm",
    "applyJobs":"applyJobs",
    "Viewappliedjobsurm":"Viewappliedjobsurm",
    "Fetchapplicationstatus":"Fetchapplicationstatus",
    "DEIProfiledetails":"DEIProfiledetails",
    "Updatedeiprofile":"Updatedeiprofile",
    "DEIchangeprofile":"DEIchangeprofile",
    "GetURMCandidateforDEI":"GetURMCandidateforDEI",
    "Jobposteddei":"Jobposteddei",
    "Viewjobsdei":"Viewjobsdei",
    "declineJobs":"declineJobs",
    "acceptJobs":"acceptJobs",
    "DeidashboardfetchJobs":"DeidashboardfetchJobs"


}

export const backendUrl={
    base:"http://127.0.0.1:8003",
    register:"/register.php",
    login:"/login.php",
    contactus: "/contactus.php",
    registerURM:"/registerURM.php",
    adminDashboard:"/adminDashboard.php",
    adminDashboardHeader:"/adminDashboardHeader.php",
    academic:"/academic.php",
    admin:"/admin.php",
    urm:"/urm.php",
    dei:"/dei.php",
    forgetPassword:"/forgetPassword.php",
    adminContact:"/adminContact.php"

}   

