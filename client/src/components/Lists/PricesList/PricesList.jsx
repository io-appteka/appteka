import React from 'react';
import styles from './PricesList.css';
import { PriceItem } from './PriceItem/PriceItem';

export const PricesList = ({data}) => (
    <ul className={styles.PricesList}>
        {data.map(item => (
            <PriceItem 
                key={item.pharmacyChainId} 
                pharmacyName={item.pharmacyName} 
                price={item.price}
                locations={item.locations}/>))}
    </ul>
);