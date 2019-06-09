import React from 'react';
import styles from './PricesList.css';
import PriceItem from './PriceItem/PriceItem';

export const PricesList = ({data, name}) => (
    <ul className={styles.PricesList}>
        {data.map(item => (
            <PriceItem 
                drugName={name}
                key={item.pharmacyChainId} 
                pharmacyName={item.pharmacyName} 
                price={item.price}
                locations={item.locations}/>))}
    </ul>
);