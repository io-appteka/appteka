import React from 'react';
import styles from './PriceItem.css';
import { connect } from 'react-redux';
import * as actions from '../../../../store/actions/index';
import { Icon } from 'antd';
import { LocationList } from '../../LocationList/LocationList';
import { ReportPrice } from './ReportPrice/ReportPrice';

class PriceItem extends React.Component {
    state = {
        isOpened: false,
        modal: {
            show: false,
            loading: false,
        },
    };

    clickHandler = () => {
        const opened = this.state.isOpened;
        this.setState({isOpened: !opened});
    };

    //zglos inna cene - nawigacja czy popup z fromularzem
    reportHandler = (event) => {
        event.stopPropagation();
        this.setState({modal : {loading: false, show : true}});
    }

    onCancelHandler = (event) => {
        event.stopPropagation();
        this.setState({modal: {loading: false, show: false}});
    }

    onOkHandler = (event) => {
        event.stopPropagation();
        this.setState({modal: {loading: false, show: false}});
    }

    render(){
        const { pharmacyName, price, locations, drugName, isAuthenticated } = this.props;
        const { isOpened } = this.state;
        let dropdown = null;
        if (isOpened) {
            dropdown = <LocationList locations={locations}/>
        }

        return (
            <li className={styles.PriceItem}>
                <div className={styles.FlexBox}>
                    <div className={styles.PharmacyName}>{pharmacyName}</div>
                    <div className={styles.Price}>{price}<small> zł</small></div>
                </div>
                <div className={styles.FlexBox}>
                    <div className={styles.Locations} onClick={this.clickHandler}>lokalizacje{isOpened ? <Icon type="up"/> : <Icon type="down"/>}</div>
                    {isAuthenticated && <button className={styles.ReportLink} 
                    onClick={this.reportHandler}>
                        zgłoś inną cenę</button>}
                </div>
                {dropdown}
                <ReportPrice
                modal={this.state.modal}
                onCancelHandler={this.onCancelHandler}
                onOkHandler={this.onOkHandler}
                price={price}
                title={<p>Zgłoś inną cenę produktu <strong>{drugName}</strong> w aptece <strong>{pharmacyName}</strong></p>}
                />
            </li>
        );
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onSetRedirectPath: (path) => dispatch(actions.setAuthRedirectPath(path)),
    };
};

const mapStateToProps = state => {
    return {
        isAuthenticated: state.auth.token !== null,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(PriceItem);