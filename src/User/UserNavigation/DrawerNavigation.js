import React from 'react';
import {View, Text, Dimensions} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';

import StackNavigationUser from './HomeStackNavgation';
import {DrawerContent} from '../DrawerContect';

import 'react-native-gesture-handler';
const height = Dimensions.get('screen').height;

export default function DrawerNavigation() {
  const Drawer = createDrawerNavigator();
  return (
    <Drawer.Navigator
      drawerStyle={{
        borderTopRightRadius: 40,
        borderBottomRightRadius: 40,
        zIndex: 10,
        height: height - 80,
      }}
      sceneContainerStyle={{flex: 1}}
      drawerContent={props => <DrawerContent {...props} />}>
      <Drawer.Screen name="Home" component={StackNavigationUser} />




    </Drawer.Navigator>
  );
}
