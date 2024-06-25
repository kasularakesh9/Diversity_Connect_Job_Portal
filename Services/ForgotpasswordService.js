import axios from "axios";
import { backendUrl } from "../Constants";


class ForgetPassword{

    requestForNewPassword(reqData){
        return axios.post(backendUrl.base+backendUrl.forgetPassword,reqData);
    }
}

export default new ForgetPassword();