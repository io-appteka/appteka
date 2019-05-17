import React from 'react';
import styles from './Description.css';
import {Rating} from '../UI/Rating/Rating';
import {Tag} from '../UI/Tag/Tag';

export const Description = ({drugInfo, tags}) => (
    <div className={styles.Description}>
        <img src={drugInfo.image} alt="Drug"/>
        <h1>{drugInfo.name}</h1>

        <Rating value={drugInfo.rating}/>
        <span>{drugInfo.rating}</span>
        <span>({drugInfo.opinionsNumber} opinions)</span>

        <p>{drugInfo.desc}</p>
        {tags.map(tag => <Tag key={tag}>tag</Tag>)}
    </div>
);
