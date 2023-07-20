import styles from './Header.module.scss'
import logo from '../../assets/images/logo.png'
import { FaHome } from 'react-icons/fa';
export default function Header(){
    return(
        <div className={styles.header}>
            <img src={logo}/>
            <nav className={styles.nav}>
                <FaHome size={40} color='white'/>
            </nav>
        </div>
    )
}