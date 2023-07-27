import { useEffect, useState } from 'react'
import RecipeCard from '../../components/recipe-card'
import styles from './Home.module.scss'
import NewPostFrm from './new-post'
import postService from '../../services/postService'
import { RecipePost } from '../../types/RecipePost'

export default function Home(){

    const [recipes, setRecipes] = useState<RecipePost[] | []>()

    useEffect(()=>{
        const getRecipes = async() =>{
            const recipes = await postService.getRecipes()
            setRecipes(recipes);
        }
        getRecipes();
    },[])

    return(
        <>
        <section className={styles.content}>
            <NewPostFrm/>
            {recipes?.map(item => {
                return <RecipeCard post={item} key={item.id}/>
            })}
        </section>
        </>
    )
}