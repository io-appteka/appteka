import React from 'react';
import styles from './Opinion.css';
import { Icon } from 'antd';
import { withRouter } from "react-router"

const opinion = ({info, history}) => {
    const onClickHandler = () => {
        const queryString = `id=${encodeURIComponent(info.pharmacyStoreId)}`;
        history.push({
            pathname: '/store',
            search: '?' + queryString,
        });
    }

    return(
    <li className={styles.Opinion}>
        <Icon type="environment" />
        <div className={styles.Address}><span>{info.address}</span></div>
        <div className={styles.Distance}><span>{info.distance} km</span></div>
        <button className={styles.Link} onClick={onClickHandler}>Dodaj opinię</button>
    </li>
)};

export const Opinion = withRouter(opinion);