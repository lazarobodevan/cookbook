import { useState } from 'react';
import Button from '../../../components/button'
import styles from './SearchComponent.module.scss'

interface Props{
    onClick: (...params:any) =>void;
}

export default function SearchComponent({onClick}:Props){

    const [search, setSearch] = useState('');
    const [by, setBy] = useState('');

    return(
        <div className={styles.search}>
            <input 
                placeholder='Pesquisar...'
                style={{gridArea:'inp', marginRight:'10px', padding:'10px'}}
                onChange={e => setSearch(e.target.value)}
            />

            <div  style={{gridArea:'chk'}} className={styles.wrapper}>
                <input 
                    type='radio' 
                    name='by' 
                    value='category'
                    id='category'
                    style={{gridArea:'chk'}} 
                    className={styles.chkbox}
                    onChange={e => setBy(e.target.value)}
                />
                <label >Categoria</label>
            </div>
            <div style={{gridArea:'chk2'}} className={styles.wrapper}>
                <input 
                    type='radio' 
                    name='by'
                    value='ingredient'
                    id='ingredient' 
                    style={{gridArea:'chk2'}} 
                    className={styles.chkbox}
                    onChange={e => setBy(e.target.value)}
                />
                <label >Ingrediente</label>
            </div>

            <Button 
                onClick={()=>{onClick({search:search, by: by})}} 
                text='Buscar' 
                textStyle={{fontSize:'14px'}} 
                style={{padding:'15px', justifySelf:'center', marginTop:'10px'}}
            />
        </div>
    )
}