import React from 'react';
import styles from './PriceItem.css';

export const PriceItem = ({pharmacyName, price}) => {
    const clickHandler = () => {
        console.log('Price Item clicked');
    }

    return (
        <li className={styles.PriceItem} onClick={clickHandler}>
            <div style={{alignItems: 'center', display: 'flex', justifyContent: 'space-between'}}>
                <div className={styles.PharmacyName}>{pharmacyName}</div>
                <div className={styles.Price}>{price}<small> zł</small></div>
            </div>
        </li>
    );
};