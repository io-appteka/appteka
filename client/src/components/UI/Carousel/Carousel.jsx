import React from 'react';
import styles from './Carousel.css';
import { Pagination } from 'antd'; 

export const Carousel = ({...other}) => (
    <div className={styles.Carousel}>
        <Pagination defaultCurrent={1} prefixCls='index__ant-pagination' {...other}/>
    </div>
);