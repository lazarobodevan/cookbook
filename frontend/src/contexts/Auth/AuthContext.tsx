import { createContext } from "react";
import { User } from "../../types/User";
import { IUserAuth } from "../../common/interfaces/IUserAuth";

export type AuthContextType ={
    user: IUserAuth | null;
    login: (email:string, password:string) => Promise<boolean>;
    logout: () => void;
}

export const AuthContext = createContext<AuthContextType>(null!);