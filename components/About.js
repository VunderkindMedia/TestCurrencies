import React from 'react'
import {StyleSheet, Text, View} from 'react-native'
import {Container} from './childs/Container';
import { Ionicons } from '@expo/vector-icons';
import {BACKGROUND_COLOR} from '../config/constants';

export const About = () => {

  return (
      <Container style={styles.body}>
            <Text style={styles.title}>
              Добро пожаловать в тестовое приложение
            </Text>
            <View style={styles.icon}>
              <Ionicons name="md-trending-up" size={64} color="#fff"  />
            </View>

            <Text style={styles.subtitle}>Cписок котировок крипто-валют</Text>
      </Container>
  )
}

const styles = StyleSheet.create({
  body: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: BACKGROUND_COLOR
  },
  title: {
    color: '#f7f7f7',
    textAlign: 'center',
    fontSize: 18
  },
  subtitle: {
    color: '#f7f7f7',
    textAlign: 'center',
    fontSize: 24
  },
  icon: {
    borderWidth: 3,
    justifyContent: 'center',
    alignItems: 'center',
    height: 100,
    width: 100,
    borderRadius: 50,
    borderColor: '#fff',
    margin: 25
  }
})