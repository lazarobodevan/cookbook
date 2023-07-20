import styles from './Login.module.scss'
import background from '../../assets/images/background-login.png'
import FormInput from '../../components/input';
import Button from '../../components/button';
import { Link, useNavigate } from 'react-router-dom';

export default function Login(){
    const navigate = useNavigate();
    return (
        <section className={styles.container} style={{backgroundImage: `url(${background})`}}>
            <section className={styles.content}>
                <h1>Cookbook</h1>
                <FormInput placeholder='Email' onChange={() => {return}} style={{marginBottom:20, border: '1px solid rgba(255, 255, 255, 0.69)'}}/>
                <FormInput placeholder='Senha' onChange={() => {return}} style={{marginBottom:30, border: '1px solid rgba(255, 255, 255, 0.69)'}}/>
                <Button text='Login'style={{marginBottom:20}} onClick={()=> {navigate('/signup')}}/>
                <Link to={'/signup'} className={styles.link} >Cadastre-se</Link>
            </section>

        </section>
    );
}