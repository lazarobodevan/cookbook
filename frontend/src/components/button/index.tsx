import { hover } from '@testing-library/user-event/dist/hover'
import styles from './Button.module.scss'

interface Props{
    text: string,
    style?: React.CSSProperties
    onClick: () => void
}

export default function Button({text, style, onClick}:Props){
    return(
        <button className={styles.button} style={style} onClick={onClick}>
            <span className={styles.text}>{text.toUpperCase()}</span>
        </button>
    )
}