import React from 'react';
import styles from './styles.module.css';

export default function Footer() {
    return (
        <div className={styles.footerContainer}>
            <div className={styles.footer}>
                <p className={styles.footerHeader}><b>IJsclub Lageland-Hamweg</b></p>
                <p className={styles.footerItem}>Buitenbaan 15a</p>
                <p className={styles.footerItem}>Lageland</p>
                <p className={styles.footerItem}>ijsclub-lageland@hotmail.nl</p>
            </div>
        </div>
        // <div></div>
    );
}
