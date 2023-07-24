import Divisor from '../../../components/divisor'
import styles from './YourLikes.module.scss'

export default function YourLikesItem(){
    return(
        <div className={styles.container}>
            <div className={styles.like}>
                <div className={styles.info_wrapper}>
                    <span className={styles.recipe_name}>Pudim de leite condenado</span>
                    <span className={styles.person_name}>Tonha da silva</span>
                </div>
                <span>14/07</span>
            </div>
            <Divisor/>
        </div>
    )
}