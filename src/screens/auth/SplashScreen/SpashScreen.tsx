import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { navigationStrings } from '../../../navigation/NavigationStrings'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'


const SpashScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>()
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate(navigationStrings.Welcome)
    }, 2000)
  }, [])
  return (
    <View>
      <Text>SpashScreen</Text>
    </View>
  )
}

export default SpashScreen

const styles = StyleSheet.create({})