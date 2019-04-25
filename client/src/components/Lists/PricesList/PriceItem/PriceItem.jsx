import React from 'react';
import styles from './PriceItem.css';
import { Icon } from 'antd';

export class PriceItem extends React.Component {
    state = {
        isOpened: false,
    };

    clickHandler = () => {
        const opened = this.state.isOpened;
        this.setState({isOpened: !opened});
    };

    render(){
        const { pharmacyName, price } = this.props;
        const { isOpened } = this.state;
        return (
            <li className={styles.PriceItem} onClick={this.clickHandler}>
                <div style={{alignItems: 'center', display: 'flex', justifyContent: 'space-between'}}>
                    <div className={styles.PharmacyName}>{pharmacyName}</div>
                    <div className={styles.Price}>{price}<small> zł</small></div>
                </div>
                <div className={styles.Locations}>locations{isOpened ? <Icon type="up"/> : <Icon type="down"/>}</div>
                {isOpened && <div>Opened</div>}
            </li>
        );
    };
};