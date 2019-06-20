import React from 'react';
import styles from './PharmacyItem.css';
import { PharmacyDetails } from './PharmacyDetails/PharmacyDetails';
import { Icon } from 'antd';

class PharmacyItem extends React.Component {
    state = {
        modal: {
            show: false,
            loading: false,
        },
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

    render(){
        const { distance, pharmacyName, location } = this.props;
        console.log(this.props);
        
        return (
            <li className={styles.PharmacyItem} onClick={this.clickHandler}>
                <div className={styles.FlexBox}>
                    <div className={styles.PharmacyName}>{pharmacyName}</div>
                    <div>
                        <div className={styles.Price}>{distance}<small> km</small></div>
                        <button className={styles.Button} onClick={this.onClickHandler}><Icon type="environment" theme="filled" />Mapa</button>
                    </div>
                </div>
                <PharmacyDetails info={location}/>
            </li>
        );
    };
};

export default PharmacyItem;