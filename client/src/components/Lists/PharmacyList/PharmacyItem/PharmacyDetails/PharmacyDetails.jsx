import React from 'react';
import styles from './PharmacyDetails.css';

export const PharmacyDetails = ({info}) => {

    return(
    <div className={styles.PharmacyDetails}>
        <div className={styles.Info}><span>{info.address}</span></div>
        <div className={styles.Info}><span>{info.openingHours}</span></div>
        <div className={styles.Info}><span>tel. {info.phone}</span></div>
    </div>
)};
