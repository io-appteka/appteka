import React from 'react';
import { Card } from '../../components/Card/Card';
import styles from './ProfileDelete.css';

export class ProfileDelete extends React.Component {
    render() {
        return (
            <div className={styles.ProfileDelete}>

    <h3>Ojejku, smutno nam, że odchodzisz</h3>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas fringilla, velit ac laoreet pellentesque, magna massa accumsan odio, at mollis elit nibh vel sapien. Ut ac aliquam nibh. Duis non massa lobortis, dignissim purus et, sagittis dui.</p>
    <input type="submit" value="Usuń konto"></input>
  </div>
        
        );
    }
}
