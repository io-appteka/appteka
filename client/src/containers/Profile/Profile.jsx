import React from 'react';
import { Card } from '../../components/Card/Card';
import styles from './Profile.css';

export class Profile extends React.Component {
    render() {
        return (
            <div className={styles.Profile}>
                <div className={styles.ProfileBox}>profile</div>
            </div>
        );
    }
}
