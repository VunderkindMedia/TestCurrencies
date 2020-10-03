import React from 'react'
import {BACKGROUND_COLOR} from '../../config/constants';
import {ActivityIndicator, View} from 'react-native';

export const ProgressIndicator = ({size, animating, style}) => {

  return (
      <View style={{flex: 1, justifyContent:'center', alignItems:'center', backgroundColor: BACKGROUND_COLOR}}>
        <ActivityIndicator animating={animating} style={style} size={size} color={Platform.OS === 'android' && '#c7c7c7'}/>
      </View>
  )
}