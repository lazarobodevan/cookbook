import FetchAPI from "../common/Fetch";
import { UserAuth } from "../types/UserAuth";

class AuthService{

    private API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

    public async login(email:string, password:string):Promise<UserAuth>{
        const body = {
            email,
            password
        }

        return await FetchAPI('/auth/login','POST',body)
    }

    public async validateToken(token: string){

        return FetchAPI('/auth/validate','POST',{token})
    
    }

}

export default new AuthService();