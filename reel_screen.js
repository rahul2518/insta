import { View, Text } from 'react-native'
import React from 'react'
import { useNavigation,useRoute } from '@react-navigation/native';

// Access the parameters passed from the HomeScreen
const Reel_screen = () => {
  const route = useRoute();

  const name = route.params?.name;  console.log(name)
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1 }}>
    {name != undefined ? <Text>{name}</Text> : <Text>No name parameter found</Text>}
  </View>
  )
}

export default Reel_screen