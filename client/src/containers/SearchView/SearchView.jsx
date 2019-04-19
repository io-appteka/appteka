import React from 'react';
import { Card } from '../../components/Card/Card';
import styles from './SearchView.css';

export class SearchView extends React.Component {
    render() {
        return (
            <div className={styles.SearchView}>
                <Card>SearchView</Card>
            </div>
        );
    }
}