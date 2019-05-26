import React from 'react';
import styles from './Opinion.css';
import { Rating } from '../../UI/Rating/Rating';

export const Opinion = ({ author, date, text, rating }) => (
    <li className={styles.Opinion}>
        <div className={styles.Date}>{date}</div>
        <div className={styles.Rating}><Rating value={rating} color={'#FF53BA'}/></div>
        <div className={styles.Author}>{author}</div>
        <div className={styles.FlexBox}>{text}</div>
    </li>
);
