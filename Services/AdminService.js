import axios from "axios";
import { role,backendUrl } from "../Constants";


class AdminService {

    getAdminDashboardData(){
        return axios.get(backendUrl.base+backendUrl.adminDashboard);
    }
    getAdminHeaderData(){
        return axios.get(backendUrl.base+backendUrl.adminDashboardHeader);
    }

    
    register(adminFormData){
      
        return axios.post(backendUrl.base+backendUrl.admin, adminFormData)
    }

    fetchData(){
        const adminFormData = {                    
            "role": role.Applicationstatus
        };
        return axios.get(backendUrl.base+backendUrl.admin, { params: adminFormData })
    }
 //-------------------------------jobs-------------------------------
    fetchJobs(){
        const adminFormData = {                    
            "role": role.Viewjobs
        };
        return axios.get(backendUrl.base+backendUrl.admin, { params: adminFormData })
    }

    deleteJobs(adminFormData){
        
        return axios.post(backendUrl.base+backendUrl.admin,  adminFormData )
    }

    updateJobs(id){
        const adminFormData = {                    
            "role": role.Updatejobs,
            "id": id
        };  

        return axios.get(backendUrl.base+backendUrl.admin, { params: adminFormData } )
    }

    changedetailsofJobs(adminFormData){
        console.log(adminFormData);
        return axios.post(backendUrl.base+backendUrl.admin, adminFormData)
    }

    //-----------------------------------DEI---------------------------------------
    deletedei(adminFormData){
        
        return axios.post(backendUrl.base+backendUrl.admin,  adminFormData )
    }
    fetchDEI(){
        const adminFormData = {                    
            "role": role.Viewdei
        };
        return axios.get(backendUrl.base+backendUrl.admin, { params: adminFormData })
    }
    updateDEI(id){
        const adminFormData = {                    
            "role": role.Updatedei,
            "id": id
        };  

        return axios.get(backendUrl.base+backendUrl.admin, { params: adminFormData } )
    }
    changedetailsofDEI(adminFormData){
        console.log(adminFormData);
        return axios.post(backendUrl.base+backendUrl.admin, adminFormData)
    }//-----------------------------------URM---------------------------------------
    deleteURM(adminFormData){
        
        return axios.post(backendUrl.base+backendUrl.admin,  adminFormData )
    }
    fetchURM(){
        const adminFormData = {                    
            "role": role.Viewurm
        };
        return axios.get(backendUrl.base+backendUrl.admin, { params: adminFormData })
    }
    updateURM(id){
        const adminFormData = {                    
            "role": role.Updateurm,
            "id": id
        };  

        return axios.get(backendUrl.base+backendUrl.admin, { params: adminFormData } )
    }
    changedetailsofURM(adminFormData){
        console.log(adminFormData);
        return axios.post(backendUrl.base+backendUrl.admin, adminFormData)
    }
    //-----------------------------------Academia---------------------------------------
    deleteAcademia(adminFormData){
        
        return axios.post(backendUrl.base+backendUrl.admin,  adminFormData )
    }
    fetchAcademia(){
        const adminFormData = {                    
            "role": role.Viewacademia
        };
        return axios.get(backendUrl.base+backendUrl.admin, { params: adminFormData })
    }
    updateAcademia(id){
        const adminFormData = {                    
            "role": role.Updateacademia,
            "id": id
        };  

        return axios.get(backendUrl.base+backendUrl.admin, { params: adminFormData } )
    }
    changedetailsofAcademia(adminFormData){
        console.log(adminFormData);
        return axios.post(backendUrl.base+backendUrl.admin, adminFormData)
    }

    
}

export default new AdminService();