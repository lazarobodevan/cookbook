import styles from './Header.module.scss'
import logo from '../../assets/images/logo.png'
import { FaHome, FaSearch} from 'react-icons/fa';
import {FaUserGroup } from 'react-icons/fa6';
import { NavLink } from 'react-router-dom';
export default function Header(){
    return(
        <div className={styles.header}>
            <img src={logo}/>
            <nav className={styles.nav}>
                <NavLink to={'/home'} style={({ isActive, isPending }) => {
                    return {
                        color: isActive ? "#F48432" : "#FFFFFF",
                        opacity: isActive ? '1' : '0.4'
                    };
                }}>
                    <FaHome size={28}/>
                </NavLink>

                <NavLink to={'/search'} style={({ isActive, isPending }) => {
                    return {
                        color: isActive ? "#F48432" : "#FFFFFF",
                        opacity: isActive ? '1' : '0.4'
                    };
                }}>
                    <FaSearch size={26}/>
                </NavLink>

                <NavLink to={'/following'} style={({ isActive, isPending }) => {
                    return {
                        color: isActive ? "#F48432" : "#FFFFFF",
                        opacity: isActive ? '1' : '0.4'
                    };
                }}>
                    <FaUserGroup size={26}/>
                </NavLink>
            </nav>
        </div>
    )
}