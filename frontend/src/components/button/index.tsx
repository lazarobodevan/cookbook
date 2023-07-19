import styles from './Button.module.scss'

interface Props{
    text: string,
    style?: React.CSSProperties
}

export default function Button({text, style}:Props){
    return(
        <button className={styles.button} style={style}>
            <span className={styles.text}>{text.toUpperCase()}</span>
        </button>
    )
}