import { useState } from "react";
import { AuthContext } from "./AuthContext";
import { UserAuth } from "../../types/UserAuth";
import AuthService from "../../services/authService";
import { User } from "../../types/User";


export default function AuthProvider({children}:{children: JSX.Element}){
    const [user,setUser]= useState<User | null>(null);

    async function login(email:string, password:string){
        const data = await AuthService.login(email, password);
        if(data.user && data.token){
            setUser(data.user);

            return true;
        }
        return false;
    }

    function setToken(token:string){
        localStorage.setItem('token',token);
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