import React from 'react';
import styles from './BaseCard.module.scss'

interface Props{
    title: string;
    children?: React.ReactNode
    flexDirection?: 'row' | 'row-reverse' | 'column' | 'column-reverse',
    flexWrap?: 'nowrap' | 'wrap' | 'wrap-reverse'
}

export default function BaseCard({title, children, flexDirection, flexWrap}:Props){
    return(
        <section className={styles.content}>

            <h3 className={styles.title}>
                {title + ` (${React.Children.count(children)})`}
            </h3>

            <section 
                className={styles.container} 
                style={{
                    flexDirection:flexDirection || 'column', 
                    flexWrap: flexWrap || 'nowrap'
                }}>
                    {children}
            </section>

        </section>
    )
}