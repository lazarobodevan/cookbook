import styles from './RecipeCard.module.scss'

import {AiOutlineHeart, AiFillHeart} from 'react-icons/ai'
import {BiCommentDetail} from 'react-icons/bi'
import Divisor from '../divisor';
import RecipeComment from '../recipe-comment';
import { useContext, useEffect, useState } from 'react';
import Button from '../button';
import { RecipePost } from '../../types/RecipePost';
import {format} from 'date-fns'
import { AuthContext } from '../../contexts/Auth/AuthContext';
import postService from '../../services/postService';


interface Props{
    post:RecipePost,
    isLiked: boolean
}

export default function RecipeCard(
    {   post,
        isLiked
    }:Props){

    const auth = useContext(AuthContext);

    const [recipe, setRecipe] = useState(post);
    const [isCommentsVisible, setIsCommentsVisible] = useState(false);
    const [isPostLiked, setIsPostLiked] = useState(isLiked);
    

    function handleCommentsVisible(){
        setIsCommentsVisible(!isCommentsVisible);
    }

    async function handlePostLiked(){
        await postService.likeRecipe(post.id, auth.user!.id);
        updateLikesNumber()
        setIsPostLiked(!isPostLiked);
    }

    function updateLikesNumber(){
        isPostLiked ? setRecipe({...recipe, likes: recipe.likes-1}) 
        : setRecipe({...recipe, likes: recipe.likes+1});
    }

    useEffect(()=>{
        setIsPostLiked(isLiked)
        setRecipe(post);
    },[isLiked, post]);

    return(
        <div className={styles.card}>
            <div className={styles.header}>
                <div className={styles.person_container}>
                    <div className={styles.picture}></div>
                    <p className={styles.person_name}>{post.name}</p>
                </div>
                <span className={styles.timePosted}>{
                        format(new Date(post._createdAt), 'dd/MM/yyyy')
                    }
                </span>
            </div>
            <Divisor/>

            <div className={styles.recipe}>
                <h2 className={styles.recipe_name}>{post.recipename}</h2>
                <span className={styles.recipe_content}>
                    {post.ingredients}
                    {post.steps}
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
                        {recipe.likes}
                    </div>
                    <div onClick={handleCommentsVisible}>
                        <BiCommentDetail size={32} style={{color:'#5B5B5B', cursor:'pointer'}}/>
                        {recipe.comments}
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