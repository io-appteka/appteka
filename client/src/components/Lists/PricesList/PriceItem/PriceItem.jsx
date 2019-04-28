import React from 'react';
import styles from './PriceItem.css';
import { Icon } from 'antd';
import { NavLink } from 'react-router-dom';

export class PriceItem extends React.Component {
    state = {
        isOpened: false,
    };

    clickHandler = () => {
        const opened = this.state.isOpened;
        this.setState({isOpened: !opened});
    };

    //zglos inna cene - nawigacja czy popup z fromularzem
    render(){
        const { pharmacyName, price } = this.props;
        const { isOpened } = this.state;
        return (
            <li className={styles.PriceItem} onClick={this.clickHandler}>
                <div className={styles.FlexBox}>
                    <div className={styles.PharmacyName}>{pharmacyName}</div>
                    <div className={styles.Price}>{price}<small> zł</small></div>
                </div>
                <div className={styles.FlexBox}>
                    <div className={styles.Locations}>lokalizacje{isOpened ? <Icon type="up"/> : <Icon type="down"/>}</div>
                    <NavLink className={styles.ReportLink} to='/report'>zgłoś inną cenę</NavLink>
                </div>
                {isOpened && <div>Opened</div>}
            </li>
        );
    };
};