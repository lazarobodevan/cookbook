import Divisor from '../../../components/divisor'
import styles from './YourLikes.module.scss'

import { format } from 'date-fns';

interface Props{
    recipeName: string;
    userName: string
    date:string;
}

export default function YourLikesItem({recipeName, userName, date}:Props){
    return(
        <div className={styles.container}>
            <div className={styles.like}>
                <div className={styles.info_wrapper}>
                    <span className={styles.recipe_name}>{recipeName}</span>
                    <span className={styles.person_name}>{userName}</span>
                </div>
                <span>{format(new Date(date),'dd/MM/yy')}</span>
            </div>
            <Divisor/>
        </div>
    )
}