import { UserAuth } from "../types/UserAuth";

class AuthService{

    private API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

    public async login(email:string, password:string):Promise<UserAuth>{
        const body = {
            email,
            password
        }

        return await fetch(`${this.API_BASE_URL}/auth/login`, {body: JSON.stringify(body), method:'POST', mode:'cors', headers:{'Content-Type': 'application/json'}})
            .then(resp => resp.json());
    }

    public async validateToken(token: string){
    
        return await fetch(`${this.API_BASE_URL}/auth/login`, {body: JSON.stringify({token})})
            .then(resp => resp.json())
    }

}

export default new AuthService();