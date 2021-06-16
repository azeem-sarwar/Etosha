import React from 'react'
import { View, Text } from 'react-native'
import {createStackNavigator} from '@react-navigation/stack'
import Home from '../Home'
import NeraByResturent from '../NeraByResturant'
import PopularFood from '../PopularFood'
import SearchScreen from '../Search'
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import FoodPage from '../FoodPage'
import ResturentProfile from '../ResturentProfile'
import FoodCategory from '../DetailFoordCategory'
import Cart from '../cart'
import CheckOut from '../CheckOut'
import MyCard from '../MyCard'
import EditCard from '../EditCard'
import FilterSearch from '../FilterSearch'
import 'react-native-gesture-handler';
import Profile from '../Profile'
import EditProfile from '../EditProfile'
import Categories from '../Categories'
import MyOrder from '../MyOrder'
import Review from '../Review'
import NearByFoodMap from '../NearByFoodMap'
import TrackOrder from '../TrackOrder'
import FoodOffer from '../FoodOffer'
export default function StackNavigationUser({ navigation, route }) {
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
           <Stack.Screen name="nearbyResturen" component={NeraByResturent} />
           <Stack.Screen name="popularFood" component={PopularFood} />
           <Stack.Screen name="Search" component={SearchScreen} />
           <Stack.Screen name="FoodPage" component={FoodPage} />
           <Stack.Screen name="ResturentProfile" component={ResturentProfile} />
           <Stack.Screen name="FoodCategory" component={FoodCategory} />
           <Stack.Screen name="Cart" component={Cart} />
           <Stack.Screen name="CheckOut" component={CheckOut} />
           <Stack.Screen name="MyCard" component={MyCard} />
           <Stack.Screen name="EditCard" component={EditCard} />
           <Stack.Screen name="FilterSearch" component={FilterSearch} />
           <Stack.Screen name="Profile" component={Profile} />
           <Stack.Screen name="EditProfile" component={EditProfile} />
           <Stack.Screen name="Categories" component={Categories} />
           <Stack.Screen name="MyOrder" component={MyOrder} />
           <Stack.Screen name="Review" component={Review} />
           <Stack.Screen name="FoodMap" component={NearByFoodMap} />
           <Stack.Screen name="TrackFood" component={TrackOrder} />
           <Stack.Screen name="FoodOffer" component={FoodOffer} />






       </Stack.Navigator>
    )
}



export function ProfileStack({ navigation, route }) {
    const Stack=createStackNavigator()

    return (
       <Stack.Navigator screenOptions={{
        headerShown:false
      }}>
           <Stack.Screen name="Profile" component={Profile} />

           <Stack.Screen name="Search" component={SearchScreen} />
           <Stack.Screen name="FoodPage" component={FoodPage} />
           <Stack.Screen name="ResturentProfile" component={ResturentProfile} />
           <Stack.Screen name="FoodCategory" component={FoodCategory} />
           <Stack.Screen name="Cart" component={Cart} />
           <Stack.Screen name="CheckOut" component={CheckOut} />
           <Stack.Screen name="MyCard" component={MyCard} />
           <Stack.Screen name="EditCard" component={EditCard} />
           <Stack.Screen name="FilterSearch" component={FilterSearch} />
           <Stack.Screen name="EditProfile" component={EditProfile} />
           <Stack.Screen name="MyOrder" component={MyOrder} />
           <Stack.Screen name="Review" component={Review} />
           <Stack.Screen name="FoodMap" component={NearByFoodMap} />
           <Stack.Screen name="TrackFood" component={TrackOrder} />
       </Stack.Navigator>
    )
}

export function StoreStack({ navigation, route }) {
    const Stack=createStackNavigator()

    return (
       <Stack.Navigator screenOptions={{
        headerShown:false
      }}>
           <Stack.Screen name="Cart" component={Cart} />
           <Stack.Screen name="Search" component={SearchScreen} />
           <Stack.Screen name="CheckOut" component={CheckOut} />
           <Stack.Screen name="MyCard" component={MyCard} />
           <Stack.Screen name="EditCard" component={EditCard} />
           <Stack.Screen name="FilterSearch" component={FilterSearch} />
           <Stack.Screen name="MyOrder" component={MyOrder} />
           <Stack.Screen name="Review" component={Review} />
           <Stack.Screen name="FoodMap" component={NearByFoodMap} />
           <Stack.Screen name="TrackFood" component={TrackOrder} />
       </Stack.Navigator>
    )
}
