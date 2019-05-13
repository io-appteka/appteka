import React from 'react';
import styles from './Tag.css';
import { Tag as AntTag } from 'antd';

export const Tag = ({children, onClick, ...other}) => (
    <div className={styles.Tag}>
        <AntTag prefixCls={'index__ant-tag'} {...other} onClose={onClick}>{children}</AntTag>
    </div>
);