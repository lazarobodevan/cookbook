import { Outlet } from 'react-router-dom'
import Header from '../../components/header'
import styles from './Base.module.scss'

export default function BasePage(){
    return(
        <>
            <Header/>
            <section className={styles.content}>
                <Outlet/>
            </section>
        </>
    )
}