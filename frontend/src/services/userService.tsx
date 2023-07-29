import FetchAPI from "../common/Fetch";
import { User } from "../types/User";

class UserService{

    public async getProfile(userId:string):Promise<User>{
        
        return await FetchAPI(`/users/profile/${userId}`,'GET');

    }

}

export default new UserService();