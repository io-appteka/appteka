import React from 'react';
import { Card } from '../../components/Card/Card';
import styles from './PharmacyList.css';
import { PharmacyList as Pharmacies } from'../../components/Lists/PharmacyList/PharmacyList';
export class PharmacyList extends React.Component {
    state = {
        pharmacyList: [],
        isLoaded: false,
    }

    componentDidMount() {
        this.setState({pharmacyList: [
            {
                distance: 1,
                pharmacyChainId: 1,
                pharmacyName: 'Słoneczna',
                location: {
                    address: 'ulica Grzegórzecka 12',
                    openingHours: '10:00 - 15:00',
                    phone: '2312312312',
                },
            },
            {
                distance: 2,
                pharmacyChainId: 2,
                pharmacyName: 'Ziko',
                location: {
                    address: 'Aleja słoneczna 12',
                    openingHours: '10:00 - 15:00',
                    phone: '2312312312',
                },
            },
        ]}, () => this.setState({isLoaded: true}))
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