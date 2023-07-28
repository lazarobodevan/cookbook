import { useState } from 'react'
import Button from '../../../components/button'
import styles from './NewPost.module.scss'
import postService from '../../../services/postService';


interface Props {
    onClick: (...params:any) => void
}

export default function NewPostFrm({onClick}:Props){

    const [isExpanded, setIsExpanded] = useState(false);
    const [title, setTitle] = useState('');
    const [ingredients, setIngredients] = useState('');
    const [steps, setSteps] = useState('');
    const [categories, setCategories] = useState('');

    function handleExpanded(){
        setIsExpanded(!isExpanded);
    }

    function clearFormAndRetract(){
        setIngredients('');
        setTitle('');
        setIsExpanded(false);
        setSteps('');
        setCategories('');
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
                <input placeholder='Título' className={styles.title_input} onChange={e => setTitle(e.target.value)} value={title}/>

                <h3 className={styles.title}>Ingredientes</h3>
                <span className={styles.warning}>*A cada novo ingrediente, pressione enter</span>
                <textarea 
                    placeholder='10 ovos
    2L de leite
    200g de farinha de trigo
    ...' 
                    rows={4}
                    className={styles.textarea}
                    onChange={e => setIngredients(e.target.value)}
                    value={ingredients}
                />

                <h3 className={styles.title}>Modo de preparo</h3>
                <span className={styles.warning}>*A cada novo passo, pressione enter</span>
                <textarea 
                    placeholder='Misture os ovos e o leite
    Adicione a farinha de trigo
    Mexa com as mãos
    ...'
                    rows={4} 
                    className={styles.textarea}
                    onChange={e => setSteps(e.target.value)}
                    value={steps}
                    />

                <h3 className={styles.title}>Categorias</h3>
                <span className={styles.warning}>*A cada nova categoria, pressione enter</span>
                <textarea 
                    placeholder='Bolo
    doce
    sobremesa
    ...'
                    rows={4} 
                    className={styles.textarea}
                    onChange={e => setCategories(e.target.value)}
                    value={categories}/>

                    <Button 
                        onClick={() => {onClick({name:title, ingredients, steps, categories});clearFormAndRetract()}} 
                        text='Postar' 
                        style={{marginTop:10, alignSelf:'flex-end'}}
                    />
            </div>
        </div>
    )
}