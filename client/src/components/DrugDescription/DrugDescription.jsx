import React from 'react';
import styles from './DrugDescription.css';

export const DrugDescription = ({drugInfo}) => (
    <div className={styles.DrugDescription}>
        <h1>{drugInfo.name}</h1>
        <p>{drugInfo.desc}</p>
    </div>
);