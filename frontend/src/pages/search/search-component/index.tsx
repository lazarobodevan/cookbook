import Button from '../../../components/button'
import styles from './SearchComponent.module.scss'

export default function SearchComponent(){
    return(
        <div className={styles.search}>
            <input 
                placeholder='Pesquisar...'
                style={{gridArea:'inp', marginRight:'10px', padding:'10px'}}
            />

            <div  style={{gridArea:'chk'}} className={styles.wrapper}>
                <input 
                    type='checkbox' 
                    name='category' 
                    style={{gridArea:'chk'}} 
                    className={styles.chkbox}
                />
                <label >Categoria</label>
            </div>
            <div style={{gridArea:'chk2'}} className={styles.wrapper}>
                <input 
                    type='checkbox' 
                    name='ingredient' 
                    style={{gridArea:'chk2'}} 
                    className={styles.chkbox}
                />
                <label >Ingrediente</label>
            </div>

            <Button 
                onClick={()=>{return}} 
                text='Buscar' 
                textStyle={{fontSize:'14px'}} 
                style={{padding:'15px', justifySelf:'center', marginTop:'10px'}}
            />
        </div>
    )
}