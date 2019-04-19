import React from 'react';
import styles from './SearchField.css';
import { Input, Button } from 'antd';

export const SearchField = ({drug, location}) => {
    console.log(drug);
    return (
    <div className={styles.SearchField}>
        <Input value={drug}/>
        <Input value={location}/>
        <Button>search</Button>
    </div>
    );
}