import React from 'react';
import { Card } from '../../components/Card/Card';
import styles from './PharmacyList.css';

export class PharmacyList extends React.Component {
    render() {
        return (
            <div className={styles.PharmacyList}>
                <Card type='higher'>PharmacyList</Card>
            </div>
        );
    }
}