import styles from './RecipeCard.module.scss'

import {AiOutlineHeart, AiFillHeart} from 'react-icons/ai'
import {BiCommentDetail} from 'react-icons/bi'
import Divisor from '../divisor';
import RecipeComment from '../recipe-comment';
import { useState } from 'react';
import Button from '../button';

interface Props{
    personName: string;
    timePosted: string;
    recipe:string;
    likes:number;
    comments?:string;
    categories:string;
}

export default function RecipeCard(){

    const [isCommentsVisible, setIsCommentsVisible] = useState(false);
    const [isPostLiked, setIsPostLiked] = useState(false);

    function handleCommentsVisible(){
        setIsCommentsVisible(!isCommentsVisible);
    }

    function handlePostLiked(){
        setIsPostLiked(!isPostLiked);
    }

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
                    <div onClick={handlePostLiked}>
                        {isPostLiked ? 
                            <AiFillHeart size={32} style={{color:'red', cursor:'pointer'}}/>
                            :
                            <AiOutlineHeart size={32} style={{color:'#5B5B5B', cursor:'pointer'}}/>                            
                        }
                    </div>
                    <div onClick={handleCommentsVisible}>
                        <BiCommentDetail size={32} style={{color:'#5B5B5B', cursor:'pointer'}}/>
                    </div>
                </div>
            </div>
            {isCommentsVisible && 
                <>
                    <Divisor/>
                    <section className={styles.comments}>

                        <h3 className={styles.comments_title}>Comentários</h3>
                        <textarea rows={3} className={styles.textarea} placeholder='Deixe seu comentário...'/>
                        <Button onClick={()=>{return}} 
                            text='Comentar' 
                            textStyle={{fontSize:'12px'}} 
                            style={{width:'100px', padding:0, alignSelf:'flex-end', marginTop:'10px'}}/>

                        <RecipeComment/>
                    </section>
                </>
            }
        </div>
    )
}