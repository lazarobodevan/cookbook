import styles from './Input.module.scss'

interface Props {
    style?: React.CSSProperties,
    placeholder: string,
    onChange: () => void
}

export default function FormInput({placeholder, onChange, style}:Props){
    return(
        <input 
            className={styles.input}
            placeholder={placeholder} 
            onChange={onChange}
            style={style}
        />
    )
}