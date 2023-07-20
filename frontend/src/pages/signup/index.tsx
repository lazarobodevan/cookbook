import styles from './Signup.module.scss'
import image from '../../assets/images/signup-background.png'
import FormInput from '../../components/input'
import Button from '../../components/button'

export default function Signup(){
    return(
        <section className={styles.content}>
            <img src={image} className={styles.image}/>
            <div className={styles.form}>
                <h1>Cadastre-se</h1>
                <FormInput 
                    placeholder='Nome' 
                    onChange={()=>{return}} 
                    style={{
                        border: '1px solid #737373', 
                        color:'#3C3C3C',
                        marginTop: 30,
                        marginBottom: 20
                    }}
                />

                <FormInput 
                    placeholder='Email' 
                    onChange={()=>{return}} 
                    style={{
                        border: '1px solid #737373', 
                        color:'#3C3C3C',
                        marginBottom: 20
                    }}
                />

                <FormInput 
                    placeholder='Senha' 
                    onChange={()=>{return}} 
                    style={{
                        border: '1px solid #737373', 
                        color:'#3C3C3C',
                        marginBottom: 20
                    }}
                />

                <FormInput 
                    placeholder='Confirmar senha' 
                    onChange={()=>{return}} 
                    style={{
                        border: '1px solid #737373', 
                        color:'#3C3C3C',
                        marginBottom: 40
                    }}
                />
                <Button text='Cadastrar' onClick={()=>{return}}/>
            </div>
        </section>
    )
}