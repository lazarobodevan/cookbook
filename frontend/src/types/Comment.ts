import { Recipe } from "./Recipe";
import { User } from "./User";

export type Comment = {
    id:string;
    comment:string;
    _createdAt: string;
    user?:User;
    recipe?:Recipe;
}