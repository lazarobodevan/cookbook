import { useContext, useEffect, useState } from 'react'
import RecipeCard from '../../components/recipe-card'
import styles from './Home.module.scss'
import NewPostFrm from './new-post'
import postService from '../../services/postService'
import { RecipePost } from '../../types/RecipePost'
import { AuthContext } from '../../contexts/Auth/AuthContext'
import { NewPost } from '../../types/NewPost'

export default function Home(){

    const [recipes, setRecipes] = useState<RecipePost[] | []>()
    const [likedRecipes, setLikedRecipes] = useState<{id:string}[] | []>([]);
    //const [newRecipe, setNewRecipe] = useState<RecipePost>();

    const auth = useContext(AuthContext);

    async function handleNewPost(data:NewPost){
        data.userId = auth.user!.id;
        const newRecipe = await postService.createNewPost(data);
        let updatedRecipes = recipes;
        updatedRecipes = [newRecipe].concat(recipes);
        console.log(updatedRecipes);
        setRecipes(updatedRecipes);
    }

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
            <NewPostFrm onClick={handleNewPost}/>
            {recipes?.map(item => {
                
                const isLiked = likedRecipes.find((el:any) => el.id === item.recipe.id);
                return <RecipeCard post={item} isLiked={!isLiked ? false: true} key={item.recipe.id}/>
    
            })}
        </section>
        </>
    )
}