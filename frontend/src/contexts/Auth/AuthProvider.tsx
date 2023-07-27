import { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import { UserAuth } from "../../types/UserAuth";
import AuthService from "../../services/authService";
import { User } from "../../types/User";


export default function AuthProvider({children}:{children: JSX.Element}){
    const [user,setUser]= useState<User | null>(null);

    useEffect(()=>{
        const validateToken = async() =>{
            const storageData = localStorage.getItem('token');
            if(storageData){
                const data = await AuthService.validateToken(storageData);
                if(data.user){
                    setUser(data.user)
                }
            }
        }
    },[])

    async function login(email:string, password:string){
        const data = await AuthService.login(email, password);
        if(data.user && data.token){
            setUser(data.user);
            setToken(data.token);
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