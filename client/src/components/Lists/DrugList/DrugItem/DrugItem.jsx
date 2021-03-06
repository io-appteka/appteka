import React from 'react';
import styles from './DrugItem.css';
import {Rating} from '../../../UI/Rating/Rating';
import {Tag} from '../../../UI/Tag/Tag';

export const DrugItem = ({drug, tags}) => (
    <li className={styles.DrugItem}>
        <img src={drug.image && require("../../../../media/" + drug.image)} alt="Drug"/>
        <div className={styles.DescriptionContent}>
            <h1>{drug.name}</h1>
            <div className={styles.Rating}>
                <Rating value={drug.rating} color={'#22C7B7'}/>
                <span>{drug.rating.toFixed(1)}</span>
                <span>({drug.opinionsNumber} opinii)</span>
            </div>
            <p>{drug.desc}</p>
            <div className={styles.Tags}>
                {tags && tags.map(tag => <Tag key={tag}>{tag}</Tag>)}
            </div>
        </div>
    </li>
);
