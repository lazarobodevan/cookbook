import { ChangeEvent } from 'react'
import styles from './Input.module.scss'

interface Props {
    style?: React.CSSProperties,
    placeholder: string,
    type?: string,
    onChange: (event:any) => void
}

export default function FormInput({placeholder, onChange, style, type}:Props){
    return(
        <input 
            style={style}
            className={styles.input}
            placeholder={placeholder} 
            onChange={onChange}
            type={type || 'text'}
            
        />
    )
}