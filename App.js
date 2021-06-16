/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the UI Kitten etosha
 * https://github.com/akveo/react-native-ui-kitten
 *
 * Documentation: https://akveo.github.io/react-native-ui-kitten/docs
 *
 * @format
 */

import React ,{useState} from 'react';
import { StyleSheet } from 'react-native';
import {
  ApplicationProvider,
  IconRegistry,
} from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import * as eva from '@eva-design/eva';
import SaplashScreen from './src/SaplashScreen'
import {NavigationContainer} from '@react-navigation/native'
import RootStackNavigation from './src/Navigation/RootStackNavigation';

import Test from './src/testScree';
import { default as theme } from './Theme/custom-theme.json';
/**
 * Use any valid `name` property from eva icons (e.g `github`, or `heart-outline`)
 * https://akveo.github.io/eva-icons
 */


export default () => { 
  const [init, setInit] = useState(true)
  React.useEffect(() => {
    setTimeout(() => {
      setInit(false)
    }, 5000);
  }, [])
  if(init)
  {
    return(
      <>
      <IconRegistry icons={EvaIconsPack}/>
      <ApplicationProvider {...eva} theme={{...eva.light,...theme}}>
        <SaplashScreen />
      </ApplicationProvider>
    </>
    )
  }
  return(
  <>
    <IconRegistry icons={EvaIconsPack}/>
    <ApplicationProvider  {...eva} theme={{ ...eva.light, ...theme }}
     
    >
    <NavigationContainer>
    <RootStackNavigation />
    {/* <Test /> */}
    </NavigationContainer>
     </ApplicationProvider>
  </>
)};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    textAlign: 'center',
  },
  likeButton: {
    marginVertical: 16,
  },
});
