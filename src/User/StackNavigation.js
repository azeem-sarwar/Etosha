import React from 'react'
import { View, Text } from 'react-native'
import {createStackNavigator} from '@react-navigation/stack'
import Home from './Home'
import NeraByResturent from './NeraByResturent'
import PopularFood from './PopularFood'
import SearchScreen from './Search'
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import FoodPage from './FoodPage'

export default function StackNavigationUser({ navigation, route }) {
    const Stack=createStackNavigator()


    // React.useLayoutEffect(() => {
    //     const routeName = getFocusedRouteNameFromRoute(route);
    //     console.log(routeName)
    //     if (routeName === "Search"){
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
           <Stack.Screen name="nearbyResturen" component={NeraByResturent} />
           <Stack.Screen name="popularFood" component={PopularFood} />
           <Stack.Screen name="Search" component={SearchScreen} />
           <Stack.Screen name="FoodPage" component={FoodPage} />

       </Stack.Navigator>
    )
}
