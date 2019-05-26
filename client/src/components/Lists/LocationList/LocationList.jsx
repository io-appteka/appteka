import React from 'react';
import styles from './LocationList.css';
import { LocationItem } from './LocationItem/LocationItem';
import {Map} from "../../Map/Map";

export const LocationList = ({locations}) => (
    <ul className={styles.LocationList}>
        <Map></Map>
        {locations.map(location => <LocationItem key={location.pharmacyStoreId} info={location}/>)}
    </ul>
);