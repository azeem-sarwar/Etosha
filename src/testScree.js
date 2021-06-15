import React from "react";
import {
  SafeAreaView, 
  View,
  StyleSheet
} from "react-native";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps"
import { GOOGLE_API_KEY_andriod } from "../constants";


const Test = () => {

  const initialRegion ={ 
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  }

  return(
    <View style={{ flex: 1, backgroundColor: 'red' }}>
      <MapView 
        style={{ flex: 1}}
        style={styles.map}
        provider={PROVIDER_GOOGLE}
        initialRegion={initialRegion}
        apikey={GOOGLE_API_KEY_andriod}
    
      />
    </View>
  )}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    height: 400,
    width: 400,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
 });

export default Test;