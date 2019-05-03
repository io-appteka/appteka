import React from 'react';
import styles from './LocationList.css';
import { LocationItem } from './LocationItem/LocationItem';

export const LocationList = ({locations}) => (
    <ul className={styles.LocationList}>
        {locations.map(location => <LocationItem key={location.pharmacyStoreId} info={location}/>)}
    </ul>
);