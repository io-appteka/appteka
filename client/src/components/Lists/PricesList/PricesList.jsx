import React from 'react';
import styles from './PricesList.css';
import PriceItem from './PriceItem/PriceItem';
import { Icon } from 'antd';

export class PricesList extends React.Component {
    state = {
        prices: [],
        mode: 'highest',
    };

    componentDidMount() {
        this.sortByPrice(this.props.data);
    };

    sortByPrice = (prices) => {
        const { mode } = this.state;
        const sortedPrices = prices.sort((firstPrice, secondPrice) => {
            if (mode === 'highest') return firstPrice.price - secondPrice.price;
            else if (mode === 'lowest') return secondPrice.price - firstPrice.price;
            else return 0;
            });
        this.setState({prices: sortedPrices});
    };

    toggleSortingMode = () => {
        const { mode } = this.state;
        if (mode === 'highest')
            this.setState({mode: 'lowest'},() => this.sortByPrice(this.props.data));
        else
            this.setState({mode: 'highest'},() => this.sortByPrice(this.props.data));
    };

    render() {
        return (
            <div>
                <div className={styles.FlexBox}>
                    <div>
                        <b>{this.props.data.length} </b>
                        {this.props.data.length === 1 && <span> sieć aptek sprzedaje ten produkt </span>}
                        {this.props.data.length > 1 && this.props.data.length < 5 && <span> sieci aptek sprzedają ten produkt </span>}
                        {this.props.data.length >= 5 && <span> sieci aptek sprzedaje ten produkt</span>}
                    </div>
                    <div className={styles.Sort}>
                        Sortuj według:<button onClick={this.toggleSortingMode} className={styles.SortButton}>
                            {this.state.mode === 'highest'
                            ? (<span>CENA ROSNĄCO <Icon type="arrow-up"/></span>)
                            : (<span>CENA MALEJĄCO <Icon type="arrow-down"/></span>)}</button>
                    </div>
                </div>
                <ul className={styles.PricesList}>
                    {this.props.data.map(item => (
                        <PriceItem
                            drugName={this.props.name}
                            key={item.pharmacyChainId}
                            pharmacyName={item.pharmacyName}
                            price={item.price}
                            locations={item.locations}/>))}
                </ul>
            </div>
        )
    }
}
