import React from 'react';
import styles from './Card.css';

export const Card = ({children}) => (
    <div className={styles.Card}>
        {children}
    </div>
);