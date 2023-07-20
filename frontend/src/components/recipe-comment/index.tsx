import styles from './Comment.module.scss'
import Divisor from "../divisor";

export default function RecipeComment(){
    return(
        <div className={styles.comment}>
            <div className={styles.header}>
                <div className={styles.person_container}>
                    <div className={styles.picture}></div>
                    <p className={styles.person_name}>Tonha da Silva</p>
                </div>
                <span className={styles.timePosted}>2h</span>
            </div>
            <div className={styles.comment_text}>
                Muito limdo ese.podin,vou fazer;deus,ensaboe
            </div>
            <Divisor/>
        </div>
    )
}