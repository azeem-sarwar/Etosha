import React, { Component } from 'react';
import { Text, View, StyleSheet, Dimensions } from 'react-native';
import MapView, { Marker, Circle, Polyline } from 'react-native-maps';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});


class MapApp extends Component {
  render() {
    return (
      <View style={styles.container}>

        <MapView style={styles.map}
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        >
          <Marker
            coordinate={{ latitude: 37.78825, longitude: -122.4324 }}
          />

          <Circle
            center={{ latitude: 37.78825, longitude: -122.4324 }}
            radius={1000}
            strokeWidth={3}
            strokeColor="green"
            lineDashPattern={[10]} />


        </MapView>
      </View>
    );
  }
}

export default MapApp;