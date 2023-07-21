import { hover } from '@testing-library/user-event/dist/hover'
import styles from './Button.module.scss'

interface Props{
    text: string;
    style?: React.CSSProperties;
    textStyle?: React.CSSProperties;
    onClick: () => void
}

export default function Button({text, style, textStyle, onClick}:Props){
    return(
        <button className={styles.button} style={style} onClick={onClick}>
            <span className={styles.text} style={textStyle}>{text.toUpperCase()}</span>
        </button>
    )
}