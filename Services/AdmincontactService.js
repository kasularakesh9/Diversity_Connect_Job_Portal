import axios from "axios";
import { backendUrl } from "../Constants";


class AdminContact{

    requestForContact(reqData){
        return axios.post(backendUrl.base+backendUrl.adminContact,reqData);
    }
}

export default new AdminContact();