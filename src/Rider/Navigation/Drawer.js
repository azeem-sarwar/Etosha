import React from 'react';
import {View, Text, Dimensions} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';


import {DrawerContent} from './DrawerContent';

import 'react-native-gesture-handler';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';

import { SIZES } from '../../../constants';
import StackNavigatorRider from './Stacknavigator';



const height = Dimensions.get('screen').height;

export default function DrawerRider({navigation,route}) {
  const Drawer = createDrawerNavigator();
//   React.useLayoutEffect(() => {
//     const routeName = getFocusedRouteNameFromRoute(route);
    
    
//     if (routeName === "Search" ){
//         console.log(routeName)
//         navigation.setOptions({tabBarVisible: false});
//     }else {
//         navigation.setOptions({tabBarVisible: true});
//     }
// }, [navigation, route]);
  return (
    <Drawer.Navigator
      drawerStyle={{
        borderTopRightRadius: 40,
        borderBottomRightRadius: 40,
        zIndex: 10,
       
      }}
      sceneContainerStyle={{flex: 1}}
   
      detachInactiveScreens={true}
      drawerContent={props => <DrawerContent {...props} />}>
      <Drawer.Screen name="RiderHome" component={StackNavigatorRider} />




    </Drawer.Navigator>
  );
}
