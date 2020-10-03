import React from 'react';
import {AppNavigation} from './navigation/AppNavigation';
import 'react-native-gesture-handler';
import {ActivityIndicator} from 'react-native'
import {useFonts} from 'expo-font';
import {AppState} from './context/AppState';

export default function App() {

  const [loaded] = useFonts({
    crypto: require('./assets/fonts/CryptoIcons.ttf'),
  });

  return (
      loaded ? <AppState><AppNavigation/></AppState>: <ActivityIndicator size='large' />

  );
}

