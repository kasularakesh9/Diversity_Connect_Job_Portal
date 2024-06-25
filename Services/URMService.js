import axios from 'axios';
import { role,backendUrl } from '../Constants'

class URMSerivce{

    getProfileDatails(id){
        const urmFormData = {                        
            "role": role.URMProfiledetails,
            "id": id
        };
        return axios.get(backendUrl.base+backendUrl.urm,  { params: urmFormData })
    }

    changedetailsofURMProfile(urmFormData){
       
        return axios.post(backendUrl.base+backendUrl.urm, urmFormData)
    }

    
    updateURMProfile(id){
        const urmFormData = {                    
            "role": role.Updateurmprofile,
            "id": id
        };  
        return axios.get(backendUrl.base+backendUrl.urm, { params: urmFormData } )
    }

    fetchJobs(id){
        const adminFormData = {                    
            "role": role.Viewjobsurm,
            "id":id
        };
        return axios.get(backendUrl.base+backendUrl.urm, { params: adminFormData })
    }

    ApplyJob(urmFormData){
        return axios.post(backendUrl.base+backendUrl.urm, urmFormData)
    }
    URMfetchAppliedJobs(id){
        const adminFormData = {                    
            "role": role.Viewappliedjobsurm,
            "id":id
        };
        return axios.get(backendUrl.base+backendUrl.urm, { params: adminFormData })
    }
    getApplicationStatus(id,jid){
        const urmFormData = {                        
            "role": role.Fetchapplicationstatus,
            "id":id,
            "jid":jid

        };
    return axios.get(backendUrl.base+backendUrl.urm,  { params: urmFormData })
    }
}

export default new URMSerivce();