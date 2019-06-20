import React from 'react';
import styles from './LocationItem.css';
import {Icon} from 'antd';
import {withRouter} from "react-router";
import {Map} from "../../../Map/Map";

const locationItem = ({info}) => {
    const [show, setShow] = React.useState(false);

    const onClickHandler = () => {
        setShow(!show);
    };

    return (
        <li className={styles.LocationItem}>
            <div className={styles.Info}><span>{info.address}</span></div>
            <div className={styles.Info}><span>{info.distance} km</span></div>
            <div className={styles.Info}><span>{info.openingHours}</span></div>
            <div className={styles.Info}><span>tel. {info.phone}</span></div>
            <button className={styles.Button} onClick={onClickHandler}><Icon type="environment" theme="filled"/>Mapa</button>
            <Map show={show} cords={info.coordinates} onExit={onClickHandler}/>
        </li>
    )
};

export const LocationItem = withRouter(locationItem);
