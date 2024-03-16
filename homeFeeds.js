import { View, Text } from 'react-native'

import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { TabView, SceneMap } from 'react-native-tab-view';

import MyTabs from './stack';

import { NavigationContainer } from '@react-navigation/native';
import Search from './Search';
import HomeScreen from './HomeScreen';

const homeFeeds = () => {
    const Stack = createStackNavigator();

  return (
    <Stack.Navigator
    initialRouteName="Feed"
    screenOptions={{
      headerShown: false,
      cardStyleInterpolator: ({ current, next, layouts }) => {
        return {
          cardStyle: {
            transform: [
              {
                translateX: current.progress.interpolate({
                  inputRange: [0, 1],
                  outputRange: [layouts.screen.width, 0],
                }),
              },
            ],
          },
        };
      },
    }}
  >
    <Stack.Screen name="Feed" component={MyTabs} />
    <Stack.Screen name="Message" component={Search}  />
  </Stack.Navigator>


  )
}

export default homeFeeds