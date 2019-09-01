import React from 'react';
import { Card } from '../../components/Card/Card';
import styles from './PharmacyList.css';
import { PharmacyList as Pharmacies } from'../../components/Lists/PharmacyList/PharmacyList';
import { SearchField } from '../../components/UI/Forms/SearchField/SearchField';
import axios from 'axios';

export class PharmacyList extends React.Component {
    state = {
        pharmacyList: [],
        isLoaded: false,
    }

    componentDidMount() {
        axios.get('https://localhost:44363/api/pharmacystores/all?location=Krakow').then((response) => {
            const { data } = response;
            this.setState({pharmacyList: data.map(pharmacy => ({
                distance: parseInt(pharmacy.distance)/1000,
                pharmacyChainId: pharmacy.id,
                pharmacyName: pharmacy.pharmacyName,
                coordinates: pharmacy.coordinates,
                location: {
                    address: pharmacy.address,
                    openingHours: pharmacy.openingHours,
                    phone: pharmacy.phoneNumber,
                }
            }))}, () => this.setState({isLoaded: true}));
        })
    }

    render() {
        return (
            <div>
                <div className={styles.Form}>
                    {this.state.isLoaded && <SearchField/>}
                </div>
                <div className={styles.PharmacyList}>
                    <Card type='lower'>
                        {this.state.isLoaded && <Pharmacies data={this.state.pharmacyList}/>}
                    </Card>
                </div>
            </div>
        );
    }
}