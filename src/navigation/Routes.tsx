import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { OnBoardingScreen, SetPasswordScreen, SignupScreen, SpashScreen, VerifyPhoneScreen, Welcome } from '../screens/auth';
import SignInScreen from '../screens/auth/SignIn/SignInScreen';
import AuthStack from './AuthStack';
import MainStack from './MainStack';
const Stack = createNativeStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
      >
        {AuthStack(Stack)}
        {/* {MainStack(Stack)} */}
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Routes

const styles = StyleSheet.create({})