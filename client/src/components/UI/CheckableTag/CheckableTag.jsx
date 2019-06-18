import React from 'react';
import styles from './CheckableTag.css';
import { Tag } from 'antd';

const AntCheckableTag = Tag.CheckableTag;

export const CheckableTag = ({children, checked, onClick, ...other}) => (
    <div className={styles.CheckableTag}>
        <AntCheckableTag
            prefixCls={'index__ant-tag'}
            style={{color : checked ? '#ffffff' : '#29BDAF', background : checked ? '#29BDAF' : '#ffffff'}} 
            {...other}
            checked={checked}
            onChange={onClick}
        >
        {children}</AntCheckableTag>
    </div>
);
