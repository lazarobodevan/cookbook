import styles from './Signup.module.scss'
import image from '../../assets/images/signup-background.png'
import FormInput from '../../components/input'
import Button from '../../components/button'
import { useState } from 'react'
import userService from '../../services/userService'
import { useNavigate } from 'react-router-dom'

export default function Signup(){

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirm, setConfirm] = useState('');

    const navigator = useNavigate();

    function isPasswordValid(){
        if(password.length < 6){
            //error
            return false;
        }
        if(password !== confirm){
            //error
            return false;
        }
        return true;
    }

    async function handleSubmit(){
        const resp = await userService.createUser(name,email,password);

        //if ok
        if(!resp.statusCode){
            //success
            navigator('/');
        }else{
            //error
        }
    }

    return(
        <section className={styles.content}>
            <img src={image} className={styles.image}/>
            <div className={styles.form}>
                <h1>Cadastre-se</h1>
                <FormInput 
                    placeholder='Nome' 
                    onChange={e => setName(e.target.value)} 
                    style={{
                        border: '1px solid #737373', 
                        color:'#3C3C3C',
                        marginTop: 30,
                        marginBottom: 20
                    }}
                />

                <FormInput 
                    placeholder='Email' 
                    onChange={e => setEmail(e.target.value)} 
                    style={{
                        border: '1px solid #737373', 
                        color:'#3C3C3C',
                        marginBottom: 20
                    }}
                />

                <FormInput 
                    placeholder='Senha' 
                    onChange={e => setPassword(e.target.value)} 
                    style={{
                        border: '1px solid #737373', 
                        color:'#3C3C3C',
                        marginBottom: 20
                    }}
                />

                <FormInput 
                    placeholder='Confirmar senha' 
                    onChange={e => setConfirm(e.target.value)} 
                    style={{
                        border: '1px solid #737373', 
                        color:'#3C3C3C',
                        marginBottom: 40
                    }}
                />
                <Button text='Cadastrar' onClick={handleSubmit}/>
            </div>
        </section>
    )
}