import React from 'react';
import { MapView, PROVIDER_GOOGLE } from 'react-native-maps';
import { StyleSheet } from 'react-native';

const MapaFerias = () => {
  return (
    <MapView
      style={styles.map}
      initialRegion={{
        latitude: -33.4375039,
        longitude: -70.6353482,
        latitudeDelta: 0.1,
        longitudeDelta: 0.3
      }}
      provider={PROVIDER_GOOGLE} />
  );
};

const styles = StyleSheet.create({
  map: {
    width: '100%',
    height: '100%',
  },
});

export default MapaFerias;