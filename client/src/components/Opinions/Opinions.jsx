import React from 'react';
import styles from './Opinions.css';
import { Opinion } from './Opinion/Opinion';

export const Opinions = ({opinions}) => (
    <ul className={styles.Opinions}>
        {opinions.map(opinion => <Opinion key={opinion.pharmacyStoreId} info={opinion}/>)}
    </ul>
);