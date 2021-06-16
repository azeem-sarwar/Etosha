import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BottomNavigation, BottomNavigationTab, Layout, Text } from '@ui-kitten/components';
import {View }from 'react-native'

const { Navigator, Screen } = createBottomTabNavigator();

const UsersScreen = () => (
  <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text category='h1'>USERS</Text>
  </Layout>
);

const OrdersScreen = () => (
  <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text category='h1'>ORDERS</Text>
  </Layout>
);

const BottomTabBar = ({ navigation, state }) => (
  <BottomNavigation
    selectedIndex={state.index}
    appearance='noIndicator'
    onSelect={index => navigation.navigate(state.routeNames[index])}>
    <BottomNavigationTab icon={()=>(<View style={{height:100,width:100,backgroundColor:"#000"}}></View>)} title='USERS'/>
    <BottomNavigationTab title='ORDERS'/>
  </BottomNavigation>
);

const TabNavigator = () => (
  <Navigator tabBar={props => <BottomTabBar {...props} />}>
    <Screen name='Users' component={UsersScreen}/>
    <Screen name='Orders' component={OrdersScreen}/>
  </Navigator>
);

const Test = () => (
  
    <TabNavigator/>
  
);
export default Test;