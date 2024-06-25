import axios from 'axios';
import { role,backendUrl } from '../Constants'

class AcademicSerivce{


    register(academicFormData){
        return axios.post(backendUrl.base+backendUrl.academic, academicFormData)
    }

    getfaculty(id){
        const academicFormData = {                        
            "role": role.Fetchfaculty,
            "id":id

        };
        return axios.get(backendUrl.base+backendUrl.academic,  { params: academicFormData })
    }

    getFlagCandidate(id){
        const academicFormData = {                        
            "role": role.FlagCandidate,
            "id":id
        };
        return axios.get(backendUrl.base+backendUrl.academic,  { params: academicFormData })
    }

    getProfileDatails(id){
        const academicFormData = {                        
            "role": role.AcademiaProfiledetails,
            "id": id
        };
        return axios.get(backendUrl.base+backendUrl.academic,  { params: academicFormData })
    }

    updateAcademiaProfile(id){
        const academicFormData = {                    
            "role": role.Updateacademiaprofile,
            "id": id
        };  
        return axios.get(backendUrl.base+backendUrl.academic, { params: academicFormData } )
    }

    changedetailsofAcademiaProfile(academicFormData){
       
        return axios.post(backendUrl.base+backendUrl.academic, academicFormData)
    }

    academiafetchJobs(id){
        const academicFormData = {                    
            "role": role.Academiafetchjobs,
            "id": id
        };  
        return axios.get(backendUrl.base+backendUrl.academic, { params: academicFormData } )
    }

    academiaupdateJobs(jid){
        const academicFormData = {                    
            "role": role.AcademiaupdateJobs,
            "jid": jid
        };  
        return axios.get(backendUrl.base+backendUrl.academic, { params: academicFormData } )
    }
    academicchangedetailsofJobs(academicFormData){
       
        return axios.post(backendUrl.base+backendUrl.academic, academicFormData)
    }
    getApplicants(jid){
        const academicFormData = {                    
            "role": role.Getapplicants,
            "jid": jid
        }; 
        return axios.get(backendUrl.base+backendUrl.academic, { params: academicFormData } )
    }
    academiaBookmark(academicFormData){
     
        return axios.post(backendUrl.base+backendUrl.academic, academicFormData)
    }
    getURMCandidate(uname,location,education){
        const academicFormData = {                    
            "role": role.GetURMCandidate,
            "uname": uname,
            "location":location,
            "education":education,
        };
       return axios.get(backendUrl.base+backendUrl.academic, { params: academicFormData } )
    }
}

export default new AcademicSerivce();