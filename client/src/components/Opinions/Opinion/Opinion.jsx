import React from 'react';
import styles from './Opinion.css';
import { Rating } from '../../UI/Rating/Rating';

export class Opinion extends React.Component {

    render(){
        const { author, date, text, rating } = this.props;

        return (
            <li className={styles.Opinion}>
                <div className={styles.Date}>{date}</div>
                <div className={styles.Rating}><Rating value={rating}/></div>
                <div className={styles.Author}>{author}</div>
                <div className={styles.FlexBox}>{text}</div>
            </li>
        );
    };
};
