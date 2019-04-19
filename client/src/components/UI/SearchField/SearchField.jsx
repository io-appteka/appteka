import React from 'react';
import styles from './SearchField.css';
import { Input, Button } from 'antd';

export const SearchField = ({drug, location}) => {
    //TODO: add onClickHandler and inputs validation
    return (
    <div className={styles.SearchField}>
        <Input defaultValue={drug}/>
        <Input defaultValue={location}/>
        <Button>search</Button>
    </div>
    );
}