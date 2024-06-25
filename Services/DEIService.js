import axios from 'axios';
import { role,backendUrl } from '../Constants'

class DEIService{

    
    registerjob(deiFormData){
        return axios.post(backendUrl.base+backendUrl.dei, deiFormData)
    }


    getDEIProfileDatails(id){
        const deiFormData = {                        
            "role": role.DEIProfiledetails,
            "id": id
        };
        return axios.get(backendUrl.base+backendUrl.dei,  { params: deiFormData })
    }
    updateDEIProfile(id){
        const deiFormData = {                    
            "role": role.Updatedeiprofile,
            "id": id
        };
        return axios.get(backendUrl.base+backendUrl.dei, { params: deiFormData } )
    }
    changedetailsDEIProfile(deiFormData){
        
        return axios.post(backendUrl.base+backendUrl.dei, deiFormData)
    }

    getURMCandidateforDEI(location,positions){
        const deiFormData = {                    
            "role": role.GetURMCandidateforDEI,            
            "location":location,
            "positions":positions,
        };
       return axios.get(backendUrl.base+backendUrl.dei, { params: deiFormData } )
    }

    fetchJobsDEI(id){
        const deiFormData = {                    
            "role": role.Viewjobsdei,
            "id":id
        };
        return axios.get(backendUrl.base+backendUrl.dei, { params: deiFormData })
    }

    DeclineJob(deiFormData){
        
        return axios.post(backendUrl.base+backendUrl.dei,  deiFormData )
    }
    AcceptJob(deiFormData){
        
        return axios.post(backendUrl.base+backendUrl.dei,  deiFormData )
    }


    DEIDashboardfetchJobs(id){
        const deiFormData = {                    
            "role": role.DeidashboardfetchJobs,
            "id": id
        };  
        return axios.get(backendUrl.base+backendUrl.dei, { params: deiFormData } )
    }




}

export default new DEIService();