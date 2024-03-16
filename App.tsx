import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';
import { Dimensions } from 'react-native';
import MyTabs from './stack';
import { Camera } from 'react-native-vision-camera';
import camera from './camera';

const BlueScreen = () => (
  <View style={[styles.scene, { backgroundColor: 'blue' }]}>
    <Text style={styles.text}>Blue Screen</Text>
  </View>
);

export const Context = React.createContext({});



const RedScreen = () => (
  <View style={[styles.scene, { backgroundColor: 'red' }]}>
    <Text style={styles.text}>Red Screen</Text>
  </View>
);

const initialLayout = { width: Dimensions.get('window').width };

const FirstRoute = () => camera;
const SecondRoute = () => <MyTabs />;
const ThirdRoute = () => <RedScreen />;

const TabViewExample = () => {
  const [index, setIndex] = useState(1);
  
  const [routes] = useState([
    { key: 'first', title: 'Blue' },
    { key: 'second', title: 'Counter' },
    { key: 'third', title: 'Red' },
  ]);

  const renderScene = SceneMap({
    first: camera,
    second: SecondRoute,
    third: ThirdRoute,
  });

  return (
    <Context.Provider value={[index, setIndex]}>
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={initialLayout}
        renderTabBar={() => null}
      />
    </Context.Provider>
  );
};

const styles = StyleSheet.create({
  scene: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontSize: 20,
  },
});

export default TabViewExample;
