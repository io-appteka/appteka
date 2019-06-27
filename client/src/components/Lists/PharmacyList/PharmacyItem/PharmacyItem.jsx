import React from 'react';
import styles from './PharmacyItem.css';
import { PharmacyDetails } from './PharmacyDetails/PharmacyDetails';
import { Icon } from 'antd';
import { Map } from '../../../Map/Map';

class PharmacyItem extends React.Component {
    state = {
        modal: {
            show: false,
            loading: false,
        },
        show: false,
    };
    
    onClickHandler = () => {}


    onCancelHandler = (event) => {
        event.stopPropagation();
        this.setState({modal: {loading: false, show: false}});
    }

    onOkHandler = (event) => {
        event.stopPropagation();
        this.setState({modal: {loading: false, show: false}});
    }

    onClickHandler = () => {
        this.setState(prevState => ({show: !prevState.show}));
    };

    render(){
        const { distance, pharmacyName, location, coordinates } = this.props;
        
        return (
            <li className={styles.PharmacyItem} onClick={this.clickHandler}>
                <div className={styles.FlexBox}>
                    <div className={styles.PharmacyName}>{pharmacyName}</div>
                    <div>
                        <div className={styles.Price}>{distance}<small> km</small></div>
                        <button className={styles.Button} onClick={this.onClickHandler}><Icon type="environment" theme="filled" />Mapa</button>
                        <Map show={this.state.show} cords={coordinates} onExit={this.onClickHandler}/>
                    </div>
                </div>
                <PharmacyDetails info={location}/>
            </li>
        );
    };
};

export default PharmacyItem;