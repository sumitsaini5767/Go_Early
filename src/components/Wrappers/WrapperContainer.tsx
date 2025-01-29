import { StyleSheet, Text, View } from 'react-native'
import React, { Children } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import appColors from '../../styles/Colors'

interface WrapperContainerProps {
    children: React.ReactNode
}

const WrapperContainer = ({ children }: WrapperContainerProps) => {
  return (
    <SafeAreaView style={styles.container}>
      {children}
    </SafeAreaView>
  )
}

export default WrapperContainer

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: appColors.appBgColor,
    alignItems: 'center',
  }
})