import styles from './RecipeCard.module.scss'

import {AiOutlineHeart, AiFillHeart} from 'react-icons/ai'
import {BiCommentDetail} from 'react-icons/bi'
import Divisor from '../divisor';
import RecipeComment from './recipe-comment';
import { useContext, useEffect, useState } from 'react';
import Button from '../button';
import { RecipePost } from '../../types/RecipePost';
import {format} from 'date-fns'
import { AuthContext } from '../../contexts/Auth/AuthContext';
import postService from '../../services/postService';
import { CommentPost } from '../../types/CommentPost';
import commentService from '../../services/commentService';


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
    const [comments, setComments] = useState<CommentPost[]>([])
    const [newComment, setNewComment] = useState('');
    const [isCommentsVisible, setIsCommentsVisible] = useState(false);
    const [isPostLiked, setIsPostLiked] = useState(isLiked);
    

    function handleCommentsVisible(){
        setIsCommentsVisible(!isCommentsVisible);
    }

    async function handlePostLiked(){
        await postService.likeRecipe(post.recipe.id, auth.user!.id);
        updateLikesNumber()
        setIsPostLiked(!isPostLiked);
    }

    async function handleNewComment(){
        console.log("oi")
        if(!newComment.trim()) return;
        await commentService.createNewComment(recipe.recipe.id, auth.user!.id, newComment);
        let updatedComments = [{
            user:{
                name: auth.user!.name
            },
            comment:{
                text: newComment,
                _createdAt: new Date().toString()
            }
        }] as CommentPost[];

        updatedComments = updatedComments.concat(comments);
        setComments(updatedComments);
        updateCommentsNumber();
    }

    function updateLikesNumber(){
        if(isPostLiked){
            let newState = {...recipe};
            newState.recipe.likes--;
            setRecipe(newState);
        }else{
            let newState = {...recipe};
            newState.recipe.likes++;
            setRecipe(newState);
        }
    }

    function updateCommentsNumber(){
        let updatedComments = recipe;
        updatedComments.recipe.comments++;
        setRecipe(updatedComments);
    }

    useEffect(()=>{
        setIsPostLiked(isLiked)
        setRecipe(post);
    },[isLiked, post]);

    useEffect(()=>{
        const getComments = async () =>{
            if(isCommentsVisible){
                const comments = await commentService.getCommentsFromPost(recipe.recipe.id);
                setComments(comments);
            }
        }
        getComments();

    },[isCommentsVisible])

    return(
        <div className={styles.card}>
            <div className={styles.header}>
                <div className={styles.person_container}>
                    <div className={styles.picture}></div>
                    <p className={styles.person_name}>{post.user.name}</p>
                </div>
                <span className={styles.timePosted}>{
                        format(new Date(post.recipe._createdAt), 'dd/MM/yyyy')
                    }
                </span>
            </div>
            <Divisor/>

            <div className={styles.recipe}>
                <h2 className={styles.recipe_name}>{post.recipe.name}</h2>
                <div >
                    <h4>Ingredientes</h4>
                    <ul className={styles.recipe_content}>
                        {
                            recipe.recipe.ingredients.split('\n').map(item=>{
                                return <li>{item}</li>
                            })
                        }
                    </ul>
                    <br/>
                    <h4>Modo de preparo</h4>
                    <ol className={styles.recipe_content}>
                        {
                            recipe.recipe.steps.split('\n').map(item=>{
                                return <li>{item}</li>
                            })
                        }
                    </ol>
                </div>
            </div>

            <div className={styles.footer}>
                <div className={styles.actions}>
                    <div onClick={handlePostLiked}>
                        {isPostLiked ? 
                            <AiFillHeart size={32} style={{color:'red', cursor:'pointer'}}/>
                            :
                            <AiOutlineHeart size={32} style={{color:'#5B5B5B', cursor:'pointer'}}/>  
                        }
                        {recipe.recipe.likes}
                    </div>
                    <div onClick={handleCommentsVisible}>
                        <BiCommentDetail size={32} style={{color:'#5B5B5B', cursor:'pointer'}}/>
                        {recipe.recipe.comments}
                    </div>
                </div>
            </div>

            {isCommentsVisible && 
                <>
                    <Divisor/>
                    <section className={styles.comments}>

                        <h3 className={styles.comments_title}>Comentários</h3>
                        <textarea rows={3} className={styles.textarea} placeholder='Deixe seu comentário...' onChange={(event)=>{setNewComment(event.target.value)}}/>
                        <Button onClick={handleNewComment} 
                            text='Comentar' 
                            textStyle={{fontSize:'12px'}} 
                            style={{width:'100px', padding:0, alignSelf:'flex-end', marginTop:'10px'}}/>
                        
                        {comments.map(item => {return<RecipeComment comment={item} key={item.comment.text}/>})}
                        
                    </section>
                </>
            }
        </div>
    )
}