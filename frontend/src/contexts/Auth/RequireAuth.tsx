import Login from "../../pages/login";
import { AuthContext } from "./AuthContext";
import {useContext} from 'react';

export default function RequireAuth({children}:{children: JSX.Element}){
    const auth = useContext(AuthContext);
    console.log(auth)
    if(!auth.user){
        return <Login/>;
    }

    return children;
}