import React from 'react';
import styles from './PharmacyList.css';
import PharmacyItem from './PharmacyItem/PharmacyItem';
import { Icon } from 'antd';

export class PharmacyList extends React.Component {
    state = {
        distances: [],
        mode: 'lowest',
    };

    componentDidMount() {
        this.sortBydistance(this.props.data);
    };

    sortBydistance = (distances) => {
        const { mode } = this.state;
        const sorteddistances = distances.sort((firstdistance, seconddistance) => {
            if (mode === 'highest') return firstdistance.distance - seconddistance.distance;
            else if (mode === 'lowest') return seconddistance.distance - firstdistance.distance;
            else return 0;
            });
        this.setState({distances: sorteddistances});
    };

    toggleSortingMode = () => {
        const { mode } = this.state;
        if (mode === 'highest')
            this.setState({mode: 'lowest'},() => this.sortBydistance(this.props.data));
        else
            this.setState({mode: 'highest'},() => this.sortBydistance(this.props.data));
    };

    render() {
        return (
            <div>
                <div className={styles.Sort}>
                    Sortuj według:<button onClick={this.toggleSortingMode} className={styles.SortButton}>
                        {this.state.mode === 'highest'
                        ? (<span>DYSTANS ROSNĄCO <Icon type="arrow-up"/></span>)
                        : (<span>DYSTANS MALEJĄCO <Icon type="arrow-down"/></span>)}</button>
                </div>
                <ul className={styles.PharmacyList}>
                    {this.props.data.map((item, index) => (
                        <PharmacyItem
                            distance={item.distance}
                            key={index}
                            pharmacyName={item.pharmacyName}
                            coordinates={item.coordinates}
                            location={item.location}/>))}
                </ul>
            </div>
        )
    }
}
