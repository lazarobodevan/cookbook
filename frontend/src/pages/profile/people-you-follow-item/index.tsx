import styles from './YouFollow.module.scss'

export default function PeopleYouFollowItem(){
    return(
            <div className={styles.container}>
                <div className={styles.person}>
                    <div className={styles.picture}></div>
                    <span className={styles.name}>Tonha da Silva</span>
                </div>
            </div>
    )
}