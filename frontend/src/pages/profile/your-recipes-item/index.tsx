import Divisor from '../../../components/divisor'
import styles from './YourRecipes.module.scss'
import { format } from 'date-fns';

interface Props {
    name:string;
    date:string;
}

export default function YourRecipesItem({name, date}:Props){
    return(
        <div className={styles.container}>
            <div className={styles.recipe}>
                <span className={styles.name}>{name}</span>
                <span>{format(new Date(date),'dd/MM/yy')}</span>
            </div>
            <Divisor/>
        </div>
    )
}