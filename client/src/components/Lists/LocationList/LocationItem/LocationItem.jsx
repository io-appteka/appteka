import React from 'react';
import styles from './LocationItem.css';
import { Icon } from 'antd';

export const LocationItem = ({location}) => (
    <li className={styles.LocationItem}>
        <Icon type="environment" />
        <div className={styles.Address}><span>{location.address}</span></div>
        <div className={styles.Distance}>{location.distance} km</div>
    </li>
);