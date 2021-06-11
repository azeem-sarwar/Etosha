import React from 'react'
import { View, Text } from 'react-native'

import {createStackNavigator} from '@react-navigation/stack'
import Onboarding from '../Onboarding/Onboarding'
import LoginSignUpScreen from '../Auth/LoginSignUpScreen'
import Login from '../Auth/Login'
import SignUp from '../Auth/SignUp'
import EnterOTp from '../Auth/EnterOTp'
import Forget from '../Auth/Forget'
import ResetPassword from '../Auth/ResetPassword'
import UserTabs from './../User/UserTabs'
import DrawerNavigation from '../User/DrawerNavigation'

export default function RootStackNavigation() {
    const Stack=createStackNavigator()
    return (
        <Stack.Navigator screenOptions={{
            headerShown:false
          }}>
            <Stack.Screen name="onboarding" component={Onboarding} />
            <Stack.Screen name="loginsingup" component={LoginSignUpScreen} />
            <Stack.Screen name="login" component={Login} />
            <Stack.Screen name="signup" component={SignUp} />
            <Stack.Screen name="otp" component={EnterOTp} />
            <Stack.Screen name="forget" component={Forget} />
            <Stack.Screen name="ressetpass" component={ResetPassword} />
            <Stack.Screen name="UserTab" component={UserTabs} />



        </Stack.Navigator>
    )
}
