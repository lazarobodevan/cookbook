import { useContext, useEffect, useState } from 'react'
import RecipeCard from '../../components/recipe-card'
import styles from './Home.module.scss'
import NewPostFrm from './new-post'
import postService from '../../services/postService'
import { RecipePost } from '../../types/RecipePost'
import { AuthContext } from '../../contexts/Auth/AuthContext'

export default function Home(){

    const [recipes, setRecipes] = useState<RecipePost[] | []>()
    const [likedRecipes, setLikedRecipes] = useState<{id:string}[] | []>([]);

    const auth = useContext(AuthContext);

    useEffect(()=>{
        const getRecipes = async() =>{
            const recipes = await postService.getRecipes()
            
            setRecipes(recipes);
        }
        const getLikedRecipes = async()=>{
            const liked = await postService.getLikedRecipes(auth.user!.id);
            
            setLikedRecipes(liked);
        }
        getRecipes();
        getLikedRecipes();
    },[])

    return(
        <>
        <section className={styles.content}>
            <NewPostFrm/>
            {recipes?.map(item => {
                
                const isLiked = likedRecipes.find((el:any) => el.id === item.recipe.id);
                return <RecipeCard post={item} isLiked={!isLiked ? false: true} key={item.recipe.id}/>
    
            })}
        </section>
        </>
    )
}