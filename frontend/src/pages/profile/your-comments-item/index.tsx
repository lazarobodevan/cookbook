import Divisor from '../../../components/divisor'
import styles from './YourComments.module.scss'

export default function YourCommentItem(){
    return(
        <div className={styles.container}>
            <div className={styles.comment}>
                <div className={styles.info_wrapper}>
                    <span className={styles.recipe_name}>Pudim de leite condenado</span>
                    <span className={styles.person_name}>Tonha da silva</span>
                </div>
                <span><i>"Adorei seu podin;deus ensaboe..."</i></span>
                <span>14/07</span>
            </div>
            <Divisor/>
        </div>
    )
}