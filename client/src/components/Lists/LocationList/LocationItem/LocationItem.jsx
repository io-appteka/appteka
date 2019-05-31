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
        <Icon type="environment" />
        <div className={styles.Address}><span>{info.address}</span></div>
        <div className={styles.Distance}><span>{info.distance} km</span></div>
        <button className={styles.Link} onClick={onClickHandler}>Pokaż na mapie</button>
    </li>
)};

export const LocationItem = withRouter(locationItem);
