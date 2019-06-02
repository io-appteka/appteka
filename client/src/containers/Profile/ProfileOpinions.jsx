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
      <div className={styles.OpinionBox}>
          <h6>12.03.2019</h6>
          <h3>Prednizon</h3>
          <p>Zamówiłam 3 burgery- z wołowiną kurczakiem i vege ale wszystkie dostarczone były z wołowiną. Jako że nie jem mięsa trudno ocenić smak bo na obiad jadłam samą bułkę ale podobno te z mięsem były smaczne</p>
      </div>
      <div className={styles.OpinionBox}>
          <h6>08.11.2018</h6>
          <h3>Prednizon 2</h3>
      </div>
      <div className={styles.OpinionBox}>
          <h6>16.10.2018</h6>
          <h3>Strepsils intensive</h3>
      </div>
      <div className={styles.OpinionBox}>
          <h6>02.01.2018</h6>
          <h3>Amoxicillin</h3>
          <p>Zamówiłam 3 burgery- z wołowiną kurczakiem i vege ale wszystkie dostarczone były z wołowiną. Jako że nie jem mięsa trudno ocenić smak bo na obiad jadłam samą bułkę ale podobno te z mięsem były smaczne</p>
      </div>
  </div>
</div>
                </div></div>
            
        );
    }
}
