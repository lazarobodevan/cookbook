import { useState } from "react";
import { AuthContext } from "./AuthContext";
import { User } from "../../types/User";
import AuthService from "../../services/authService";
import { IUserAuth } from "../../common/interfaces/IUserAuth";


export default function AuthProvider({children}:{children: JSX.Element}){
    const [user,setUser]= useState<IUserAuth | null>(null);

    async function login(email:string, password:string){
        const data = await AuthService.login(email, password);
        if(data.user && data.token){
            setUser({
                user:{
                    id: data.user.id,
                    name: data.user.name,
                    email: data.user.email
                },
                token: data.token
            });
            console.log(user);
            return true;
        }
        return false;
    }

    function logout(){
        setUser(null);
    }

    return(
        <AuthContext.Provider value={{user, login, logout}}>
            {children}
        </AuthContext.Provider>
    )
}