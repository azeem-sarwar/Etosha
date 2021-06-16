import React from 'react'
import { View, Text } from 'react-native'
import {createStackNavigator} from '@react-navigation/stack'
import Home from '../Home'
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';

import 'react-native-gesture-handler';

export default function StackNavigatorRider({ navigation, route }) {
    const Stack=createStackNavigator()


    // React.useLayoutEffect(() => {
    //     const routeName = getFocusedRouteNameFromRoute(route);
        
        
    //     if (routeName === "Search" ){
    //         console.log(routeName)
    //         navigation.setOptions({tabBarVisible: false});
    //     }else {
    //         navigation.setOptions({tabBarVisible: true});
    //     }
    // }, [navigation, route]);

    return (
       <Stack.Navigator screenOptions={{
        headerShown:false
      }}>
           <Stack.Screen name="Home" component={Home} />






       </Stack.Navigator>
    )
}




