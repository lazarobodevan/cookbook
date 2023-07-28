import styles from './Comment.module.scss'
import Divisor from "../../divisor";
import { CommentPost } from '../../../types/CommentPost';
import { format } from 'date-fns';
interface Props{
    comment: CommentPost
}

export default function RecipeComment({comment}:Props){
    return(
        <div className={styles.comment}>
            <div className={styles.header}>
                <div className={styles.person_container}>
                    <div className={styles.picture}></div>
                    <p className={styles.person_name}>{comment.user.name}</p>
                </div>
                <span className={styles.timePosted}>{format(new Date(comment.comment._createdAt),'dd/MM/yy')}</span>
            </div>
            <div className={styles.comment_text}>
                {comment.comment.text}
            </div>
            <Divisor/>
        </div>
    )
}