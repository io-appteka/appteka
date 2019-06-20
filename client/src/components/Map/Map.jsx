import React from 'react';
import styles from './Map.css';
import  GoogleMapReact  from 'google-map-react';
import  Marker  from 'google-maps-react';
import { Modal } from '../UI/Modal/Modal';
import Icon from "antd/es/icon";

const MapPointer = ({x,y}) => <Icon className={styles.MapPointer} type="environment"/>;

const defaultOptions = {
    styles: [styles.Map],
    mapTypeControl: false,
    zoomControl: true,
    streetViewControl: true,
    draggableCursor: 'default',
    draggingCursor: 'move',
};

export const Map = ({show, x, y, onExit}) => {

    const KrakowCoordinates = {
        lat: 50.05,
        lng: 19.95,
    };

    const defaultProps = {
        center: KrakowCoordinates,
        zoom: 12
    };
    console.log("in map:"+show);
    return (
        <Modal
            title="Lokalizacja"
            visible={show}
            onCancel={onExit}
            footer={null}
        >
            <div className={styles.Map}>
                <GoogleMapReact
                    defaultOptions={defaultOptions}
                    options={defaultOptions}
                    bootstrapURLKeys={{ key: 'AIzaSyD_mCIprOJMABm_0bReqkVFGr2cOxO2Jx4' }}
                    defaultCenter={defaultProps.center}
                    defaultZoom={defaultProps.zoom}
                >
                    <MapPointer
                        x={x}
                        y={y}
                    />
                    {/*<Marker*/}
                    {/*lat={19.95}*/}
                    {/*lng={50.05}*/}
                    {/*/>*/}
                </GoogleMapReact>
            </div>
        </Modal>
    );
};