import Divisor from '../../../components/divisor'
import styles from './YourRecipes.module.scss'

export default function YourRecipesItem(){
    return(
        <div className={styles.container}>
            <div className={styles.recipe}>
                <span className={styles.name}>Pudim de leite condenado</span>
                <span>14/07</span>
            </div>
            <Divisor/>
        </div>
    )
}