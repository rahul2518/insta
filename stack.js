import React, { useState } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { NavigationContainer } from '@react-navigation/native';
import {
  SafeAreaView, View, Text, StyleSheet, Button, StatusBar, FlatList, Image, TouchableOpacity
} from 'react-native';

import Feeds from './Feeds';
import Search from './Search';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
const MyTabs = () => {
  
  const Home = () =>{
    return(
    
    <Feeds  />
    )
  
  }

  const [visibility, setTabVisibility] = useState(true);
  return (
   

    <Tab.Navigator  initialRouteName='Home' screenOptions={{ tabBarStyle: { display: visibility ? 'flex' : 'none' }, tabBarShowLabel: false  }} >
      <Tab.Screen
        name="Home"
        component={Home} // Pass handleTabChange as a prop to Feeds
        options={{
          headerShown: false,
          tabBarIcon: ({ focused, color, size }) => (
            focused ? 
              <Ionicons name="home" size={25} color="black" />
              : <Ionicons name="home-outline" size={25} color="black" />
          ),
        }}
      />
      <Tab.Screen
        name="Find"
        component={Feeds}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused, color, size }) => (
            focused ?
              <Ionicons name="search" size={25} color="black" />
              : <Ionicons name="search-outline" size={25} color="black" />
          ),
        }}
      />
      <Tab.Screen
        name="add"
        component={Feeds}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            focused ?
              <Ionicons name="add-circle" size={25} color="black" />
              : <Ionicons name="add-circle-outline" size={25} color="black" />
          ),
        }}
      />
      <Tab.Screen
        name="reels"
        component={Feeds}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            focused ?
              <Ionicons name="play-circle" size={25} color="black" />
              : <Ionicons name="play-circle-outline" size={25} color="black" />
          ),
        }}
      />
      <Tab.Screen
        name="Account"
        component={Feeds}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            focused ?
              <MaterialCommunityIcons name="account-circle" size={25} color="black" />
              : <MaterialCommunityIcons name="account-circle-outline" size={25} color="black" />
          ),
        }}
      />
    </Tab.Navigator>
  );
};


export default MyTabs;
