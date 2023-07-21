import { useState } from 'react'
import Button from '../../../components/button'
import styles from './NewPost.module.scss'

export default function NewPostFrm(){
    const [isExpanded, setIsExpanded] = useState(false);

    function handleExpanded(){
        setIsExpanded(!isExpanded);
    }
    return(
        <div className={styles.wrapper}>
            {
                !isExpanded && 
                    <div className={styles.expander}>
                        <span onClick={handleExpanded} className={styles.expander_text}>Expandir...</span>
                    </div>
            }
            <div className={styles.new_post} style={!isExpanded ? {height:'200px'}: {height:'fit-content', transition:'1s'}}>
                <span>Faça uma publicação...</span>
                <h3 className={styles.title}>Título</h3>
                <input placeholder='Título' className={styles.title_input}/>

                <h3 className={styles.title}>Ingredientes</h3>
                <span className={styles.warning}>*A cada novo ingrediente, pressione enter</span>
                <textarea 
                    placeholder='10 ovos
    2L de leite
    200g de farinha de trigo
    ...' 
                    rows={4}
                    className={styles.textarea}
                />

                <h3 className={styles.title}>Modo de preparo</h3>
                <span className={styles.warning}>*A cada novo passo, pressione enter</span>
                <textarea 
                    placeholder='Misture os ovos e o leite
    Adicione a farinha de trigo
    Mexa com as mãos
    ...'
                    rows={4} 
                    className={styles.textarea}/>

                    <Button 
                        onClick={()=>{return}} 
                        text='Postar' 
                        style={{marginTop:10, alignSelf:'flex-end'}}
                    />
            </div>
        </div>
    )
}