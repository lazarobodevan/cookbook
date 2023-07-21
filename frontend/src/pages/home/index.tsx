import RecipeCard from '../../components/recipe-card'
import styles from './Home.module.scss'
import NewPostFrm from './new-post'

export default function Home(){
    return(
        <>
        <section className={styles.content}>
            <NewPostFrm/>
            <RecipeCard/>
            <RecipeCard/>
            <RecipeCard/>
            <RecipeCard/>
            <RecipeCard/>
            <RecipeCard/>
            <RecipeCard/>
            <RecipeCard/>
        </section>
        </>
    )
}