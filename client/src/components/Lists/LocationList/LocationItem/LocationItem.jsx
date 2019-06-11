import React from 'react';
import styles from './LocationItem.css';
import { Icon } from 'antd';
import { withRouter } from "react-router"

const locationItem = ({info, history}) => {
    const onClickHandler = () => {
        const queryString = `id=${encodeURIComponent(info.pharmacyStoreId)}`;
        history.push({
            pathname: '/store',
            search: '?' + queryString,
        });
    }

    return(
    <li className={styles.LocationItem}>
        <div className={styles.Info}><span>{info.address}</span></div>
        <div className={styles.Info}><span>{info.distance} km</span></div>
        <div className={styles.Info}><span>{info.openingHours}</span></div>
        <div className={styles.Info}><span>tel. {info.phone}</span></div>
        <button className={styles.Button} onClick={onClickHandler}><Icon type="environment" theme="filled" />Mapa</button>
        <button className={styles.Button} onClick={onClickHandler}><Icon type="info-circle" theme="filled" />Szczegóły</button>
    </li>
)};

export const LocationItem = withRouter(locationItem);
