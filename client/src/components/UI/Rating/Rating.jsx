import React from 'react';
import { Rate } from 'antd';
import styles from './Rating.css';

export const Rating = ({value, color, disabled=true, ...other}) => (
    <div className={styles.Rating}>
        <Rate prefixCls={'index__ant-rate'} disabled={disabled} allowHalf value={value} style={{color: color}}
        {...other}/>
    </div>
);
