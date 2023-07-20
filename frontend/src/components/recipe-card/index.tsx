import styles from './RecipeCard.module.scss'

import {AiOutlineHeart, AiFillHeart} from 'react-icons/ai'
import {BiCommentDetail} from 'react-icons/bi'
import Divisor from '../divisor';
import RecipeComment from '../recipe-comment';

interface Props{
    personName: string;
    timePosted: string;
    recipe:string;
    likes:number;
    comments?:string;
    categories:string;
}

export default function RecipeCard(){
    return(
        <div className={styles.card}>
            <div className={styles.header}>
                <div className={styles.person_container}>
                    <div className={styles.picture}></div>
                    <p className={styles.person_name}>Tonha da Silva</p>
                </div>
                <span className={styles.timePosted}>2h</span>
            </div>
            <Divisor/>
            <div className={styles.recipe}>
                <h2 className={styles.recipe_name}>Pudim de leite condenado</h2>
                <span className={styles.recipe_content}>
                    6 colheres de sopa de açúcar
                    1 lata de leite condensado
                    1 lata de leite, use a mesma medida do leite condensado
                    3 ovos
                </span>
            </div>
            <div className={styles.footer}>
                <div className={styles.actions}>
                    <AiOutlineHeart size={32} style={{color:'#5B5B5B', cursor:'pointer'}}/>
                    <BiCommentDetail size={32} style={{color:'#5B5B5B', cursor:'pointer'}}/>
                </div>
            </div>
            <Divisor/>
            <section className={styles.comments}>
                <h3 className={styles.comments_title}>Comentários</h3>
                <RecipeComment/>
            </section>

        </div>
    )
}