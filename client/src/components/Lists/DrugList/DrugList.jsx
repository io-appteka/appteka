import React from 'react';
import styles from './DrugList.css';
import { DrugItem } from './DrugItem/DrugItem';

export const DrugList = ({drugs}) => (
    <ul className={styles.DrugList}>
        {drugs && drugs.map(drug => (
            <DrugItem
                key={drug.name}
                drug={drug}
                tags={drug.tags}
            />))}
    </ul>
);
