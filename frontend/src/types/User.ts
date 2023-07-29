import { Recipe } from "./Recipe";
import {Comment} from './Comment'

export type User = {
    id:string;
    name:string;
    email:string;
    password?:string;
    likes?: Recipe[];
    comments?: Comment[];
    recipes?: Recipe[];
}