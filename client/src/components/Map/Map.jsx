import React from 'react';
import styles from './Map.css';
import  GoogleMapReact  from 'google-map-react';

const MapPointer = ({ text }) => <div>{text}</div>;
const defaultOptions = {
    styles: [styles.Map],
    mapTypeControl: false,
    zoomControl: true,
    streetViewControl: true,
    draggableCursor: 'default',
    draggingCursor: 'move'
};

const KrakowCoordinates = {
    lat: 50.05,
    lng: 19.95,
}
export class Map extends React.Component {

    static defaultProps = {
        center: KrakowCoordinates,
        zoom: 11
    };

    render() {
        return (
            <div className={styles.Map}>
                <GoogleMapReact
                    defaultOptions={defaultOptions}
                    options={defaultOptions}
                    bootstrapURLKeys={{ key: 'AIzaSyD_mCIprOJMABm_0bReqkVFGr2cOxO2Jx4' }}
                    defaultCenter={this.props.center}
                    defaultZoom={this.props.zoom}
                >
                    {/* <MapPointer
                        lat={50.05}
                        lng={19.95}
                        text="My Marker"
                    /> */}
                </GoogleMapReact>
            </div>
        );
    }
}