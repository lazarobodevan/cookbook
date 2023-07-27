import RecipeCard from '../../components/recipe-card'
import styles from './Search.module.scss'
import SearchComponent from './search-component'

export default function Search(){
    return(
        <section className={styles.content}>
            <SearchComponent/>
            {/* <RecipeCard/> */}
        </section>
    )
}