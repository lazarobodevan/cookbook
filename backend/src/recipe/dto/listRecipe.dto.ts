export class ListRecipeDTO{
    constructor(
        readonly recipe:{
            id: string;
            name:string;
            ingredients:string;
            steps:string;
            categories: string;
            likes:number;
            comments:number;
            _createdAt: string;
        },
        readonly user:{
            name: string
        }
    ){}
}