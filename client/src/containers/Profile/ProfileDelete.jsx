import React from 'react';
import styles from './ProfileDelete.css';

export class ProfileDelete extends React.Component {
    render() {
        return (
            <div className={styles.ProfileDelete}>
                <h3>Przykro nam, że odchodzisz</h3>
                <p>Pamiętaj, że usunięcia konta nie można cofnąć.</p>
                <input type="submit" value="Usuń konto"></input>
            </div>
        );
    }
}
