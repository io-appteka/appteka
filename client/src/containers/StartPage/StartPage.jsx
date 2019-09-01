import React from 'react';
import styles from './StartPage.css';
import { MultiSelect } from '../../components/UI/MultiSelect/MultiSelect';
import graphic from '../../media/main-page-graphic.png';
import axios from 'axios';

export class StartPage extends React.Component {
    state = {
        drugList: [],
    }

    componentDidMount() {
        axios.get('https://localhost:44363/api/drugs/all').then((response) => {
            this.setState({
                drugList: response.data.map(item => ({
                    id: item.id,
                    name: item.name,
                }))
            });
        });
        // drugList: ["Acenol", "Acenol forte", "Aglan 15", "Aleve", "Alka-Prim", "Alka-Seltzer", "Amol", "Anapran Neo", "Antidol 15", "Apap Extra", "Apap Noc", "Apap, tabletki powlekane", "Aprofen", "Aspicam", "Aspirin", "Activ", "Aulin saszetki", "Aulin tabletki", "Bi-Profenid", "Cefalgin",  "Codipar", "Codipar 250, -500", "Dexak", "Dexak SL", "Dicloberl retard", "Doreta", "Efferalgan czopki", "Efferalgan tabletki", "Efferalgan", "Vitamin C", "Epiduo", "Erka", "Etopiryna", "Etopiryna Kontrol", "Gemipar 50, -125, -500", "Ibalgin", "Ibufen Forte", "Ibufen Total", "Ibufen zawiesina", "Ibum", "Ibum Forte", "Ibupar", "Ibuprofen Aflofarm", "Ibuprofen Pabi", "Ibuprom", "IBUPROM MAX", "Ketonal forte", "Kidofen duo", "Kodeina", "Kofepar", "Kopiryna", "Malupar 125, -250, -500", "Metafen", "MIG", "Migea", "Movalis", "Nalgesin", "Natrax 100, -200", "Nimesil", "Padolten", "Panadol", "Panadol dla dzieci"]
 
    }

    clickHandler = (value) => {
        const { history } = this.props;
        // search propably with query parameters 
        // query params will be handled in ComponentDidMount in 
        //component attached to the listing route
        // via this.props.location.search
        //then: connection to the server via axios
        if (value.length !== 0) {
            const values = value.join(',');
            const queryString = `drug=${encodeURIComponent(values)}&location=Kraków`;
            history.push({
                pathname: '/listing',
                search: '?' + queryString,
            });
        }
    }

    render() {
        return(
            <div className={styles.MainPage}>
                <img className={styles.Graphic} src={graphic} alt="pharmacy buildings"/>
                <div className={styles.Header}>Znajdź najtańsze leki w swojej okolicy!</div>
                <div className={styles.SmallHeader}>Musisz zrealizować receptę, ale Twoje kieszenie są puste? Nie martw się, dzięki naszej aplikacji znajdziesz leki w najniższych cenach. Wystarczy, że wpiszesz, czego szukasz do wyszukiwarki poniżej.</div>
            <MultiSelect
                placeholder='Wpisz nazwę leku, apteki lub dolegliwości'
                data={this.state.drugList}
                onClick={this.clickHandler}
            />
            </div>
        );
    }
}
