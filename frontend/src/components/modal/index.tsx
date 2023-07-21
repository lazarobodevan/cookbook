import styles from './Modal.module.scss'

interface Props{
    children: React.ReactNode
}

export default function Modal(){
    return(
        <section className={styles.background}>
            <div className={styles.content}>

            </div>
        </section>
    )
}