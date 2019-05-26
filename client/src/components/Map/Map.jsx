import React from 'react';
import styles from './Map.css';
import GoogleMapReact from 'google-map-react';
import Marker from 'google-map-react';

const MapPointer = ({ text }) => <div>{text}</div>;
const defaultOptions = {
    styles: [styles.Map],
    mapTypeControl: false,
    zoomControl: true,
    streetViewControl: true,
    draggableCursor: 'default',
    draggingCursor: 'move'
};
export class Map extends React.Component {

    static defaultProps = {
        center: {
            lat: 59.95,
            lng: 30.33
        },
        zoom: 11
    };

    render() {
        return (
            <div className={styles.Map}>
                <GoogleMapReact
                    defaultOptions={defaultOptions}
                    options={defaultOptions}
                    bootstrapURLKeys={{ key: 'AIzaSyD_mCIprOJMABm_0bReqkVFGr2cOxO2Jx4'/*'AIzaSyAHbKWGMwqv0GJhaVj1XKMXFZeLdzzXK'*/ }}
                    defaultCenter={this.props.center}
                    defaultZoom={this.props.zoom}
                >
                    <MapPointer
                        lat={59.955413}
                        lng={30.337844}
                        text="My Marker"
                    />
                </GoogleMapReact>
            </div>
        );
    }
}

// export const Map = ({children}) => (
//     <div className={styles.Map}>
//         {children}
//     </div>
// );

// function initMap() {
//     // The location of Uluru
//     var uluru = {lat: -25.344, lng: 131.036};
//     // The map, centered at Uluru
//     var map = new google.maps.Map(
//         document.getElementById('map'), {zoom: 4, center: uluru});
//     // The marker, positioned at Uluru
//     var marker = new google.maps.Marker({position: uluru, map: map});
// }

// export class Map extends React.Component {
//     render() {
//         return (
//             <div id={map} className={styles.Map}>
//                 <script async defer
//                         src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAHbKWGMwqv0GJhaVj1XKMXFZeLdzzXK&callback=initMap">
//                 </script>
//             </div>
//         );
//     }
// }