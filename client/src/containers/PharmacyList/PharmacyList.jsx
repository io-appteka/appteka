import React from 'react';
import { Card } from '../../components/Card/Card';
import styles from './PharmacyList.css';
import { PharmacyList as Pharmacies } from'../../components/Lists/PharmacyList/PharmacyList';
import axios from 'axios';

export class PharmacyList extends React.Component {
    state = {
        pharmacyList: [],
        isLoaded: false,
    }

    componentDidMount() {
        axios.get('https://apteka.azurewebsites.net/api/pharmacystores/all').then((response) => {
            const { data } = response;
            this.setState({pharmacyList: data.map(pharmacy => ({
                distance: pharmacy.distance,
                pharmacyChainId: pharmacy.id,
                pharmacyName: pharmacy.pharmacyName,
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
            <div className={styles.PharmacyList}>
                <Card type='higher'>
                    {this.state.isLoaded && <Pharmacies data={this.state.pharmacyList}/>}
                </Card>
            </div>
        );
    }
}