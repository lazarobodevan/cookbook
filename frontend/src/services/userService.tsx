import FetchAPI from "../common/Fetch";
import { User } from "../types/User";

class UserService{

    public async getProfile(userId:string):Promise<User>{
        
        return await FetchAPI(`/users/profile/${userId}`,'GET');

    }

    public async createUser(name:string, email:string, password:string):Promise<any>{
        return await FetchAPI(`/users`,'POST',{name, email, password})
    }

}

export default new UserService();