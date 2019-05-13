import React from 'react';
import styles from './DrugDescription.css';
import { Tag } from '../UI/Tag/Tag';

export const DrugDescription = ({drugInfo}) => (
    <div className={styles.DrugDescription}>
        <h1>{drugInfo.name}</h1>
        <p>{drugInfo.desc}</p>
        <Tag>Na katar</Tag><Tag>Na kaszel</Tag>
    </div>
);