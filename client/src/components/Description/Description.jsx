import React from 'react';
import styles from './Description.css';
import {Rating} from '../UI/Rating/Rating';
import {Tag} from '../UI/Tag/Tag';

export const Description = ({drugInfo, tags}) => (
    <div className={styles.Description}>
        <img src={drugInfo.image && require("../../media/" + drugInfo.image)} alt="Drug"/>
        <div className={styles.DescriptionContent}>
            <h1>{drugInfo.name}</h1>

            <Rating value={drugInfo.rating} color={'#77D9EE'}/>
            <span>{drugInfo.rating}</span>
            <span>({drugInfo.opinionsNumber} opinii)</span>

            <p>{drugInfo.desc}</p>
            <div className={styles.Tags}>
                {tags && tags.map(tag => <Tag key={tag}>{tag}</Tag>)}
            </div>
        </div>
    </div>
);
