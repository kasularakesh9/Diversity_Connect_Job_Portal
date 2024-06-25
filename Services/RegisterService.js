import axios from 'axios';
import { role,backendUrl } from '../Constants'

class RegisterSerivce{


    register(registerFormData){
        return axios.post(backendUrl.base+backendUrl.register, registerFormData)
    }

    registerURM(registerFormData){
        return axios.post(backendUrl.base+backendUrl.registerURM, registerFormData)
    }
}

export default new RegisterSerivce();