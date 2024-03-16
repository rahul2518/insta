import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, FlatList } from 'react-native';

const Header = (props) => {
  const [stories, setStories] = useState([
    {
      'id': '1',
      'name': 'rahul',
      'image': "https://thumbs.dreamstime.com/z/vector-illustration-avatar-dummy-logo-collection-image-icon-stock-isolated-object-set-symbol-web-137160339.jpg",
      'reel': 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4', 'thumb': 'https://images.unsplash.com/photo-1579176647030-bd86f6fd4e1e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    }
    ,
    {
      'id': '2',
      'name': 'Narendar Modi',
      'image': 'https://img.etimg.com/thumb/msid-102700724,width-300,height-225,imgsize-25742,resizemode-75/pm-narendra-modi-asks-citizens-to-upload-photos-with-tiranga-how-to-upload-your-tiranga-selfies.jpg',
      'reel': 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4', 'thumb': 'https://images.unsplash.com/photo-1579176647030-bd86f6fd4e1e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'

    }
    ,
    {
      'id': '3',
      'name': 'Meloni',
      'image': 'https://upload.wikimedia.org/wikipedia/commons/1/1e/Giorgia_Meloni_Official_2023_%28cropped%29.jpg',
      'reel': 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4', 'thumb': 'https://images.unsplash.com/photo-1579176647030-bd86f6fd4e1e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'

    }
    ,
    {
      'id': '4',
      'name': 'carry',
      'image': 'https://qph.cf2.quoracdn.net/main-qimg-83ce117e1cce4d6df20292629d55b4b7-lq',
      'reel': 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4', 'thumb': 'https://images.unsplash.com/photo-1579176647030-bd86f6fd4e1e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'

    }
    ,
    {
      'id': '5',
      'name': 'technical guruji',
      'image': 'https://cdn.gadgets360.com/content/assets/technical-guruji-exclusive-on-ndtv.jpg',
      'reel': 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4', 'thumb': 'https://images.unsplash.com/photo-1579176647030-bd86f6fd4e1e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'

    },
    {
      'id': '6',
      'name': 'react',
      'image': 'https://upload.wikimedia.org/wikipedia/commons/1/18/React_Native_Logo.png',
      'reel': 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4', 'thumb': 'https://images.unsplash.com/photo-1579176647030-bd86f6fd4e1e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'

    }
    ,
    {
      'id': '7',
      'name': 'react-native',
      'image': 'https://upload.wikimedia.org/wikipedia/commons/1/18/React_Native_Logo.png',
      'reel': 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4', 'thumb': 'https://images.unsplash.com/photo-1579176647030-bd86f6fd4e1e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'

    }
  ]);


  return (
    <View >
      
      <FlatList onTouchStart={(event) => { console.log(event.nativeEvent ? true : false) }} horizontal showsHorizontalScrollIndicator={false} keyExtractor={(item) => item.id} data={stories} renderItem={({ item }) => {
        return (
          <View style={{ marginBottom : 10 }} >

            <View style={{ justifyContent: 'space-between', marginLeft: 15, alignItems: 'center' }}>
              <View style={{ marginLeft: 4.5, marginTop: 9, justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
                <TouchableOpacity>
                  <Image source={{ uri: item.image }} style={{ width: 70, height: 70, borderRadius: 40 }} ></Image>
                </TouchableOpacity>
                {item.id != '1' ?
                  <Image source={require('./icons/ring.png')} style={{ width: 85, height: 85, position: 'absolute', zIndex: -4 }}></Image>
                  : ''}

              </View>
              {item.id == '1' ? <View style={{ position: 'absolute', width: 90, marginTop: 60 }}>
                <Image source={require('./icons/addStory.png')} style={{ width: 20, height: 20, backgroundColor: 'white', borderRadius: 40, marginLeft: 60 }}></Image>
              </View> : ""}



              <Text style={{ fontSize: 12, marginTop: 9, color: 'black' }}>{item.name}</Text>
            </View>



          </View>
        )
      }} />
    </View>

  )

}

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


export default Header;
