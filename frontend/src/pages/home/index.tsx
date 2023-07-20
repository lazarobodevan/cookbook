import Header from '../../components/header'
import RecipeCard from '../../components/recipe-card'
import styles from './Home.module.scss'

export default function Home(){
    return(
        <section className={styles.content}>
            <RecipeCard/>
            <RecipeCard/>
            <RecipeCard/>
            <RecipeCard/>
            <RecipeCard/>
            <RecipeCard/>
            <RecipeCard/>
            <RecipeCard/>
        </section>
    )
}