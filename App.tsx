import { View, Text } from 'react-native'
import React, { useState } from 'react'
import  Tab  from './TabView'
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Reel_screen from './reel_screen';
export const NavigationContext = React.createContext({});
const Stack = createNativeStackNavigator();
const App = () => {
  const navigationRef = React.useRef<any>();   
  const navigate = (screenName: string) => {
    navigationRef.current?.navigate(screenName);
  };
  return (
    <NavigationContainer ref={navigationRef}>

    <Stack.Navigator>
      <Stack.Screen
      
        name="HomeScreen"
        component={Tab}
        options={ {headerShown: false }}
        
      />
      <Stack.Screen name="reel" component={Reel_screen} />

    </Stack.Navigator>
  </NavigationContainer>
  
  )
}

export default App