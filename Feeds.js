
import React, { useState, useEffect, useContext } from 'react';
import {
  Dimensions, SafeAreaView, View, Text, StyleSheet, Button, StatusBar, FlatList, Image, TouchableOpacity
} from 'react-native';
import Video from 'react-native-video';
import changeNavigationBarColor from 'react-native-navigation-bar-color';
import Header from './Header';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { Context } from './App';

const styles = StyleSheet.create({

  instagram: {
    width: 110,
    height: 40,
    marginLeft: 5,
    resizeMode: 'contain'

  },
  add: {
    width: 30,
    height: 30,
    marginBottom: 4,
  },
  like: {
    width: 25,
    height: 25,
    marginBottom: 4,
  },
  mssg: {
    width: 24,
    height: 24,
  },

});

function Feeds() {
  const [index, setIndex] = useContext(Context);
  const [header, setheader] = useState({

    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between'
  });

  const [stories, setStories] = useState([
    {
      'id': '1',
      'name': 'rahul',
      'image': "https://thumbs.dreamstime.com/z/vector-illustration-avatar-dummy-logo-collection-image-icon-stock-isolated-object-set-symbol-web-137160339.jpg",
      'reel': 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
      'thumb': 'https://images.unsplash.com/photo-1579176647030-bd86f6fd4e1e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    }
    ,
    {
      'id': '2',
      'name': 'Narendar Modi',
      'image': 'https://img.etimg.com/thumb/msid-102700724,width-300,height-225,imgsize-25742,resizemode-75/pm-narendra-modi-asks-citizens-to-upload-photos-with-tiranga-how-to-upload-your-tiranga-selfies.jpg',
      'reel': 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4',
      'thumb': 'https://images.unsplash.com/photo-1579176647030-bd86f6fd4e1e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'

    }
    ,
    {
      'id': '3',
      'name': 'Meloni',
      'image': 'https://upload.wikimedia.org/wikipedia/commons/1/1e/Giorgia_Meloni_Official_2023_%28cropped%29.jpg',
      'reel': 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4',
      'thumb': 'https://images.unsplash.com/photo-1579176647030-bd86f6fd4e1e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'

    }
    ,
    {
      'id': '4',
      'name': 'carry',
      'image': 'https://qph.cf2.quoracdn.net/main-qimg-83ce117e1cce4d6df20292629d55b4b7-lq',
      'reel': 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4',
      'thumb': 'https://images.unsplash.com/photo-1579176647030-bd86f6fd4e1e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'

    }
    ,
    {
      'id': '5',
      'name': 'technical guruji',
      'image': 'https://cdn.gadgets360.com/content/assets/technical-guruji-exclusive-on-ndtv.jpg',
      'reel': 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WhatCarCanYouGetForAGrand.mp4',
      'thumb': 'https://images.unsplash.com/photo-1579176647030-bd86f6fd4e1e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'

    },
    {
      'id': '6',
      'name': 'react',
      'image': 'https://upload.wikimedia.org/wikipedia/commons/1/18/React_Native_Logo.png',
      'reel': 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
      'thumb': 'https://images.unsplash.com/photo-1579176647030-bd86f6fd4e1e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'

    }
    ,
    {
      'id': '7',
      'name': 'react-native',
      'image': 'https://upload.wikimedia.org/wikipedia/commons/1/18/React_Native_Logo.png',
      'reel': 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
      'thumb': 'https://images.unsplash.com/photo-1579176647030-bd86f6fd4e1e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'

    }
  ])
  const [loading, setloading] = useState(false);
  function onRefresh() {
    setloading(true)
    setTimeout(() => {
      setloading(false)
    }, 5000)
  }
  const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

  const onbuffer = () => {
    console.warn('buffering');
  }
const [centerItem,setCenterItem] = useState(0);
  return (
    <SafeAreaView style={{ backgroundColor: 'white' }}>
      <StatusBar backgroundColor={'white'} barStyle={'dark-content'} />
      <View style={header}>
        <View style={{ alignItems: 'end', flexDirection: 'row', marginTop: 3 }}>
          <Image source={require('./icons/instagram.png')} style={styles.instagram}></Image>

        </View>
        <View style={{ width: 90, alignItems: 'center', flexDirection: 'row', justifyContent: 'space-around' }}>

          <TouchableOpacity>
            <Icon
              name="heart-outline"
              size={25}
              color={"black"}

            >

            </Icon>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => { setIndex(2) }}>
            <Image source={require('./icons/message.png')} style={styles.mssg}></Image>
          </TouchableOpacity>

        </View>
      </View>

      <FlatList style={{marginBottom:60}}  onScroll={(event) => {
        const offsetY = event.nativeEvent.contentOffset.y;
        setCenterItem(Math.floor(((offsetY + screenHeight / 2) / 650)));
        console.log(Math.floor(((offsetY + screenHeight / 2) / 600)));
      }} ListHeaderComponent={Header} refreshing={loading} onRefresh={onRefresh} keyExtractor={(item) => item.id} data={stories} renderItem={({ item,index }) => {
        return (

          <View style={{ marginBottom: 35 }}>

            <View style={{ width: '100%', height: 600 }}>
              <View style={{ position: 'absolute', marginLeft: 8, top: 8 }}>
                <View style={{ marginTop: 9, justifyContent: 'flex-start', alignItems: 'center', flexDirection: 'row' }}>
                  <TouchableOpacity>
                    <Image source={{ uri: item.image }} style={{ marginLeft: 6, width: 35, height: 35, borderRadius: 40 }} ></Image>
                  </TouchableOpacity>
                  {item.id != '1' ?
                    <Image source={require('./icons/ring.png')} style={{ width: 45, height: 45, position: 'absolute', zIndex: -4 }}></Image>
                    : ''}
                  <Text style={{ color: 'white', marginLeft: 6 }}>{item.name}</Text>
                </View>

              </View>




<Video poster={item.thumb} source={{ uri: item.reel }} onBuffer={onbuffer} paused={!(centerItem == index)} repeat={true} style={{ width: 'auto', height: 600, zIndex: -7 }} resizeMode='cover'></Video>


              <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: 100 }}>
                  <TouchableOpacity>
                    <Icon
                      name="heart-outline"
                      size={28}
                      color={"black"}

                    >

                    </Icon>
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <Image source={require('./icons/comments.png')} style={{ width: 27, height: 27 }}></Image>

                  </TouchableOpacity>
                  <TouchableOpacity>
                    <Image source={require('./icons/share.png')} style={{ width: 27, height: 27 }}></Image>

                  </TouchableOpacity>
                </View>

              </View>
            </View>
          </View>)
      }} />

    </SafeAreaView>

  );
}



export default Feeds;
