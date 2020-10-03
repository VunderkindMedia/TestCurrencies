import React from 'react'
import {BACKGROUND_COLOR} from '../../config/constants';
import {Text, View} from 'react-native';

export const ErrorView = ({error}) => {

  return (
      <View style={{ backgroundColor: BACKGROUND_COLOR, flex: 1, justifyContent:'center', alignItems: 'center'}}>
        <Text style={{color: '#c7c7c7'}}>{error}</Text>
      </View>
  )
}