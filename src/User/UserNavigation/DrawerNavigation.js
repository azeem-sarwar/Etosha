import React from 'react';
import {View, Text, Dimensions} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';

import StackNavigationUser from './HomeStackNavgation';
import {DrawerContent} from '../DrawerContect';

import 'react-native-gesture-handler';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import UserTabs from './UserTabs';
import { SIZES } from '../../../constants';



const height = Dimensions.get('screen').height;

export default function DrawerNavigation({navigation,route}) {
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
      sceneContainerStyle={{flex: 1,zIndex:-10}}
      drawerType="parmanent"
      detachInactiveScreens={true}
      drawerContent={props => <DrawerContent {...props} />}>
      <Drawer.Screen name="Home" component={UserTabs} />




    </Drawer.Navigator>
  );
}
