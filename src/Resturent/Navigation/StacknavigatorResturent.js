import React from 'react'
import { View, Text } from 'react-native'
import {createStackNavigator} from '@react-navigation/stack'
import Home from '../Home'
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';

import 'react-native-gesture-handler';
import UserReview from '../UserReview';
import RiderProfile from '../ResturantProfile';
import EditRiderProfile from '../EditProfile';
import Notification from '../Notification';
import Orders from '../Orders';
import Menu from '../Menue';
import AddMenu from '../AddMenue';
import EtoshaReviews from '../EtoshaReviews';
import Statistics from '../StatisticsResturant';

export default function StackNavigatorReturant({ navigation, route }) {
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
           <Stack.Screen name="MyReview" component={UserReview} />
           <Stack.Screen name="Returent Profile" component={RiderProfile} />
           <Stack.Screen name="EditResturantProfile" component={EditRiderProfile} />        
           <Stack.Screen name="ResturantNotification" component={Notification} />
           <Stack.Screen name="Orders" component={Orders} />
           <Stack.Screen name="Menu" component={Menu} />
           <Stack.Screen name="Add Menu" component={AddMenu} />
<Stack.Screen name="Etosha Reviewe" component={EtoshaReviews} />
<Stack.Screen name="Returant State" component={Statistics} />


       </Stack.Navigator>
    )
}




