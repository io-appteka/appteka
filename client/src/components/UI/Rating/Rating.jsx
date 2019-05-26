import React from 'react';
import { Rate } from 'antd';
import styles from './Rating.css';

export const Rating = ({value, color}) => (
    <div className={styles.Rating}>
        <Rate prefixCls={'index__ant-rate'} disabled allowHalf defaultValue={0} value={value} style={{color: color}}/>
    </div>
);
