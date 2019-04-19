import React from 'react';
import { Card } from '../../components/Card/Card';
import styles from './DrugList.css';

export class DrugList extends React.Component {
    render() {
        return (
            <div className={styles.DrugList}>
                <Card>DrugList</Card>
            </div>
        );
    }
}