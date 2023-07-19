import styles from './Login.module.scss'
import background from '../../assets/images/background-login.png'
import FormInput from '../../components/input';
import Button from '../../components/button';

export default function Login(){
    return (
        <section className={styles.container} style={{backgroundImage: `url(${background})`}}>
            <section className={styles.content}>
                <h1>Cookbook</h1>
                <FormInput placeholder='Email' onChange={() => {return}} style={{marginBottom:20}}/>
                <FormInput placeholder='Senha' onChange={() => {return}} style={{marginBottom:30}}/>
                <Button text='Login'/>
            </section>

        </section>
    );
}