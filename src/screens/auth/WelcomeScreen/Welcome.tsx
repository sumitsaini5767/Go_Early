import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { WrapperContainer } from '../../../components'
import Imagepath from '../../../assets/Gallery/imagepath'

const Welcome = () => {
  return (
    <WrapperContainer>
      <Imagepath.auth.WelcomeScreen />
      <View>
        <Text>Welcome</Text>
      </View>
    </WrapperContainer>
  )
}

export default Welcome

const styles = StyleSheet.create({

})