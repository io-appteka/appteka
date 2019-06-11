import React from 'react';
import styles from './ProfileOpinions.css';
import { Opinion } from '../../components/Opinions/Opinion/Opinion';

export class ProfileOpinions extends React.Component {
    
    
    render() {
        return (
<div className={styles.ProfileOpinions}>
     <div className={styles.OpinionBox}>
          <h3>Amoxicillin</h3>
          <Opinion date='02.01.2018' text='Jakas opinia, nie wazne jaka, proszę scrollować dalej' rating="2.5"/>
</div>
      <div className={styles.OpinionBox}>
        <h3>Prednizon</h3>
          <Opinion date='12.05.2019' text='Zamówiłam 3 burgery- z wołowiną kurczakiem i vege ale wszystkie dostarczone były z wołowiną. Jako że nie jem mięsa trudno ocenić smak bo na obiad jadłam samą bułkę ale podobno te z mięsem były smaczne' rating="3"/>
    </div>
      <div className={styles.OpinionBox}>
          <h3>Strepsils intensive</h3>
          <Opinion date='08.11.2018' text='Zamówiłam 3 burgery- z wołowiną kurczakiem i vege ale wszystkie dostarczone były z wołowiną. Jako że nie jem mięsa trudno ocenić smak bo na obiad jadłam samą bułkę ale podobno te z mięsem były smaczne' rating="2.5"/>

            </div>
      <div className={styles.OpinionBox}>
          <h3>No-spa</h3>
          <Opinion date='16.10.2018' text='Zamówiłam 3 burgery- z wołowiną kurczakiem i vege ale wszystkie dostarczone były z wołowiną. Jako że nie jem mięsa trudno ocenić smak bo na obiad jadłam samą bułkę ale podobno te z mięsem były smaczne' rating="4"/>

      </div>
            </div>   
  
                
        );
    }
}
