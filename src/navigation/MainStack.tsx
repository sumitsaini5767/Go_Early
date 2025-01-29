import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { HomeScreen } from '../screens/main'

const MainStack = (Stack: any) => {
  return (
    <>
    <Stack.Screen name="Home" component={HomeScreen} />
    </>
  )
}

export default MainStack

const styles = StyleSheet.create({})