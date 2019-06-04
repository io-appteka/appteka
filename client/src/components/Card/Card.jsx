import React from 'react';
import styles from './Card.css';

export const Card = ({children, type = 'lower'}) => (
    <div className={[styles.Card, type].join(' ')}>
        {children}
    </div>
);