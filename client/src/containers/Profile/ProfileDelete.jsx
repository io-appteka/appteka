import React from 'react';
import { Card } from '../../components/Card/Card';
import { SearchField } from '../../components/UI/Forms/SearchField/SearchField';
import styles from './Profile.css';

export class Profile extends React.Component {

    
    render() {
        return (
           

            <div className={styles.Profile}>
                <div className={styles.ProfileBox}>
                  <div className={styles.grid}>
  <div className={styles.box2}><div className={styles.Username}>Wiesława <span>/ Profil użytkownika</span></div></div>
  <div className={styles.box3}><ul>
                           <li><button>Dane kontaktowe</button></li>
                           <li><button>Opinie</button></li>
                           <li><button>Zmień hasło</button></li>
                           <li><button>Usuń konto</button></li>
                       </ul></div>
                     
  <div className={styles.box4}>
    <h3>Ojejku, smutno nam, że odchodzisz</h3>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas fringilla, velit ac laoreet pellentesque, magna massa accumsan odio, at mollis elit nibh vel sapien. Ut ac aliquam nibh. Duis non massa lobortis, dignissim purus et, sagittis dui.</p>
    <input type="submit" value="Usuń konto"></input>
  </div>
                      
</div>
                </div></div>
            
        );
    }
}
