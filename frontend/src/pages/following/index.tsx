import RecipeCard from '../../components/recipe-card'
import SearchComponent from '../search/search-component'
import styles from './Following.module.scss'

export default function Following(){
    return(
        <section className={styles.content}>
            {/* <SearchComponent/> */}
            {/* <!-- <RecipeCard/> --> */}
            <h1>Em breve</h1>
        </section>
    )
}