import React from 'react';
import styles from './StartPage.css';
import { FirstSearch } from '../../components/UI/Forms/FirstSearch/FirstSearch';

export class StartPage extends React.Component {
    state = {
        drugList: [],
    }

    componentDidMount() {
        //fetching data from server
        //list of all drug names 
        this.setState({
            drugList: ["Acenol", "Acenol forte", "Aglan 15", "Aleve", "Alka-Prim", "Alka-Seltzer", "Amol", "Anapran Neo", "Antidol 15", "Apap Extra", "Apap Noc", "Apap, tabletki powlekane", "Aprofen", "Aspicam", "Aspirin", "Activ", "Aulin saszetki", "Aulin tabletki", "Bi-Profenid", "Cefalgin",  "Codipar", "Codipar 250, -500", "Dexak", "Dexak SL", "Dicloberl retard", "Doreta", "Efferalgan czopki", "Efferalgan tabletki", "Efferalgan", "Vitamin C", "Epiduo", "Erka", "Etopiryna", "Etopiryna Kontrol", "Gemipar 50, -125, -500", "Ibalgin", "Ibufen Forte", "Ibufen Total", "Ibufen zawiesina", "Ibum", "Ibum Forte", "Ibupar", "Ibuprofen Aflofarm", "Ibuprofen Pabi", "Ibuprom", "IBUPROM MAX", "Ketonal forte", "Kidofen duo", "Kodeina", "Kofepar", "Kopiryna", "Malupar 125, -250, -500", "Metafen", "MIG", "Migea", "Movalis", "Nalgesin", "Natrax 100, -200", "Nimesil", "Padolten", "Panadol", "Panadol dla dzieci"]
        })
    }

    clickHandler = (value) => {
        const { history } = this.props;
        // search propably with query parameters 
        // query params will be handled in ComponentDidMount in 
        //component attached to the listing route
        // via this.props.location.search
        //then: connection to the server via axios
        if (value !== '') {
            const queryString = `drug=${encodeURIComponent(value)}&location=Kraków`;
            history.push({
                pathname: '/listing',
                search: '?' + queryString,
            });
        }
    }

    render() {
        return(
            <div className={styles.MainPage}>
                <div className={styles.Header}>No more overpriced meds, find them cheap nearby</div>
                <div className={styles.SmallHeader}>Let's try to bring something which is not mixed with the world</div>
            <FirstSearch
                data={this.state.drugList}
                onClick={this.clickHandler}
            />
            </div>
        );
    }
}