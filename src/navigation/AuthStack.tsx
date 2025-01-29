import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SpashScreen, OnBoardingScreen, Welcome, SignupScreen, VerifyPhoneScreen, SetPasswordScreen, SignInScreen } from '../screens/auth'
import { navigationStrings } from './NavigationStrings'
const AuthStack = (Stack: any) => {
    return (
        <>
            <Stack.Screen name={navigationStrings.SplashScreen} component={SpashScreen} />
            {/* <Stack.Screen name="OnBoardingScreen" component={OnBoardingScreen} /> */}
            <Stack.Screen name={navigationStrings.Welcome} component={Welcome} />
            <Stack.Screen name={navigationStrings.SignInScreen} component={SignInScreen} />
            <Stack.Screen name={navigationStrings.SignupScreen} component={SignupScreen} />
            <Stack.Screen name={navigationStrings.VerifyPhoneScreen} component={VerifyPhoneScreen} />
            <Stack.Screen name={navigationStrings.SetPasswordScreen} component={SetPasswordScreen} />
        </>
    )
}

export default AuthStack

const styles = StyleSheet.create({})