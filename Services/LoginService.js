import axios from "axios";
import { backendUrl } from "../Constants";


class LoginService{
    login(reqData){
        return axios.post(backendUrl.base+backendUrl.login, reqData)
    }
}

export default new LoginService();