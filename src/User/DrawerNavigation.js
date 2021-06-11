import React from 'react'
import { View, Text } from 'react-native'
import {createDrawerNavigator} from '@react-navigation/drawer'
import UserTabs from './UserTabs'

export default function DrawerNavigation() {
    const Drawer= createDrawerNavigator()
        return (
        <Drawer.Navigator>
            <Drawer.Screen name="Tabs" component={UserTabs}  />
        </Drawer.Navigator>
    )
}
