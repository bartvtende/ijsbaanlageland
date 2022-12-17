import React from 'react';
import {GoogleMap, Marker, StreetViewPanorama, useJsApiLoader} from '@react-google-maps/api';

const containerStyle = {
    width: '100%',
    height: '300px'
};

const center = {
    lat: 53.2350108,
    lng: 6.7121288
};

const position = {
    lat: 53.2344493,
    lng: 6.7130226
};

function Map() {
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "AIzaSyBpSuJjnpTBakBzB0I8cjQEhSuJcW_0on4"
    })

    const [map, setMap] = React.useState(null)

    const onLoad = React.useCallback(function callback(map) {
        // This is just an example of getting and using the map instance!!! don't just blindly copy!
        // const bounds = new window.google.maps.LatLngBounds(center);
        // map.fitBounds(bounds);

        setMap(map)
    }, [])

    const onUnmount = React.useCallback(function callback(map) {
        setMap(null)
    }, [])

    return isLoaded ? (
        <>
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={16}
                onLoad={onLoad}
                onUnmount={onUnmount}>
                <Marker
                    onLoad={onLoad}
                    position={position}
                />
            </GoogleMap>
            <br/>
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={10}
                onLoad={onLoad}
                onUnmount={onUnmount}>

                <StreetViewPanorama
                    options={{pov: {heading: 158.2, pitch: 0}}}
                    position={center}
                    visible={true}
                />
            </GoogleMap>
        </>
    ) : <></>
}

export default React.memo(Map)
