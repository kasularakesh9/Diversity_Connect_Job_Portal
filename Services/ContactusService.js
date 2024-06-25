import axios from 'axios';
import { backendUrl } from '../Constants'

class ContactusService{


    contact(contactFormData){
        return axios.post(backendUrl.base+backendUrl.contactus, contactFormData)
    }
}

export default new ContactusService();