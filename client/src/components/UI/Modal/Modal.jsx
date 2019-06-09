import React from 'react';
import styles from './Modal.css';

import { Modal as AntModal} from 'antd';
export const Modal = ({children, ...other}) => (
    <AntModal
    prefixCls={'index__ant-modal'} 
    className={styles.Modal} 
    {...other}>
        {children}
    </AntModal>
);