import React from 'react';
import {View, Text, Dimensions} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';


import {DrawerContent} from './DrawerContent';

import 'react-native-gesture-handler';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';


import StackNavigatorReturant from './StacknavigatorResturent';




export default function DrawerResturant({navigation,route}) {
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
      <Drawer.Screen name="ResturantHome" component={StackNavigatorReturant} />




    </Drawer.Navigator>
  );
}
