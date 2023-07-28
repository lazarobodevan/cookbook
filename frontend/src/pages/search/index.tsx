import { useContext, useEffect, useState } from 'react'
import RecipeCard from '../../components/recipe-card'
import styles from './Search.module.scss'
import SearchComponent from './search-component'
import { RecipePost } from '../../types/RecipePost'
import postService from '../../services/postService'
import { AuthContext } from '../../contexts/Auth/AuthContext'

export default function Search(){

    const [recipes, setRecipes] = useState<RecipePost[]>();
    const [likedRecipes, setLikedRecipes] = useState<{id:string}[] | []>([]);

    const auth = useContext(AuthContext);

    async function handleSearch(data:any){
        if(!data.search){
            const getRecipes = async() =>{
                const recipes = await postService.getRecipes();
                setRecipes(recipes);
            };
            const getLikedRecipes = async()=>{
                const liked = await postService.getLikedRecipes(auth.user!.id);
                
                setLikedRecipes(liked);
            };
            getRecipes();
            getLikedRecipes();

        }else{
            if(data.by === 'ingredient'){
                let updatedRecipes = recipes?.filter(item => item.recipe.ingredients.includes(data.search));
                setRecipes(updatedRecipes)
                return;
            }
            if(data.by === 'category'){
                let updatedRecipes = recipes?.filter(item => item.recipe.categories.includes(data.search));
                setRecipes(updatedRecipes)
                return;
            }
        }
    }

    useEffect(()=>{
        const getRecipes = async() =>{
            const recipes = await postService.getRecipes();
            setRecipes(recipes);
        };
        const getLikedRecipes = async()=>{
            const liked = await postService.getLikedRecipes(auth.user!.id);
            
            setLikedRecipes(liked);
        };
        getRecipes();
        getLikedRecipes();
    },[])

    return(
        <section className={styles.content}>
            <SearchComponent onClick={handleSearch}/>
            {recipes?.map(item => {
                
                const isLiked = likedRecipes.find((el:any) => el.id === item.recipe.id);
                return <RecipeCard post={item} isLiked={!isLiked ? false: true} key={item.recipe.id}/>
    
            })}
        </section>
    )
}