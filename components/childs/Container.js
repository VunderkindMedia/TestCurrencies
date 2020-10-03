import React from 'react'
import { View } from 'react-native'

export const Container = ({children, style}) => {
  return (

      <View
          style={[{ flex: 1, backgroundColor: '#242424'},style]} >
            {children}
      </View>
  )
}