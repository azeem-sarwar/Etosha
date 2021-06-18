import React from 'react'
import { View, Text } from 'react-native'
import {createStackNavigator} from '@react-navigation/stack'
import Home from '../Home'
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';

import 'react-native-gesture-handler';
import Deliveries from '../Deliveries';
import RiderOrderTracking from '../RiderOrderTracking';
import Review from '../UserReview';
import RiderProfile from '../RiderProfile';
import EditRiderProfile from '../EditRiderProfile';
import DeliveriesNearMe from '../NearMeDeliveries';
import Notification from '../Notification';

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
           <Stack.Screen name="Rider Home" component={Home} />
           <Stack.Screen name="Deliveries" component={Deliveries} />
           <Stack.Screen name="Rider Delivery Tracking" component={RiderOrderTracking} />
           <Stack.Screen name="MyReview" component={Review} />
           <Stack.Screen name="Rider Profile" component={RiderProfile} />
           <Stack.Screen name="EditRiderProfile" component={EditRiderProfile} />
           <Stack.Screen name="Deliveries near me" component={DeliveriesNearMe} />
           <Stack.Screen name="Notification" component={Notification} />




       </Stack.Navigator>
    )
}




