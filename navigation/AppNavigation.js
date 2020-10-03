import React from 'react'
import {About} from '../components/About';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import {Currencies} from '../components/Currencies';
import { Ionicons } from '@expo/vector-icons';
import { createStackNavigator } from '@react-navigation/stack';
import {BACKGROUND_COLOR} from '../config/constants';
const Stack = createStackNavigator();

export const AboutStack = () => {
  
  return (
      <Stack.Navigator>
        <Stack.Screen
            options={{ headerStyle: {
                backgroundColor: BACKGROUND_COLOR,
                shadowRadius: 0,
                shadowOffset: { height: 0}
              },

              headerTintColor: '#fff'
            }}
            name='О приложении'
            component={About}/>
      </Stack.Navigator>
  )
}

export const CurrenciesStack = () => {


  return (
      <Stack.Navigator>
        <Stack.Screen
            options={{ headerStyle: {
              backgroundColor: BACKGROUND_COLOR,
                shadowRadius: 0,
                shadowOffset: { height: 0}
                },
              headerTintColor: '#fff',
            }}
            name='Котировки'
            component={Currencies}
        />
      </Stack.Navigator>
  )
}

export const AppNavigation = () => {

  const Tab = createMaterialBottomTabNavigator();

  return (
        <NavigationContainer>
          <Tab.Navigator barStyle={{ backgroundColor: BACKGROUND_COLOR }}
                         activeColor='#fff'
                         inactiveColor="#DEDEDE"

          >
            <Tab.Screen
                name="О приложении"
                component={AboutStack}
                options={{
                  tabBarIcon: ({ color }) => (
                      <Ionicons name="ios-information-circle-outline" size={24} color={color}  />
                  ),

                }}/>
            <Tab.Screen
                name="Список котировок"
                component={CurrenciesStack}
                options={{
                  tabBarIcon: ({ color }) => (
                      <Ionicons name="md-trending-up" size={24} color={color} />
                  ),
                  unmountOnBlur: false
                }}
            />
          </Tab.Navigator>
        </NavigationContainer>
  )
}