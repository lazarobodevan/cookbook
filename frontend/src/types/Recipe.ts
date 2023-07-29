import { User } from "./User";

export type Recipe = {
    id:string,
    name:string;
    ingredients:string
    steps: string;
    categories: string;
    comments:number;
    likes:number;
    _createdAt:string;
    user?:User;
}