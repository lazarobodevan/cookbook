import styles from './Login.module.scss'
import background from '../../assets/images/background-login.png'
import FormInput from '../../components/input';
import Button from '../../components/button';
import { Link, useNavigate } from 'react-router-dom';
import { useState, useContext } from 'react';
import { AuthContext } from '../../contexts/Auth/AuthContext';
import { ToastContainer } from 'react-toastify';
import ToastService from '../../common/toast/ToastService';

export default function Login(){

    const auth = useContext(AuthContext);

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const navigate = useNavigate();

    const handleLogin = async() =>{
        if(email && password){
            const isLogged = await auth.login(email, password);
            if(isLogged){
                navigate('/home');
            }else{
                ToastService.error('Usuário ou senha incorretos');
            }
        }
    }

    return (
        <section className={styles.container} style={{backgroundImage: `url(${background})`}}>
            <section className={styles.content}>
                <h1>Cookbook</h1>
                <FormInput 
                    placeholder='Email' 
                    onChange={(event) => {setEmail(event.target.value)}} 
                    style={{marginBottom:20, 
                    border: '1px solid rgba(255, 255, 255, 0.69)'}}
                />
                <FormInput 
                    placeholder='Senha' 
                    onChange={(event) => {setPassword(event.target.value)}} 
                    style={{marginBottom:30, border: '1px solid rgba(255, 255, 255, 0.69)'}} 
                    type='password'
                />

                <Button text='Login'style={{marginBottom:20}} onClick={handleLogin}/>
                <Link to={'/signup'} className={styles.link} >Cadastre-se</Link>
            </section>

            <ToastContainer position="bottom-right"
                    autoClose={1000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover/>
        </section>
    );
}