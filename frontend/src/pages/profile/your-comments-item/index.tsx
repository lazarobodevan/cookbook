import Divisor from '../../../components/divisor'
import styles from './YourComments.module.scss'
import { format } from 'date-fns';
interface Props {
    recipeName:string;
    userName:string;
    comment:string;
    date:string;
}

export default function YourCommentItem({recipeName, userName, comment, date}:Props){
    return(
        <div className={styles.container}>
            <div className={styles.comment}>
                <div className={styles.info_wrapper}>
                    <span className={styles.recipe_name}>{recipeName}</span>
                    <span className={styles.person_name}>{userName}</span>
                </div>
                <span><i>"{comment}"</i></span>
                <span>{format(new Date(date),'dd/MM/yy')}</span>
            </div>
            <Divisor/>
        </div>
    )
}